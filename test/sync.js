const ZocrProviderClient = require('../lib/ZocrProviderClient')
const ultralightbeam = require('./ultralightbeam')
const Pair = require('../lib/Pair')
const amorphNumber = require('amorph-number')
const localStorageDbStub = require('./localStorageDb')
const orderParams = require('./orderParams')
const generateOrders = require('./generateOrders')
const fetchZocrProviderClient = require('./fetchZocrProviderClient')

describe('sync', () => {
  let zocrProviderClient
  before(async () => {
    zocrProviderClient = await fetchZocrProviderClient()
  })
  describe('pairs', () => {
    orderParams.forEach((orderParam, index) => {
      describe(`pair #${index} ${orderParam[0]}/${orderParam[1]}`, () => {
        let order
        let pair
        before(async () => {
          const orders = await generateOrders()
          order = orders[index]
        })
        it('should get pair', () => {
          pair = zocrProviderClient.getPair(order.pojo.makerAssetAddress, order.pojo.takerAssetAddress)
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
