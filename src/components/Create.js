const Element = require('./Element')
const Header = require('./Header')
const RadioGroup = require('./RadioGroup')
const RadioButton = require('./RadioButton')
const BaseAssetAmountPercentInputGroup = require('./BaseAssetAmountPercentInputGroup')
const ValuationInputGroup = require('./ValuationInputGroup')
const Button = require('./Button')
const CreateSummary = require('./CreateSummary')
const Bignumber = require('bignumber.js')
const Amorph = require('amorph')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const Ultralightbeam = require('ultralightbeam')
const amorphBignumber = require('../../lib/amorphBignumber')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')
const e18Bignumber = require('../e18Bignumber')
const Order = require('./../Order')
const fetchUserAddress = require('../fetchUserAddress')
const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const params = require('../../lib/params')

module.exports = class Create extends Element {
  constructor(main) {
    super('div')

    this.main  = main

    this.baseAssetAmount = null
    this.valuation = null

    this.addClass('card')

    this.body = new Element('div')
    this.body.addClass('card-body')

    const title = new Header(3, 'Create Order')
    title.addClass('card-title')

    this.start = new Element('div')

    this.type = new RadioGroup([
      new RadioButton('Buy', 'buy', true),
      new RadioButton('Sell', 'sell', false)
    ])

    this.baseAssetAmountPercentInputGroup = new BaseAssetAmountPercentInputGroup(100)
    this.valuationInputGroup = new ValuationInputGroup('DAI')

    // this.baseAssetAmountPercentInputGroup.setIsHidden(true)
    // this.valuationInputGroup.setIsHidden(true)
    this.valuationInputGroup.$.style.marginBottom = 10

    const buttonGroup = new Element('div')
    buttonGroup.$.style.textAlign = 'right'

    this.nextButton = new Button('light', 'View Summary')
    this.nextButton.setIsDisabled(true)
    this.nextButton.$.onclick = this.onNextButtonClick.bind(this)
    buttonGroup.appendChild(this.nextButton)


    this.type.emitter.on('change', this.onTypeChange.bind(this))
    this.baseAssetAmountPercentInputGroup.emitter.on('change.baseAssetAmount', this.onBaseAssetAmountChange.bind(this))
    this.valuationInputGroup.emitter.on('change.valuation', this.onValuationChange.bind(this))

    this.start.appendChild(this.type)
    this.start.appendChild(this.baseAssetAmountPercentInputGroup)
    this.start.appendChild(this.valuationInputGroup)
    this.start.appendChild(buttonGroup)

    this.body.appendChild(title)
    this.body.appendChild(this.start)

    this.appendChild(this.body)
  }

  onTypeChange(type) {
    this.type = type
    this.updateNextButton()
  }


  onBaseAssetAmountChange(baseAssetAmount) {
    this.baseAssetAmount = baseAssetAmount
    this.updateNextButton()
  }

  onValuationChange(valuation) {
    this.valuation = valuation
    this.updateNextButton()
  }

  getIsReadyForSummary() {
    if (this.type === null) {
      return false
    }
    if (this.baseAssetAmount === null) {
      return false
    }
    if (this.valuation === null) {
      return false
    }
    return true
  }

  getQuoteAssetAmount() {
    return this.valuation.as(amorphBignumber.unsigned, (valuationBignumber) => {
      return valuationBignumber.times(this.baseAssetAmount.to(amorphBignumber.unsigned)).div(10000)
    })
  }

  getMakerAssetAddress() {
    return this.type === 'buy' ? this.main.quoteAssetAddress : this.main.baseAssetAddress
  }

  getMakerAssetLabel() {
    return this.type === 'buy' ? this.main.quoteAssetAddress : this.main.baseAssetAddress
  }

  getTakerAssetAddress() {
    return this.type === 'buy' ? this.main.baseAssetAddress : this.main.quoteAssetAddress
  }

  getMakerAssetAmount() {
    return this.type === 'buy' ? this.getQuoteAssetAmount() : this.baseAssetAmount
  }

  getTakerAssetAmount() {
    return this.type === 'buy' ? this.baseAssetAmount : this.getQuoteAssetAmount()
  }

  updateNextButton() {
    this.nextButton.setIsDisabled(!this.getIsReadyForSummary())
  }

  async onNextButtonClick() {
    const makerAddress = await fetchUserAddress()

    const order = new Order(this.main.pair, {
      makerAddress,
      makerAssetAddress: this.getMakerAssetAddress(),
      takerAssetAddress: this.getTakerAssetAddress(),
      makerAssetAmount: this.getMakerAssetAmount(),
      takerAssetAmount: this.getTakerAssetAmount(),
      expirationTimeSeconds: params.maxExpirationTimeSeconds,
      salt: getRandomAmorph(4)
    })
    order.setBaseAssetLabel(this.main.baseAssetLabel)
    order.setQuoteAssetLabel(this.main.quoteAssetLabel)

    this.start.setIsHidden(true)
    this.summary = new CreateSummary(this, order)
    this.body.appendChild(this.summary)
  }

  backToStart() {
    this.summary.setIsHidden(true)
    this.start.setIsHidden(false)
  }
}
