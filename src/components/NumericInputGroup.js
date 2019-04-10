const Element = require('./Element')
const Emitter = require('events')
const Alert = require('./Alert')
const amorphNumber = require('amorph-number')

module.exports = class NumericInputGroup extends Element {
  constructor(label, units, min, max, maxPrecision) {
    super('div')

    this.units = units
    this.min = min
    this.max = max
    this.maxPrecision = maxPrecision
    this.emitter = new Emitter

    const inputGroup = new Element('div')
    inputGroup.addClass('input-group')

    const input = new Element('input')
    input.$.type = 'text'
    input.addClass('form-control')
    this.input = input

    const prepend = new Element('div')
    prepend.addClass('input-group-prepend')

    const prependText = new Element('span')
    prependText.addClass('input-group-text')
    prependText.setText(label)
    prependText.$.style.width = 100
    prepend.appendChild(prependText)

    const append = new Element('div')
    append.addClass('input-group-append')

    const appendText = new Element('span')
    appendText.addClass('input-group-text')
    appendText.setText(units)
    appendText.setStyle('width', 60)
    append.appendChild(appendText)

    input.$.onchange = this.onChange.bind(this)
    input.$.oninput = this.onChange.bind(this)

    inputGroup.appendChild(prepend)
    inputGroup.appendChild(input)
    inputGroup.appendChild(append)

    this.errorAlert = new Alert('danger')
    this.errorAlert.setIsHidden(true)

    this.appendChild(inputGroup)
    this.appendChild(this.errorAlert)
  }

  onChange(event) {
    this.removeErrorAlert()
    const valueString = event.target.value
    const value = parseFloat(valueString)
    if (Number.isNaN(value) || value.toString() !== valueString) {
      this.setErrorAlert('Not a valid number')
      return
    }
    if (this.maxPrecision !== null) {
      const valueStringSplit = valueString.split('.')
      if (valueStringSplit.length > 1) {
        const precision = valueStringSplit[1].length
        if (precision > this.maxPrecision) {
          if (this.maxPrecision === 0) {
            this.setErrorAlert(`Max precision of 1 ${this.units}`)
            return
          } else {
            const precisionZeros = '0'.repeat(this.maxPrecision - 1)
            this.setErrorAlert(`Max precision of .${precisionZeros}1 ${this.units}`)
            return
          }
        }
      }
    }
    if (this.min !== null && value <= 0) {
      this.setErrorAlert(`Must be greater than ${this.min}`)
      return
    }
    if (this.max !== null && value > this.max) {
      this.setErrorAlert(`Must be less than or equal to ${this.max}`)
    }
    this.emitter.emit('change', value)
  }

  setValue(value) {
    this.input.$.value = value
    this.emitter.emit('change', value)
  }

  setErrorAlert(message) {
    this.errorAlert.setText(message)
    this.errorAlert.$.style.display = 'block'
  }

  removeErrorAlert() {
    this.errorAlert.setIsHidden(true)
  }
}
