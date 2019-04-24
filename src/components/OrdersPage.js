const Element = require('./Element')
const OrdersTable = require('./OrdersTable')
const Alert = require('./Alert')
const OrderRow = require('./OrderRow')


module.exports = class OrdersPage extends Element {
  constructor(main, isMyOrders, sort) {
    super('div')
    this.main = main
    this.isMyOrders = isMyOrders
    this.status = new Alert('info', 'Nothing here')
    this.sort = sort
    this.ordersTable = new OrdersTable(main, isMyOrders, sort)
    this.ordersTable.setIsHidden(true)
    this.appendChild(this.status)
    this.appendChild(this.ordersTable)
  }
  addOrder(orderIndex, order) {
    const orderRow = new OrderRow(this.main, orderIndex, order, this.isMyOrders)
    this.ordersTable.addRow(orderRow)
    this.status.setIsHidden(true)
    this.ordersTable.setIsHidden(false)
  }

}
