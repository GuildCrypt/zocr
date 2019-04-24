const Element = require('./Element')
const Header = require('./Header')
const Button = require('./Button')
const Row = require('./Row')
const Cell = require('./Cell')
const SufficientAllowanceRow = require('./SufficientAllowanceRow')
const SufficientBalanceRow = require('./SufficientBalanceRow')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('../../lib/amorphBignumber')
const amorphHex = require('amorph-hex')
const e18Bignumber = require('../e18Bignumber')
const Order = require('../../lib/Order')
const Amorph = require('amorph')
const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const fetchSubprovider = require('../fetchSubprovider')
const Alert = require('./Alert')
const fetchWeb3Zocr = require('../fetchWeb3Zocr')
const Table = require('./Table')
const ButtonGroup = require('./ButtonGroup')
const fetchUltralightbeam =  require('../fetchUltralightbeam')

module.exports = class CreateSummary extends Element {
  constructor(create, order) {
    super('div')

    this.create = create
    this.order = order

    const makerAssetLabel = order.getMakerAssetLabel()

    const title = new Header(4, 'Order Summary')

    const baseRow = new Row([
      new Cell(order.getPrettyType()),
      new Cell(
        `${create.baseAssetAmount.to(amorphBignumber.unsigned).div(10000).times(100)}% of all ${create.main.baseAssetLabel} (${create.baseAssetAmount.to(amorphNumber.unsigned)}/10000)`
      )
    ])
    const quoteRow = new Row([
      new Cell('For'),
      new Cell(
        `${create.getQuoteAssetAmount().to(amorphBignumber.unsigned).div(e18Bignumber)} ${create.main.quoteAssetLabel}`
      )
    ])
    const valuationRow = new Row([
      new Cell('Valuing at'),
      new Cell(`${create.valuation.to(amorphBignumber.unsigned).div(e18Bignumber)} ${create.main.quoteAssetLabel}`)
    ])

    this.backButton = new Button('light', 'Back')
    this.signButton = new Button('primary', 'Sign and Submit Order')

    this.backButton.$.onclick = create.backToStart.bind(create)
    this.signButton.$.onclick = this.onSignButtonClick.bind(this)
    this.signButton.setIsDisabled(true)

    this.sufficientAllowanceRow = new SufficientAllowanceRow(
      order.pojo.makerAssetAddress,
      makerAssetLabel,
      order.pojo.makerAssetAmount
    )
    this.sufficientBalanceRow = new SufficientBalanceRow(
      order.pojo.makerAssetAddress,
      makerAssetLabel,
      order.pojo.makerAssetAmount
    )

    this.sufficientAllowanceRow.emitter.on('change', this.setSignButtonIsDisabled.bind(this))
    this.sufficientBalanceRow.emitter.on('change', this.setSignButtonIsDisabled.bind(this))

    const table = new Table([
      baseRow,
      quoteRow,
      valuationRow,
      this.sufficientBalanceRow,
      this.sufficientAllowanceRow
    ])

    const buttonGroup = new ButtonGroup

    buttonGroup.appendChild(this.backButton)
    buttonGroup.appendChild(this.signButton)

    this.status = new Alert('info')
    this.status.setIsHidden(true)


    this.appendChild(title)
    this.appendChild(table)
    this.appendChild(this.status)
    this.appendChild(buttonGroup)
  }

  setSignButtonIsDisabled() {
    let isDisabled = false
    if (this.sufficientAllowanceRow.isValid !== true) {
      isDisabled = true
    }
    if (this.sufficientBalanceRow.isValid !== true) {
      isDisabled = true
    }

    this.signButton.setIsDisabled(isDisabled)
  }

  async onSignButtonClick() {
    try {
      const subprovider = await fetchSubprovider()
      this.signButton.setIsHidden(true)
      this.setStatus('info', 'Awaiting signature. Please follow the instructions on your Ethereum wallet.')
      await this.order.setSignature(subprovider, this.order.pojo.makerAddress)
      this.setStatus('info', 'Order has been signed, now you need to submit. Please follow the instructions on your Ethereum wallet. If you have Metamask, you may need to click the Metamask icon.')
      const transactionHashHexPrefixed = await this.web3ZocrAdd(this.order)
      this.setStatus('info', 'Order has been broadcast. Waiting for confirmation...')
      const transactionHash = Amorph.from(amorphHex.prefixed, transactionHashHexPrefixed)
      const ultralightbeam = await fetchUltralightbeam()
      await ultralightbeam.waitForConfirmation(transactionHash)
      this.setStatus('success', 'Order has been broadcast!')
    } catch(error) {
      console.log(error)
      this.setStatus('danger', error)
      this.signButton.setIsHidden(false)
    }
  }

  async web3ZocrAdd(order) {
    const web3Zocr = await fetchWeb3Zocr()
    return new Promise((resolve, reject) => {
      web3Zocr.add(
        this.create.main.pair.id.to(amorphHex.prefixed),
        order.getSplitEncodings().map((splitEncoding) => {
          return splitEncoding.to(amorphHex.prefixed)
        }),
        (error, transactionHashHexPrefixed) => {
          if (error) {
            reject(error)
          } else {
            resolve(transactionHashHexPrefixed)
          }
        }
      )
    })
  }

  setStatus(type, text) {
    this.status.setType(type)
    this.status.setText(text)
    this.status.setIsHidden(false)
  }

}
