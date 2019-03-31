const Element = require('./Element')
const Alert = require('./Alert')
const Create = require('./Create')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')
const OrdersTable = require('./OrdersTable')
const Tabs = require('./Tabs')
const Tab = require('./Tab')
const userAddress = require('../userAddress')

module.exports = class Main extends Element {
  constructor(pair) {
    super('div')
    this.pair = pair
    this.status = new Alert('info', 'Loading...')
    this.create = new Create(pair)
    this.buyOrdersTable = new OrdersTable()
    this.userOrdersTable = new OrdersTable()

    const sellDisabledAlert = new Alert('danger', 'Sell orders not currently displayed')

    const buyTab = new Tab('Buy Orders', this.buyOrdersTable)
    const sellTab = new Tab('Sell Orders', sellDisabledAlert)
    const myTab = new Tab('My Orders', this.userOrdersTable)
    const createTab = new Tab('Create Order', this.create)

    const tabs = new Tabs([
      buyTab,
      sellTab,
      myTab,
      createTab
    ])

    buyTab.setIsSelected(true)

    this.appendChild(this.status)
    this.appendChild(tabs)
    this.appendChild(this.buyOrdersTable)
    this.appendChild(sellDisabledAlert)
    this.appendChild(this.userOrdersTable)
    this.appendChild(this.create)
    this.sync()
  }
  async sync() {
    this.setStatus('info', 'Checking for new orders...')
    const ordersCount = await this.pair.fetchOrdersCount()
    const ordersCountNumber = ordersCount.to(amorphNumber.unsigned)
    const syncedToNumber = this.pair.syncedTo.to(amorphNumber.unsigned)

    const unsyncedCountNumber = ordersCountNumber - syncedToNumber

    if (unsyncedCountNumber > 0) {
      this.setStatus('info', `Fetching order 1/${unsyncedCountNumber}...`)

      await this.pair.sync((orderIndex, order) => {
        const buyOrSell = order.makerAssetAddress.equals(this.create.quoteAssetAddress) ? 'buy' : 'sell'
        if (buyOrSell === 'buy') {
          this.buyOrdersTable.addOrder(buyOrSell, order)
        }
        if (order.makerAddress.equals(userAddress)) {
          this.userOrdersTable.addOrder(buyOrSell, order)
        }
        const orderIndexNumber = orderIndex.to(amorphNumber.unsigned)
        if (orderIndexNumber > 0) {
          this.setStatus('info', `Fetching order ${unsyncedCountNumber - orderIndexNumber}/${unsyncedCountNumber}...`)
        }
      })
    }

    this.setStatus('success', 'Up to date')
    setTimeout(this.sync.bind(this), 10000)
  }
  setStatus(type, text) {
    this.status.setType(type)
    this.status.$.innerText = text
  }
}
