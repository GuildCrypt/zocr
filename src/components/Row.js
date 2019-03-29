const Element = require('./Element')

module.exports = class Row extends Element {
  constructor(cells) {
    super('tr')
    cells.forEach(this.appendChild.bind(this))
  }
}
