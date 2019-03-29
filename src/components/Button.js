const Element = require('./Element')

module.exports = class Alert extends Element {
  constructor(type, text) {
    super('button')
    this.$.type = 'button'
    this.$.classList.add('btn')
    this.$.innerText = text || ''
    this.setType(type)
  }
  setType(type) {
    if (this.type) {
      this.$.classList.remove(`btn-${this.type}`)
    }
    this.type = type
    this.$.classList.add(`btn-${type}`)
  }
  setIsDisabled(isDisabled) {
    if (isDisabled) {
      this.$.disabled = true
      this.$.style.cursor = 'not-allowed'
    } else {
      this.$.disabled = false
      this.$.style.cursor = null
    }
  }
}
