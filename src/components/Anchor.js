const Element = require('./Element')

module.exports = class Alert extends Element {
  constructor(text, href, onClick) {
    super('a')
    this.setText(text)
    this.$.href = href
    this.$.onclick = onClick
  }
}
