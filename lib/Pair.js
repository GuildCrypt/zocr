const Emitter = require('events')
const getPairId = require('./getPairId')
const getPojoFromSplitEncodings = require('./getPojoFromSplitEncodings')
const Order = require('../lib/Order')
const amorphNumber = require('amorph-number')
const Amorph = require('amorph')
const getOrderKey = require('./getOrderKey')
const getPojoFromEncoding = require('./getPojoFromEncoding')
const amorphHex = require('amorph-hex')
const erc20Abi = require('./erc20Abi')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')

module.exports = class Pair {
  constructor(zocrProviderClient, leftAssetAddress, rightAssetAddress) {
    this.zocrProviderClient = zocrProviderClient
    this.leftAssetAddress = leftAssetAddress
    this.rightAssetAddress = rightAssetAddress

    this.emitter = new Emitter
    this.syncedTo = new Amorph(new Uint8Array([0]))
  }

  getOrderKey(orderIndex) {
    return getOrderKey(this.getId(), orderIndex)
  }

  getLeftAsset() {
    if (this.leftAsset) {
      return this.leftAsset
    }
    this.leftAsset = new SolWrapper(this.zocrProviderClient.ultralightbeam, erc20Abi, this.leftAssetAddress)
    return this.leftAsset
  }

  getRightAsset() {
    if (this.rightAsset) {
      return this.rightAsset
    }
    this.rightAsset = new SolWrapper(this.zocrProviderClient.ultralightbeam, erc20Abi, this.rightAssetAddress)
    return this.rightAsset
  }

  onOrderSplitEncodings(orderSplitEncodings) {
    const orderPojo = getPojoFromSplitEncodings(orderSplitEncodings)
    zocrProviderClient.addOrderPojo(orderPojo)
  }

  fetchOrdersCount() {
    return this.zocrProviderClient.getZocr().fetch('ordersCount(bytes4)', [this.getId()])
  }

  fetchOrderSplitEncodings(orderIndex) {
    return this.zocrProviderClient.getZocr().fetch('orderSplitEncodings(bytes4,uint32)', [this.getId(), orderIndex])
  }

  getId() {
    if (this.id) {
      return this.id
    }
    this.id = getPairId(this.leftAssetAddress, this.rightAssetAddress)
    return this.id
  }

  async dbLoadOrder(orderIndex) {
    const orderKey = this.getOrderKey(orderIndex)
    const orderEncoding = await this.zocrProviderClient.db.load(orderKey)
    if (!orderEncoding) {
      return null
    }
    const orderPojo = getPojoFromEncoding(this.leftAssetAddress, this.rightAssetAddress, orderEncoding)
    return new Order(this, orderPojo)
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
    const orderPojo = getPojoFromSplitEncodings(this.leftAssetAddress, this.rightAssetAddress, orderSplitEncodings)
    const orderFromChain = new Order(this, orderPojo)
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

  createOrder(orderPojo) {
    return new Order(this, orderPojo)
  }

}
