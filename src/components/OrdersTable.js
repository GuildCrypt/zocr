const Table = require('./Table')
const Th = require('./Th')
const Tooltip = require('./Tooltip')

module.exports = class OrdersTable extends Table {
  constructor(main, isMyOrders) {
    const idHeader = new Th('ID #')
    const typeHeader = new Th('Type')
    const originalHeader = new Th('Original Size')
    const fillableHeader = new Th('Fillable Size')
    const valuationHeader = new Th('Total Valuation')


    super([
      idHeader,
      typeHeader,
      originalHeader,
      fillableHeader,
      valuationHeader,
      new Th(),
      new Th()
    ])

    valuationHeader.appendChild(new Tooltip('The implied valuation for 100%'))

    this.main = main
    this.isMyOrders = isMyOrders
    this.setIsHidden(true)

    if (!isMyOrders) {
      typeHeader.setIsHidden(true)
      originalHeader.setIsHidden(true)
    }

    idHeader.setStyle('color', '#999')
    typeHeader.setStyle('color', '#999')
    originalHeader.setStyle('color', '#999')

  }
}
