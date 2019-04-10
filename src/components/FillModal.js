const Modal = require('./Modal')
const BaseAssetAmountPercentInputGroup = require('./BaseAssetAmountPercentInputGroup')
const ValuationInputGroup = require('./ValuationInputGroup')
const e18Bignumber = require('../e18Bignumber')
const Button = require('./Button')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('../../lib/amorphBignumber')
const Alert = require('./Alert')
const FillSummary = require('./FillSummary')
const Element = require('./Element')
const ButtonGroup = require('./ButtonGroup')

module.exports = class FillModal extends Modal {
  constructor(main, order) {
    super('lg')

    this.main = main
    this.order = order

    this.title.setText('Fill Order')

    this.start = new Element('div')

    this.baseAssetAmountPercentInputGroup = new BaseAssetAmountPercentInputGroup(order.getBaseAssetAmountPercentBignumber())
    this.valuationInputGroup = new ValuationInputGroup(main.quoteAssetLabel)

    this.baseAssetAmountPercentInputGroup.emitter.on('change.baseAssetAmount', (baseAssetAmount) => {
      this.baseAssetAmount = baseAssetAmount
    })

    this.valuationInputGroup.setValuation(order.getValuation())
    this.valuationInputGroup.input.$.disabled = 'true'

    this.status = new Alert()
    this.status.setStyle('marginTop', 10)
    this.status.setIsHidden(true)

    this.buttonGroup = new ButtonGroup

    this.nextButton = new Button('light', 'View Summary')
    this.nextButton.$.onclick = this.onNextButtonClick.bind(this)

    this.footer.destroy()

    this.buttonGroup.appendChild(this.nextButton)

    this.start.appendChild(this.baseAssetAmountPercentInputGroup)
    this.start.appendChild(this.valuationInputGroup)
    this.start.appendChild(this.status)
    this.start.appendChild(this.buttonGroup)
    this.body.appendChild(this.start)

    this.setBaseAssetAmount()
  }

  async setBaseAssetAmount() {
    const baseAssetFillable = await this.order.fetchBaseAssetFillable()
    this.baseAssetAmountPercentInputGroup.setBaseAssetAmount(baseAssetFillable)
    this.baseAssetAmountPercentInputGroup.setMaxBaseAssetAmount(baseAssetFillable)
  }

  getTakerAssetAmount() {
    if (this.order.getType() === 'buy') {
      return this.baseAssetAmount
    } else {
      return this.getQuoteAssetAmount()
    }
  }

  getQuoteAssetAmount() {
    return this.order.getValuation().as(amorphBignumber.unsigned, (valuationBignumber) => {
      return valuationBignumber.times(this.baseAssetAmount.to(amorphBignumber.unsigned)).div(10000).integerValue()
    })
  }

  onNextButtonClick() {
    this.start.setIsHidden(true)
    this.title.setText('Fill Order - Summary')
    this.summary = new FillSummary(this)
    this.body.appendChild(this.summary)
  }

  backToStart() {
    this.summary.destroy()
    this.start.setIsHidden(false)
  }

  setStatus(type, text) {
    this.status.setType(type)
    this.status.setText(text)
    this.status.setIsHidden(false)
  }




}
