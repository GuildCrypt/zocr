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
const metamaskSubprovider = require('../metamaskSubprovider')
const Alert = require('./Alert')
const web3Zocr = require('../web3Zocr')
const Table = require('./Table')
const ButtonGroup = require('./ButtonGroup')
const ultralightbeam = require('../ultralightbeam')

module.exports = class CreateSummary extends Element {
  constructor(create) {
    super('div')

    this.create = create

    const makerAssetLabel = create.order.getMakerAssetLabel()

    const title = new Header(4, 'Order Summary')

    const accountRow = new Row([
      new Cell('Account'),
      new Cell(create.order.pojo.makerAddress.to(amorphHex.prefixed))
    ])
    const baseRow = new Row([
      new Cell(create.order.getPrettyType()),
      new Cell(
        `${create.baseAssetAmount.to(amorphBignumber.unsigned).div(10000).times(100)}% of ${create.main.baseAssetLabel} (${create.baseAssetAmount.to(amorphNumber.unsigned)}/10000)`
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
      create.order.pojo.makerAssetAddress,
      makerAssetLabel,
      create.order.pojo.makerAssetAmount
    )
    this.sufficientBalanceRow = new SufficientBalanceRow(
      create.order.pojo.makerAssetAddress,
      makerAssetLabel,
      create.order.pojo.makerAssetAmount
    )

    this.sufficientAllowanceRow.emitter.on('change', this.setSignButtonIsDisabled.bind(this))
    this.sufficientBalanceRow.emitter.on('change', this.setSignButtonIsDisabled.bind(this))

    const table = new Table([
      accountRow,
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
      this.signButton.setIsHidden(true)
      this.setStatus('info', 'Awaiting signature. Please follow the instructions on your Ethereum wallet.')
      await this.create.order.setSignature(metamaskSubprovider, this.create.order.pojo.makerAddress)
      this.setStatus('info', 'Order has been signed, now you need to submit. Please follow the instructions on your Ethereum wallet.')
      const transactionHashHexPrefixed = await this.web3ZocrAdd(this.create.order)
      this.setStatus('info', 'Order has been broadcast. Waiting for confirmation...')
      const transactionHash = Amorph.from(amorphHex.prefixed, transactionHashHexPrefixed)
      await ultralightbeam.waitForConfirmation(transactionHash)
      this.setStatus('success', 'Order has been broadcast!')
    } catch(error) {
      console.log(error)
      this.setStatus('danger', error)
      this.signButton.setIsHidden(false)
    }
  }

  web3ZocrAdd(order) {
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
