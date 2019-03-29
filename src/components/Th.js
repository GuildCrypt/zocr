const Element = require('./Element')

module.exports = class Cell extends Element {
  constructor(text) {
    super('th')
    this.$.innerText = text || ''
  }
}
