const zocrStub = require('./zocr')
const ZocrProviderClient = require('../lib/ZocrProviderClient')
const ultralightbeam = require('./ultralightbeam')
const Pair = require('../lib/Pair')
const amorphNumber = require('amorph-number')
const localStorageDbStub = require('./localStorageDb')
const orderParams = require('./orderParams')
const ordersStub = require('./ordersStub')


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
    orderParams.forEach((orderParam, index) => {
      describe(`pair ${index} ${orderParam[0]}/${orderParam[1]}`, () => {
        let order
        let pair
        before(async () => {
          const orders = await ordersStub.promise
          order = orders[index]
        })
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
