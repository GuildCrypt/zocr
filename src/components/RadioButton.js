const Element = require('./Element')
const Emitter = require('events')

module.exports = class RadioButton extends Element {
  constructor(label, value) {
    super('label')

    this.value = value
    this.emitter = new Emitter()

    this.button = new Element('input')
    this.button.$.type = 'radio'
    this.button.$.onchange = this.onChange.bind(this)

    const text = new Element('span')
    text.setText(label)
    text.$.style.marginLeft = 10
    text.$.style.marginRight = 15

    this.appendChild(this.button)
    this.appendChild(text)
  }
  onChange(event) {
    this.emitter.emit('change', this.value)
  }
  setIsSelected(isSelected) {
    this.button.$.checked = isSelected
  }
}
