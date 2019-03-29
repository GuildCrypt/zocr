const NumericInputGroup = require('./NumericInputGroup')

module.exports = class Size extends NumericInputGroup {
  constructor() {
    super('Valuation:', 'DAI', 0, null, 0)
  }
}
