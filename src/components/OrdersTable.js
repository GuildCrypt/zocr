const Table = require('./Table')
const OrderRow = require('./OrderRow')

module.exports = class OrdersTable extends Table {
  addOrder(buyOrSell, order) {
    const orderRow = new OrderRow(buyOrSell, order)
    console.log(orderRow)
    this.addRow(orderRow)
  }
}
