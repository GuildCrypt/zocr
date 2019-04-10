const Element = require('./Element')

module.exports = class Header extends Element {
  constructor(level, text) {
    super(`h${level}`)
    this.setText(text)
  }
}
