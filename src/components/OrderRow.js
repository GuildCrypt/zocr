const Row = require('./Row')
const Cell = require('./Cell')
const amorphBignumber = require('../../lib/amorphBignumber')
const e18Bignumber = require('../e18Bignumber')
const Anchor = require('./Anchor')
const FillModal = require('./FillModal')
const CancelModal = require('./CancelModal')
const fetchUltralightbeam =  require('../fetchUltralightbeam')
const amorphNumber = require('amorph-number')
const fetchUserAddress = require('../fetchUserAddress')

module.exports = class OrderRow extends Row {
  constructor(main, orderIndex, order, showFilledOrders) {
    super([])

    this.main = main
    this.orderIndex = orderIndex
    this.order = order
    this.showFilledOrders = showFilledOrders

    this.idCell = new Cell(orderIndex.to(amorphNumber.unsigned))
    this.typeCell = new Cell(order.getPrettyType())
    this.baseAssetAmountPercentCell = new Cell(
      `${order.getBaseAssetAmountPercentBignumber()}%`
    )
    this.baseAssetFillablePercentCell = new Cell('Loading...')
    this.valuationInputGroupCell = new Cell(
      `${order.getDaiValuation().to(amorphBignumber.unsigned)} DAI`
    )
    this.fillCell = new Cell()
    this.cancelCell = new Cell()

    this.fillAnchor = new Anchor('Fill', '#', this.openFillModal.bind(this))
    this.fillCell.appendChild(this.fillAnchor)
    this.fillAnchor.setIsHidden(true)

    this.cancelAnchor = new Anchor('Cancel', '#', this.openCancelModal.bind(this))
    this.cancelCell.appendChild(this.cancelAnchor)
    this.cancelAnchor.setIsHidden(true)

    this.idCell.setStyle('color', '#999')
    this.typeCell.setStyle('color', '#999')
    this.baseAssetAmountPercentCell.setStyle('color', '#999')

    this.appendChild(this.idCell)
    this.appendChild(this.typeCell)
    this.appendChild(this.baseAssetAmountPercentCell)
    this.appendChild(this.baseAssetFillablePercentCell)
    this.appendChild(this.valuationInputGroupCell)
    this.appendChild(this.fillCell)
    this.appendChild(this.cancelCell)

    this.onBlock()

    fetchUltralightbeam().then((ultralightbeam) => {
      ultralightbeam.blockPoller.emitter.on('block', this.onBlock.bind(this))
    })

    this.setCancelAnchor()
  }

  async setCancelAnchor() {
    const userAddress = await fetchUserAddress()
    if (userAddress.equals(this.order.pojo.makerAddress)) {
      this.cancelAnchor.setIsHidden(false)
    }
  }

  async onBlock() {
    const baseAssetFillablePercentBignumber = await this.order.fetchBaseAssetFillablePercentBignumber()

    if (
      this.baseAssetFillablePercentBignumber
      && this.baseAssetFillablePercentBignumber.eq(baseAssetFillablePercentBignumber)
    ) {
      return
    }

    this.baseAssetFillablePercentBignumber = baseAssetFillablePercentBignumber
    this.baseAssetFillablePercentCell.setText(`${baseAssetFillablePercentBignumber}%`)

    if (baseAssetFillablePercentBignumber.eq(0)) {
      this.fillAnchor.setIsHidden(true)
      if (!this.showFilledOrders) {
        this.setIsHidden(true)
      }
    } else {
      this.fillAnchor.setIsHidden(false)
      this.setIsHidden(false)
    }
  }

  getFillModal() {
    if (this.fillModal) {
      return this.fillModal
    }
    this.fillModal = new FillModal(this.main, this.order)
    document.body.appendChild(this.fillModal.$)
    return this.fillModal
  }

  openFillModal() {
    this.getFillModal().open()
  }

  getCancelModal() {
    if (this.cancelModal) {
      return this.cancelModal
    }
    this.cancelModal = new CancelModal(this.main, this.order)
    document.body.appendChild(this.cancelModal.$)
    return this.cancelModal
  }

  openCancelModal() {
    this.getCancelModal().open()
  }

}
