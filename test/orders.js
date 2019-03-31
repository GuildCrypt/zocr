const amorphNumber = require('amorph-number')
const getPairId = require('../lib/getPairId')
const orderParams = require('./orderParams')
const getPojoFromSplitEncodings = require('../lib/getPojoFromSplitEncodings')
const getSplitEncodings = require('../lib/getSplitEncodings')
const Order = require('../lib/Order')
const fetchZocrProviderClient = require('./fetchZocrProviderClient')
const accounts = require('./accounts')
const amorphHex = require('amorph-hex')
const Amorph = require('amorph')
const generateOrders = require('./generateOrders')

describe('orders', () => {
  let zocrProviderClient

  before(async () => {
    zocrProviderClient = await fetchZocrProviderClient()
  })

  orderParams.forEach((orderParam, index) => {
    describe(`order #${index}: ${orderParam[0]}/${orderParam[1]}`, () => {
      let pairId
      let order
      let ordersCount
      let _ordersCount
      let pair
      let createdOrder
      let fetchedOrder
      before(async () => {
        const orders = await generateOrders()
        order = orders[index]
      })
      it('should create pairId', () => {
        pairId = getPairId(order.pojo.makerAssetAddress, order.pojo.takerAssetAddress)
      })
      it('pairId should be the same for reverse', () => {
        pairId.should.amorphEqual(getPairId(order.pojo.takerAssetAddress, order.pojo.makerAssetAddress))
      })
      it('get pair', () => {
        pair = zocrProviderClient.getPair(order.pojo.makerAssetAddress, order.pojo.takerAssetAddress)
      })
      it('should get ordersCount', async () => {
        ordersCount = await pair.fetchOrdersCount()
      })
      it('should create createdOrder', () => {
        createdOrder = pair.createOrder(order.pojo)
      })
      it('order and createdOrder hashes should match', async () => {
        orderHash = await order.fetchHash()
        createdOrderHash = await createdOrder.fetchHash()
        orderHash.should.amorphEqual(createdOrderHash)
      })
      it('should broadcast createdOrder', () => {
        return createdOrder.broadcast({
          from: accounts[0]
        }).getConfirmation()
      })
      it('should have increased ordersCount by 1', async () => {
        _ordersCount = await pair.fetchOrdersCount()
        const diff = _ordersCount.to(amorphNumber.unsigned) - ordersCount.to(amorphNumber.unsigned)
        diff.should.equal(1)
      })
      it('should fetch fetchOrder', async () => {
        const _orderIndex = _ordersCount.as(amorphNumber.unsigned, (_ordersCountNumber) => {
          return _ordersCountNumber - 1
        })
        fetchedOrder = await pair.fetchOrder(_orderIndex)
      })
      it('order and fetchedOrder hashes should match', async () => {
        orderHash = await order.fetchHash()
        fetchedOrderHash = await fetchedOrder.fetchHash()
        orderHash.should.amorphEqual(fetchedOrderHash)
      })
      it('order broadcast', async () => {
        orderHash = await order.fetchHash()
        fetchedOrderHash = await fetchedOrder.fetchHash()
        orderHash.should.amorphEqual(fetchedOrderHash)
      })
      it('order makerAllowance should be 0', () => {
        return order.fetchMakerAllowance().should.eventually.amorphTo(amorphNumber.unsigned).equal(0)
      })
      it('maker should approve 1', () => {
        console.log('broadcast address', accounts[0].address.to(amorphHex.unprefixed))
        console.log('broadcast makerAddress', order.getMakerAsset().address.to(amorphHex.unprefixed))
        console.log('broadcast exchangeAddress', order.pair.zocrProviderClient.exchangeAddress.to(amorphHex.unprefixed))
        return order.getMakerAsset().broadcast('approve(address,uint256)', [
          order.pair.zocrProviderClient.exchangeAddress,
          Amorph.from(amorphNumber.unsigned, 1)
        ], {
          from: accounts[0]
        }).getConfirmation()
      })
      it('order makerAllowance should be 0', () => {
        return order.fetchMakerAllowance().should.eventually.amorphTo(amorphNumber.unsigned).equal(1)
      })
    })
  })
})
