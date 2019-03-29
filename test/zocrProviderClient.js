const zocrStub = require('./zocr')
const ZocrProviderClient = require('../lib/ZocrProviderClient')
const ultralightbeam = require('./ultralightbeam')
const Pair = require('../lib/Pair')
const assetAddresses = require('./assetAddresses')
const amorphNumber = require('amorph-number')
const localStorageDbStub = require('./localStorageDb')
const orders = require('./orders')


describe('zocrProviderClient', () => {
  let zocr
  let localStorageDb
  let pairPoller
  before(async () => {
    zocr = await zocrStub.promise
    localStorageDb = await localStorageDbStub.promise
  })
  let zocrProviderClient
  it('should create zocrProviderClient', () => {
    zocrProviderClient = new ZocrProviderClient(ultralightbeam.provider, localStorageDb, zocr.address)
  })
  describe('pairs', () => {
    orders.forEach((order, index) => {
      describe(`pair ${index} ${order.makerAssetAddress.symbol}/${order.takerAssetAddress.symbol}`, () => {
        let pair
        it('should get pair', () => {
          pair = zocrProviderClient.getPair(order.makerAssetAddress, order.takerAssetAddress)
        })
        it('should have ordersCount of 2', async () => {
          const ordersCount = await pair.fetchOrdersCount()
          ordersCount.to(amorphNumber.unsigned).should.equal(2)
        })
        it('should sync', () => {
          return pair.sync((orderIndex, order) => {
            console.log(`order #${orderIndex.to(amorphNumber.unsigned)}`)
          })
        })
      })
    })
  })
})
