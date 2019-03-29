const Table = require('./Table')
const OrderRow = require('./OrderRow')
const Th = require('./Th')

module.exports = class OrdersTable extends Table {
  constructor() {
    super([
      new Th('Type'),
      new Th('Size'),
      new Th('Valuation')
    ])
  }
  addOrder(buyOrSell, order) {
    const orderRow = new OrderRow(buyOrSell, order)
    console.log(orderRow)
    this.addRow(orderRow)
  }
}
