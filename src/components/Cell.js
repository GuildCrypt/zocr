const Element = require('./Element')

module.exports = class Cell extends Element {
  constructor(text) {
    super('td')
    this.setText(text)
  }
}
