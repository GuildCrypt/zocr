const Element = require('./Element')
const Alert = require('./Alert')
const Create = require('./Create')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')
const OrdersPage = require('./OrdersPage')
const Tabs = require('./Tabs')
const Tab = require('./Tab')
const fetchUserAddress = require('../fetchUserAddress')
const Order = require('../Order')
const fetchUltralightbeam =  require('../fetchUltralightbeam')
const amorphBignumber = require('../../lib/amorphBignumber')
const e18Bignumber = require('../e18Bignumber')
const fetchZocrProviderClient = require('../fetchZocrProviderClient')

module.exports = class Zocrscope extends Element {
  constructor(baseAssetLabel, quoteAssetLabel, baseAssetAddress, quoteAssetAddress) {
    super('div')

    this.baseAssetLabel = baseAssetLabel
    this.quoteAssetLabel = quoteAssetLabel
    this.baseAssetAddress = baseAssetAddress
    this.quoteAssetAddress = quoteAssetAddress
    this.status = new Alert('info', 'Loading...')

    this.appendChild(this.status)

    setTimeout(this.bootstrap.bind(this), 1000)
  }

  async bootstrap() {

    if (!window.web3) {
      this.setStatus('danger', 'No Ethereum wallet detected. Please install Metamask.')
      setTimeout(this.bootstrap.bind(this), 100)
      return
    }

    const userAddress = await fetchUserAddress()

    if (userAddress === null) {
      this.setStatus('danger', 'Ethereum wallet detected, but no default address is set. Make sure you have logged in.')
      setTimeout(this.bootstrap.bind(this), 100)
      return
    }

    const zocrProviderClient = await fetchZocrProviderClient()

    this.pair = zocrProviderClient.getPair(this.baseAssetAddress, this.quoteAssetAddress)
    this.pair.setBaseAssetAddress(this.baseAssetAddress)
    this.pair.setQuoteAssetAddress(this.quoteAssetAddress)

    this.balances = new Element('div')
    this.create = new Create(this)
    this.buyOrdersPage = new OrdersPage(this, false)
    this.sellOrdersPage = new OrdersPage(this, false)
    this.userOrdersPage = new OrdersPage(this, true)

    this.balancesLabel = new Element('span')
    this.baseAssetBalance = new Element('span')
    this.quoteAssetBalance = new Element('span')
    this.balances.appendChild(this.balancesLabel)
    this.balances.appendChild(this.baseAssetBalance)
    this.balances.appendChild(this.quoteAssetBalance)

    this.balancesLabel.setStyle('fontWeight', 'bold')
    this.baseAssetBalance.setStyle('margin', '0 10')
    this.balances.setStyle('marginBottom', 10)

    // const sellDisabledAlert = new Alert('danger', 'Sell orders not currently displayed')

    const buyTab = new Tab('Buy Orders', this.buyOrdersPage, (rowA, rowB) => {
      return rowB.order.getPriceBignumber().minus(rowA.order.getPriceBignumber()).toNumber()
    })
    const sellTab = new Tab('Sell Orders', this.sellOrdersPage, (rowA, rowB) => {
      return rowA.order.getPriceBignumber().minus(rowB.order.getPriceBignumber()).toNumber()
    })
    const myTab = new Tab('My Orders', this.userOrdersPage, () => {
      return 1
    })
    const createTab = new Tab('Create Order', this.create)

    const tabs = new Tabs([
      buyTab,
      sellTab,
      myTab,
      createTab
    ])

    buyTab.setIsSelected(true)


    this.appendChild(this.balances)
    this.appendChild(tabs)
    this.appendChild(this.buyOrdersPage)
    this.appendChild(this.sellOrdersPage)
    this.appendChild(this.userOrdersPage)
    this.appendChild(this.create)
    this.syncOrders()
    this.setBalances()

    const ultralightbeam = await fetchUltralightbeam()
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
    this.balancesLabel.setText('Balances: ')
    this.baseAssetBalance.setText(`${baseAssetBalance.to(amorphBignumber.unsigned).div(10000).times(100)}% of all ${this.baseAssetLabel} (${baseAssetBalance.to(amorphBignumber.unsigned)}/10000)`)
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
        const isValidSignature = await order.fetchIsValidSignature()
        if (type === 'buy') {
          if (isValidSignature) {
            this.buyOrdersPage.addOrder(orderIndex, order)
          }
        } else {
          if (isValidSignature) {
            this.sellOrdersPage.addOrder(orderIndex, order)
          }
        }
        if (order.pojo.makerAddress.equals(userAddress)) {
          this.userOrdersPage.addOrder(orderIndex, order)
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
