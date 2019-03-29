const Element = require('./Element')
const Emitter = require('events')

module.exports = class RadioGroup extends Element {
  constructor(radioButtons) {
    super('div')
    this.emitter = new Emitter
    radioButtons.forEach((radioButton) => {
      this.appendChild(radioButton)
      radioButton.emitter.on('change', (value) => {
        radioButtons.forEach((radioButton) => {
          if (radioButton.value !== value) {
            radioButton.setIsSelected(false)
          }
        })
        this.emitter.emit('change', value)
      })
    })
  }
}
