const Table = require('./Table')
const OrderRow = require('./OrderRow')
const Th = require('./Th')

module.exports = class OrdersTable extends Table {
  constructor(main, showFilledOrders) {

    const idHeader = new Th('#')
    const typeHeader = new Th('Type')
    const originalHeader = new Th('Original Size')

    super([
      idHeader,
      typeHeader,
      originalHeader,
      new Th('Fillable Size'),
      new Th('Valuation'),
      new Th(),
      new Th()
    ])

    this.main = main
    this.showFilledOrders = showFilledOrders

    idHeader.setStyle('color', '#999')
    typeHeader.setStyle('color', '#999')
    originalHeader.setStyle('color', '#999')

  }
  addOrder(orderIndex, order) {
    const orderRow = new OrderRow(this.main, orderIndex, order, this.showFilledOrders)
    this.addRow(orderRow)
    this.sort((rowA, rowB) => {
      return rowB.order.getPriceBignumber().minus(rowA.order.getPriceBignumber()).toNumber()
    })
  }
}
