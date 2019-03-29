const Element = require('./Element')
const Header = require('./Header')
const RadioGroup = require('./RadioGroup')
const RadioButton = require('./RadioButton')
const Size = require('./Size')
const Valuation = require('./Valuation')
const Button = require('./Button')
const Summary = require('./Summary')
const Bignumber = require('bignumber.js')
const Amorph = require('amorph')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const Ultralightbeam = require('ultralightbeam')
const amorphBigumber = require('amorph-bignumber')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')
const e18 = require('../e18')
const zeroExExchangeAbi = require('../zeroExExchangeAbi')

module.exports = class Create extends Element {
  constructor(pair) {
    super('div')

    this.baseLabel = 'Puppy Oath Pieces'
    this.quoteLabel = 'DAI'
    this.baseAssetAddress = Amorph.from(amorphHex.unprefixed, '83ebd2b0e093920242cd452d5f781a86ffc8b5a8')
    this.quoteAssetAddress = Amorph.from(amorphHex.unprefixed, '6e87624b3bc434cd708c2ca517541ddc89c7d5b3')
    this.buyOrSell = null
    this.sizeNumber = null
    this.valuationNumber = null
    this.pair = pair

    this.ultralightbeam = new Ultralightbeam(web3.currentProvider)
    this.zeroExExchangeAddress = Amorph.from(amorphHex.unprefixed, 'bce0b5f6eb618c565c3e5f5cd69652bbc279f44e')

    this.$.classList.add('card')

    this.body = new Element('div')
    this.body.$.classList.add('card-body')

    const title = new Header(3, 'Create a new Order')
    title.$.classList.add('card-title')

    this.start = new Element('div')

    const buyOrSell = new RadioGroup([
      new RadioButton('Buy', 'buy'),
      new RadioButton('Sell', 'sell')
    ])

    this.size = new Size()
    this.valuation = new Valuation('DAI')

    this.size.$.style.display = 'none'
    this.valuation.$.style.display = 'none'

    const buttonGroup = new Element('div')
    buttonGroup.$.style.textAlign = 'right'

    this.nextButton = new Button('light', 'View Summary')
    this.nextButton.setIsDisabled(true)
    this.nextButton.$.onclick = this.onNextButtonClick.bind(this)
    buttonGroup.appendChild(this.nextButton)


    buyOrSell.emitter.on('change', this.onBuyOrSellChange.bind(this))
    this.size.emitter.on('change', this.onSizeChange.bind(this))
    this.valuation.emitter.on('change', this.onValuationChange.bind(this))

    this.start.appendChild(buyOrSell)
    this.start.appendChild(this.size)
    this.start.appendChild(this.valuation)
    this.start.appendChild(buttonGroup)

    this.body.appendChild(title)
    this.body.appendChild(this.start)

    this.appendChild(this.body)
  }

  onBuyOrSellChange(buyOrSell) {
    this.buyOrSell = buyOrSell
    this.size.$.style.display = null
    this.valuation.$.style.display = null
    this.setAmounts()
    this.updateNextButton()
  }

  onSizeChange(sizeNumber) {
    this.sizeNumber = sizeNumber
    this.setAmounts()
    this.updateNextButton()
  }

  onValuationChange(valuationNumber) {
    this.valuationNumber = valuationNumber
    this.setAmounts()
    this.updateNextButton()
  }

  getIsReadyForSummary() {
    if (this.buyOrSell === null) {
      this.nextButton.setIsDisabled(true)
      return false
    }
    if (this.sizeNumber === null) {
      this.nextButton.setIsDisabled(true)
      return false
    }
    if (this.valuationNumber === null) {
      this.nextButton.setIsDisabled(true)
      return false
    }
    return true
  }

  setAmounts() {
    if (!this.getIsReadyForSummary()) {
      return
    }
    this.baseAssetAmount = Amorph.from(amorphNumber.unsigned, 100 * this.sizeNumber)
    this.quoteAssetAmount = e18.as(amorphBigumber.unsigned, (e18Bignumber) => {
      return e18Bignumber.div(100).mul(this.sizeNumber).mul(this.valuationNumber)
    })
    this.makerAssetAddress = this.buyOrSell === 'buy' ? this.quoteAssetAddress : this.baseAssetAddress
    this.takerAssetAddress = this.buyOrSell === 'buy' ? this.baseAssetAddress : this.quoteAssetAddress
    this.makerAssetAmount = this.buyOrSell === 'buy' ? this.quoteAssetAmount : this.baseAssetAmount
    this.takerAssetAmount = this.buyOrSell === 'buy' ? this.baseAssetAmount : this.quoteAssetAmount
  }

  updateNextButton() {
    this.nextButton.setIsDisabled(!this.getIsReadyForSummary())
  }

  onNextButtonClick() {
    this.start.$.style.display = 'none'
    this.summary = new Summary(this)
    this.body.appendChild(this.summary)
  }
}
