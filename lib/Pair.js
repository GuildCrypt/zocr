const Emitter = require('events')
const getPairId = require('./getPairId')
const getPojoFromSplitEncodings = require('./getPojoFromSplitEncodings')
const Order = require('../lib/Order')
const amorphNumber = require('amorph-number')
const Amorph = require('amorph')
const getOrderKey = require('./getOrderKey')
const getPojoFromEncoding = require('./getPojoFromEncoding')

module.exports = class Pair {
  constructor(zocrProviderClient, aAssetAddress, bAssetAddress) {
    this.zocrProviderClient = zocrProviderClient
    this.aAssetAddress = aAssetAddress
    this.bAssetAddress = bAssetAddress
    this.pairId = getPairId(aAssetAddress, bAssetAddress)
    this.emitter = new Emitter
    this.syncedTo = new Amorph(new Uint8Array([0]))
  }

  getOrderKey(orderIndex) {
    return getOrderKey(this.pairId, orderIndex)
  }

  onOrderSplitEncodings(orderSplitEncodings) {
    const orderPojo = getPojoFromSplitEncodings(orderSplitEncodings)
    zocrProviderClient.addOrderPojo(orderPojo)
  }

  fetchOrdersCount() {
    return this.zocrProviderClient.zocr.fetch('ordersCount(bytes4)', [this.pairId])
  }

  fetchOrderSplitEncodings(orderIndex) {
    return this.zocrProviderClient.zocr.fetch('orderSplitEncodings(bytes4,uint32)', [this.pairId, orderIndex])
  }

  async dbLoadOrder(orderIndex) {
    const orderKey = this.getOrderKey(orderIndex)
    const orderEncoding = await this.zocrProviderClient.db.load(orderKey)
    if (!orderEncoding) {
      return null
    }
    const orderPojo = getPojoFromEncoding(this.aAssetAddress, this.bAssetAddress, orderEncoding)
    return new Order(orderPojo)
  }

  dbSaveOrder(orderIndex, order) {
    const orderKey = this.getOrderKey(orderIndex)
    return this.zocrProviderClient.db.save(orderKey, order.getEncoding())
  }

  async fetchOrder(orderIndex) {
    const orderFromDb = await this.dbLoadOrder(orderIndex)
    if (orderFromDb !== null) {
      return orderFromDb
    }
    const orderSplitEncodings = await this.fetchOrderSplitEncodings(orderIndex)
    const orderPojo = getPojoFromSplitEncodings(this.aAssetAddress, this.bAssetAddress, orderSplitEncodings)
    const orderFromChain = new Order(orderPojo)
    await this.dbSaveOrder(orderIndex, orderFromChain)
    return orderFromChain
  }

  async sync(onOrder) {
    const ordersCount = await this.fetchOrdersCount()
    const ordersCountNumber = ordersCount.to(amorphNumber.unsigned)

    const syncedToNumber = this.syncedTo.to(amorphNumber.unsigned)
    this.syncedTo = ordersCount

    const orders = []
    for (let orderIndexNumber = ordersCountNumber - 1; orderIndexNumber >= syncedToNumber; orderIndexNumber--) {
      const orderIndex = Amorph.from(amorphNumber.unsigned, orderIndexNumber)
      const order = await this.fetchOrder(orderIndex)
      orders.push(order)
      onOrder(orderIndex, order)
    }
    return orders
  }

}
