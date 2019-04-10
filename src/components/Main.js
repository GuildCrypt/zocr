const Element = require('./Element')
const Alert = require('./Alert')
const Create = require('./Create')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')
const OrdersTable = require('./OrdersTable')
const Tabs = require('./Tabs')
const Tab = require('./Tab')
const fetchUserAddress = require('../fetchUserAddress')
const Order = require('../Order')
const ultralightbeam = require('../ultralightbeam')
const amorphBignumber = require('../../lib/amorphBignumber')
const e18Bignumber = require('../e18Bignumber')

module.exports = class Main extends Element {
  constructor(pair, baseAssetLabel, quoteAssetLabel, baseAssetAddress, quoteAssetAddress) {
    super('div')

    this.pair = pair
    this.baseAssetLabel = baseAssetLabel
    this.quoteAssetLabel = quoteAssetLabel
    this.baseAssetAddress = baseAssetAddress
    this.quoteAssetAddress = quoteAssetAddress

    this.pair.setBaseAssetAddress(baseAssetAddress)

    this.balances = new Element('div')
    this.status = new Alert('info', 'Loading...')
    this.create = new Create(this)
    this.buyOrdersTable = new OrdersTable(this, false)
    this.userOrdersTable = new OrdersTable(this, true)

    this.baseAssetBalance = new Element('span')
    this.quoteAssetBalance = new Element('span')
    this.balances.appendChild(this.baseAssetBalance)
    this.balances.appendChild(this.quoteAssetBalance)

    this.quoteAssetBalance.setStyle('marginLeft', 30)
    this.balances.setStyle('marginBottom', 10)

    // const sellDisabledAlert = new Alert('danger', 'Sell orders not currently displayed')

    const buyTab = new Tab('Buy Orders', this.buyOrdersTable)
    // const sellTab = new Tab('Sell Orders', sellDisabledAlert)
    const myTab = new Tab('My Orders', this.userOrdersTable)
    const createTab = new Tab('Create Buy Order', this.create)

    const tabs = new Tabs([
      buyTab,
      // sellTab,
      myTab,
      createTab
    ])

    buyTab.setIsSelected(true)

    this.appendChild(this.status)
    this.appendChild(this.balances)
    this.appendChild(tabs)
    this.appendChild(this.buyOrdersTable)
    // this.appendChild(sellDisabledAlert)
    this.appendChild(this.userOrdersTable)
    this.appendChild(this.create)
    this.syncOrders()
    this.setBalances()

    ultralightbeam.blockPoller.emitter.on('block', this.syncOrders.bind(this))
    ultralightbeam.blockPoller.emitter.on('block', this.setBalances.bind(this))
  }

  async setBalances() {
    if (this.isSettingBalances) {
      return
    }
    this.isSettingBalances = true
    const userAddress = await fetchUserAddress()
    const baseAssetBalance = await this.pair.getBaseAsset().fetch('balanceOf(address)', [userAddress])
    const quoteAssetBalance = await this.pair.getQuoteAsset().fetch('balanceOf(address)', [userAddress])
    this.baseAssetBalance.setText(`${baseAssetBalance.to(amorphBignumber.unsigned).div(10000).times(100)}% of ${this.baseAssetLabel}`)
    this.quoteAssetBalance.setText(`${quoteAssetBalance.to(amorphBignumber.unsigned).div(e18Bignumber)} ${this.quoteAssetLabel}`)
    this.isSettingBalances = false
  }

  async syncOrders() {
    if (this.isSyncingOrders) {
      return
    }
    this.isSyncingOrders = true
    this.setStatus('info', 'Checking for new orders...')
    const ordersCount = await this.pair.fetchOrdersCount()
    const ordersCountNumber = ordersCount.to(amorphNumber.unsigned)
    const syncedToNumber = this.pair.syncedTo.to(amorphNumber.unsigned)

    const unsyncedCountNumber = ordersCountNumber - syncedToNumber

    if (unsyncedCountNumber > 0) {
      this.setStatus('info', `Fetching order 1/${unsyncedCountNumber}...`)
      const userAddress = await fetchUserAddress()

      await this.pair.sync(async (orderIndex, order) => {
        Object.setPrototypeOf(order, Order.prototype)
        order.setBaseAssetLabel(this.baseAssetLabel)
        order.setQuoteAssetLabel(this.quoteAssetLabel)

        const type = order.getType()
        if (type === 'buy') {
          const isValidSignature = await order.fetchIsValidSignature()
          if (isValidSignature) {
            this.buyOrdersTable.addOrder(orderIndex, order)
          }
        }
        if (order.pojo.makerAddress.equals(userAddress)) {
          this.userOrdersTable.addOrder(orderIndex, order)
        }
        const orderIndexNumber = orderIndex.to(amorphNumber.unsigned)
        if (orderIndexNumber > 0) {
          this.setStatus('info', `Fetching order ${unsyncedCountNumber - orderIndexNumber}/${unsyncedCountNumber}...`)
        }
      })
    }

    this.setStatus('success', 'Up to date')
    this.isSyncingOrders = false
  }
  setStatus(type, text) {
    this.status.setType(type)
    this.status.setText(text)
  }
}
