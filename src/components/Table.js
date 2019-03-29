const Element = require('./Element')

module.exports = class Table extends Element{
  constructor(headers, rows) {
    super('table')
    this.$.classList.add('table')
    this.rows = []
    if (headers) {
      headers.forEach(this.appendChild.bind(this))
    }
    if (rows) {
      rows.forEach(this.addRow.bind(this))
    }
  }
  addRow(row) {
    this.rows.push(row)
    this.appendChild(row)
  }
  sort(sorter) {
    this.rows = this.rows.sort(sorter)

    const reverseRows = this.rows.reverse()
    reverseRows.forEach((row, index) => {
      if (index === 0) {
        return
      }
      const previousRow = reverseRows[index - 1]
      this.$.insertBefore(row.$, previousRow.$)
    })
  }
}
