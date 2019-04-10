const NumericInputGroup = require('./NumericInputGroup')
const e18Bignumber = require('../e18Bignumber')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('../../lib/amorphBignumber')

module.exports = class Valuation extends NumericInputGroup {
  constructor() {
    super('Valuation:', 'DAI', 0, null, 0)
    this.emitter.on('change', (daiValuationNumber) => {
      const valuation = Amorph.from(amorphBignumber.unsigned, e18Bignumber.times(daiValuationNumber))
      this.emitter.emit('change.valuation', valuation)
    })
  }
  setValuation(valuation) {
    this.setValue(valuation.to(amorphBignumber.unsigned).div(e18Bignumber).integerValue())
  }
}
