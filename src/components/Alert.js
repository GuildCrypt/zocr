const Element = require('./Element')

module.exports = class Alert extends Element {
  constructor(type, text) {
    super('div')
    this.$.classList.add('alert')
    this.$.innerText = text || ''
    this.setType(type)
  }
  setType(type) {
    if (this.type) {
      this.$.classList.remove(`alert-${this.type}`)
    }
    this.type = type
    this.$.classList.add(`alert-${type}`)
  }
}
