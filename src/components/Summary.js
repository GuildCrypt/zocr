const Element = require('./Element')
const Header = require('./Header')
const Button = require('./Button')
const Row = require('./Row')
const Cell = require('./Cell')
const ZeroExApprovalCell = require('./ZeroExApprovalCell')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('amorph-bignumber')
const amorphHex = require('amorph-hex')
const e18 = require('../e18')
const Order = require('../../lib/Order')
const Amorph = require('amorph')
const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const userAddress = require('../userAddress')
const metamaskSubprovider = require('../metamaskSubprovider')
const Alert = require('./Alert')
const web3Zocr = require('../web3Zocr')
const web3WaitForConfirmation = require('../web3WaitForConfirmation')
const Table = require('./Table')

const maxExpirationTimeSeconds = new Amorph(
  (new Uint8Array(4)).fill(255)
)

module.exports = class Summary extends Element {
  constructor(create) {
    super('div')

    this.create = create

    const title = new Header(4, 'Order Summary')

    const buyOrSellTitle = create.buyOrSell === 'buy' ? 'Buy' : 'Sell'

    const accountRow = new Row([
      new Cell('Account'),
      new Cell(userAddress.to(amorphHex.prefixed))
    ])
    const baseRow = new Row([
      new Cell(buyOrSellTitle),
      new Cell(
        `${create.sizeNumber}% of ${create.baseLabel} (${create.baseAssetAmount.to(amorphNumber.unsigned)}/10,000)`
      )
    ])
    const quoteRow = new Row([
      new Cell('For'),
      new Cell(
        `${create.quoteAssetAmount.to(amorphBignumber.unsigned).div(e18.to(amorphBignumber.unsigned)).toNumber()} ${create.quoteLabel}`
      )
    ])
    const valuationRow = new Row([
      new Cell('Valuing at'),
      new Cell(`${create.valuationNumber} ${create.quoteLabel}`)
    ])


    const zeroExRow = new Row([
      new Cell('0x Approval'),
      new ZeroExApprovalCell(create.zeroExExchangeAddress, create.makerAssetAddress)
    ])

    const table = new Table([
      accountRow,
      baseRow,
      quoteRow,
      valuationRow,
      zeroExRow
    ])

    const buttonGroup = new Element('div')
    buttonGroup.$.style.textAlign = 'right'

    this.signButton = new Button('light', 'Sign and Submit Order')
    // this.signButton.setIsDisabled(true)
    this.signButton.$.onclick = this.onSignButtonClick.bind(this)
    buttonGroup.appendChild(this.signButton)

    this.status = new Alert('info')
    this.status.$.style.display = 'none'


    this.appendChild(title)
    this.appendChild(table)
    this.appendChild(this.status)
    this.appendChild(buttonGroup)
  }

  async onSignButtonClick() {
    try {
      this.signButton.$.style.display = 'none'
      this.setStatus('info', 'Awaiting signature. Please follow the instructions on your Ethereum wallet.')
      const order = new Order({
        makerAddress: userAddress,
        makerAssetAddress: this.create.makerAssetAddress,
        takerAssetAddress: this.create.takerAssetAddress,
        makerAssetAmount: this.create.makerAssetAmount,
        takerAssetAmount: this.create.takerAssetAmount,
        expirationTimeSeconds: maxExpirationTimeSeconds,
        salt: getRandomAmorph(4),
      })
      await order.setSignature(metamaskSubprovider, userAddress)
      this.setStatus('info', 'Order has been signed, now you need to submit. Please follow the instructions on your Ethereum wallet.')
      const transactionHashHexPrefixed = await this.web3ZocrAdd(order)
      this.setStatus('info', 'Order has been broadcast. Waiting for confirmation...')
      await web3WaitForConfirmation(transactionHashHexPrefixed)
      this.setStatus('success', 'Order has been broadcast!')
    } catch(error) {
      this.setStatus('danger', error)
      this.signButton.$.style.display = null
    }
  }

  web3ZocrAdd(order) {
    return new Promise((resolve, reject) => {
      web3Zocr.add(
        this.create.pair.pairId.to(amorphHex.prefixed),
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
    this.status.$.innerText = text
    this.status.$.style.display = null
  }

}
