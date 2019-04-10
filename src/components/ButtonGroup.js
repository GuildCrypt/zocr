const Element = require('./Element')

module.exports = class ButtonGroup extends Element {
  constructor() {
    super('div')
    this.setStyle('marginTop', 10)
    this.setStyle('textAlign', 'right')
  }
}
