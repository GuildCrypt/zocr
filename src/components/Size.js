const NumericInputGroup = require('./NumericInputGroup')

module.exports = class Size extends NumericInputGroup {
  constructor() {
    super('Size:', '%', 0, 100, 2)
  }
}
