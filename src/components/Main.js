const Element = require('./Element')
const Alert = require('./Alert')
const Create = require('./Create')
const amorphNumber = require('amorph-number')
const OrdersTable = require('./OrdersTable')
const Tabs = require('./Tabs')
const Tab = require('./Tab')

module.exports = class Main extends Element {
  constructor(pair) {
    super('div')
    this.pair = pair
    this.status = new Alert('info', 'Loading...')
    this.create = new Create(pair)
    this.ordersTable = new OrdersTable()
    this.ordersCountNumber = 0

    const buyTab = new Tab('Buy Orders')
    const sellTab = new Tab('Sell Orders')
    const myTab = new Tab('My Orders')
    const createTab = new Tab('Create Order')

    const tabs = new Tabs([
      buyTab,
      sellTab,
      myTab,
      createTab
    ])

    buyTab.setIsSelected(true)

    this.appendChild(this.status)
    this.appendChild(tabs)
    this.appendChild(this.ordersTable)
    this.appendChild(this.create)
    this.sync()
  }
  async sync() {
    this.setStatus('info', 'Checking for new orders...')
    const ordersCount = await this.pair.fetchOrdersCount()
    const ordersCountNumber = ordersCount.to(amorphNumber.unsigned)

    if (ordersCountNumber > this.ordersCountNumber) {
      this.setStatus('info', `Fetching order 1/${ordersCountNumber + 1}...`)
    }

    this.ordersCountNumber = ordersCountNumber

    await this.pair.sync((orderIndex, order) => {
      const buyOrSell = order.makerAssetAddress.equals(this.create.quoteAssetAddress) ? 'buy' : 'sell'
      this.ordersTable.addOrder(buyOrSell, order)
      const orderIndexNumber = orderIndex.to(amorphNumber.unsigned)
      if (orderIndexNumber > 0) {
        this.setStatus('info', `Fetching order ${ordersCountNumber - orderIndexNumber}/${ordersCountNumber - 1}...`)
      }
    })
    this.setStatus('success', 'Up to date')
    //
    // setTimeout(() => {
    //   this.sync()
    // }, 1000)
  }
  setStatus(type, text) {
    this.status.setType(type)
    this.status.$.innerText = text
  }
}
