const Element = require('./Element')

module.exports = class Table extends Element{
  constructor(rows) {
    super('table')
    this.$.classList.add('table')
    if (rows) {
      rows.forEach(this.addRow.bind(this))
    }
  }
  addRow(row) {
    this.appendChild(row)
  }
}
