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
const Alert = require('./Alert')
const Table = require('./Table')
const fetchUserAddress = require('../fetchUserAddress')
const ButtonGroup = require('./ButtonGroup')
const fetchUltralightbeam =  require('../fetchUltralightbeam')

module.exports = class FillSummary extends Element {
  constructor(fillModal) {
    super('div')

    this.fillModal = fillModal

    const takerAssetAmount = fillModal.getTakerAssetAmount()
    const takerAssetLabel = fillModal.order.getTakerAssetLabel()

    this.accountCell = new Cell()

    const accountRow = new Row([
      new Cell('Account'),
      this.accountCell
    ])

    this.setAccount()

    const baseRow = new Row([
      new Cell(fillModal.order.getPrettyAntitype()),
      new Cell(
        `${fillModal.baseAssetAmount.to(amorphBignumber.unsigned).div(10000).times(100)}% of ${fillModal.main.baseAssetLabel} (${fillModal.baseAssetAmount.to(amorphNumber.unsigned)}/10000)`
      )
    ])

    const quoteRow = new Row([
      new Cell('For'),
      new Cell(`${fillModal.getQuoteAssetAmount().to(amorphBignumber.unsigned).div(e18Bignumber)} ${fillModal.main.quoteAssetLabel}`)
    ])
    const valuationRow = new Row([
      new Cell('Valuing at'),
      new Cell(`${fillModal.order.getDaiValuation().to(amorphBignumber.unsigned)} ${fillModal.main.quoteAssetLabel}`)
    ])

    this.sufficientAllowanceRow = new SufficientAllowanceRow(
      fillModal.order.pojo.takerAssetAddress,
      takerAssetLabel,
      takerAssetAmount
    )
    this.sufficientBalanceRow = new SufficientBalanceRow(
      fillModal.order.pojo.takerAssetAddress,
      takerAssetLabel,
      takerAssetAmount
    )


    this.sufficientAllowanceRow.emitter.on('change', this.setFillButtonIsDisabled.bind(this))
    this.sufficientBalanceRow.emitter.on('change', this.setFillButtonIsDisabled.bind(this))

    const table = new Table([
      accountRow,
      baseRow,
      quoteRow,
      valuationRow,
      this.sufficientBalanceRow,
      this.sufficientAllowanceRow
    ])

    this.buttonGroup = new ButtonGroup

    this.backButton = new Button('light', 'Back')
    this.fillButton = new Button('primary', 'Fill')

    this.backButton.$.onclick = fillModal.backToStart.bind(fillModal)
    this.fillButton.$.onclick = this.fill.bind(this)
    this.fillButton.setIsDisabled(true)

    this.buttonGroup.appendChild(this.backButton)
    this.buttonGroup.appendChild(this.fillButton)

    this.status = new Alert('info')
    this.status.setIsHidden(true)

    this.appendChild(table)
    this.appendChild(this.status)
    this.appendChild(this.buttonGroup)
  }

  async setAccount() {
    const userAddress = await fetchUserAddress()
    this.accountCell.setText(userAddress.to(amorphHex.prefixed))
  }

  setFillButtonIsDisabled() {
    let isDisabled = false
    if (this.sufficientAllowanceRow.isValid !== true) {
      isDisabled = true
    }
    if (this.sufficientBalanceRow.isValid !== true) {
      isDisabled = true
    }
    this.fillButton.setIsDisabled(isDisabled)
  }

  setStatus(type, text) {
    this.status.setType(type)
    this.status.setText(text)
    this.status.setIsHidden(false)
  }

  async fill() {
    this.setStatus('info', 'Filling order. Please follow the instructions on your Ethereum wallet.')
    this.buttonGroup.setIsHidden(true)
    try {
      const userAddress = await fetchUserAddress()
      console.log(userAddress.to(amorphHex.prefixed))
      const transactionHash = await this.fillModal.order.fill(this.fillModal.getTakerAssetAmount(), userAddress)
      this.setStatus('info', 'Fill order has been broadcasted. Waiting for confirmation...')
      const ultralightbeam = await fetchUltralightbeam()
      await ultralightbeam.waitForConfirmation(transactionHash)
      this.fillButton.setIsHidden(true)
      this.buttonGroup.setIsHidden(false)
      this.setStatus('success', 'Order filled!')
    } catch(error) {
      this.fillButton.setIsHidden(false)
      this.buttonGroup.setIsHidden(false)
      this.setStatus('danger', error)
    }
  }

}
