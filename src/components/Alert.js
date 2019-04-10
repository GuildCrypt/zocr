const Element = require('./Element')

module.exports = class Alert extends Element {
  constructor(type, text) {
    super('div')
    this.addClass('alert')
    this.setText(text)
    this.setType(type)
  }
  setType(type) {
    if (this.type) {
      this.$.classList.remove(`alert-${this.type}`)
    }
    this.type = type
    this.addClass(`alert-${type}`)
  }
}
