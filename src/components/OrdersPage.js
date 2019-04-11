const Element = require('./Element')
const OrdersTable = require('./OrdersTable')
const Alert = require('./Alert')
const OrderRow = require('./OrderRow')


module.exports = class OrdersPage extends Element {
  constructor(main, showFilledOrders) {
    super('div')
    this.status = new Alert('info', 'Nothing here')
    this.ordersTable = new OrdersTable(main, showFilledOrders)
    this.ordersTable.setIsHidden(true)
    this.appendChild(this.status)
    this.appendChild(this.ordersTable)
  }
  addOrder(orderIndex, order) {
    const orderRow = new OrderRow(this.main, orderIndex, order, this.showFilledOrders)
    this.ordersTable.addRow(orderRow)
    this.ordersTable.sort((rowA, rowB) => {
      return rowB.order.getPriceBignumber().minus(rowA.order.getPriceBignumber()).toNumber()
    })
    this.status.setIsHidden(true)
    this.ordersTable.setIsHidden(false)
  }

}
