const NumericInputGroup = require('./NumericInputGroup')
const amorphBignumber = require('../../lib/amorphBignumber')
const Amorph = require('amorph')
const Bignumber = require('bignumber.js')

module.exports = class BaseAssetAmountPercentInputGroup extends NumericInputGroup {
  constructor() {
    super('Size:', '%', 0, null, 2)
    this.$.style.marginBottom = 10
    this.emitter.on('change', (baseAssetAmountPercentNumber) => {
      const baseAssetAmount = Amorph.from(
        amorphBignumber.unsigned,
        (new Bignumber(baseAssetAmountPercentNumber)).times(10000).div(100)
      )
      this.emitter.emit('change.baseAssetAmount', baseAssetAmount)
    })
  }
  setBaseAssetAmount(baseAssetAmount) {
    this.setValue(
      baseAssetAmount.to(amorphBignumber.unsigned).div(10000).times(100)
    )
  }
  setMaxBaseAssetAmount(baseAssetAmount) {
    this.max = baseAssetAmount.to(amorphBignumber.unsigned).div(10000).times(100)
  }
}
