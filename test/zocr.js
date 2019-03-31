const ultralightbeam = require('./ultralightbeam')
const zocrInfo = require('../')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('amorph-bignumber')
const amorphHex = require('amorph-hex')
const params = require('../lib/params')
const getSplitEncodings = require('../lib/getSplitEncodings')
const getPairId = require('../lib/getPairId')
const accounts = require('./accounts')
const orderParams = require('./orderParams')
const ordersStub = require('./ordersStub')
const PromiseStub = require('bluebird-stub')
const getPojoFromSplitEncodings = require('../lib/getPojoFromSplitEncodings')
const Order = require('../lib/Order')

module.exports = new PromiseStub

ultralightbeam.options.approve = (transanctionRequest) => {
  const gasBignumber = transanctionRequest.values.gas.to(amorphBignumber.unsigned)
  console.log('GAS:',gasBignumber.toString())
  return ultralightbeam.resolve(transanctionRequest)
}

describe('zocr', () => {

  let zocr
  let orderSplitEncodings0

  after(() => {
    module.exports.resolve(zocr)
  })

  describe('deploy', () => {
    it('should deploy', async () => {
      zocr = await ultralightbeam.solDeploy(zocrInfo.code, zocrInfo.abi, [], {
        from: accounts[0]
      })
    })
    it('should have correct code', () => {
      return ultralightbeam.eth.getCode(zocr.address).should.eventually.amorphEqual(zocrInfo.runcode)
    })
  })

  orderParams.forEach((orderParam, index) => {
    describe(`order #${index}: ${orderParam[0]}/${orderParam[1]}`, () => {
      let pairId
      let order
      let orderSplitEncodings
      let ordersCount
      let _orderSplitEncodings
      let _order
      before(async () => {
        const orders = await ordersStub.promise
        order = orders[index]
      })
      it('should create pairId', () => {
        pairId = getPairId(order.makerAssetAddress, order.takerAssetAddress)
      })
      it('pairId should be the same for reverse', () => {
        pairId.should.amorphEqual(getPairId(order.takerAssetAddress, order.makerAssetAddress))
      })
      it('should create splitEncodings', () => {
        orderSplitEncodings = getSplitEncodings(order)
      })
      it('should get ordersCount', async () => {
        ordersCount = await zocr.fetch('ordersCount(bytes4)', [pairId])
      })
      it('should add', () => {
        return zocr.broadcast('add(bytes4,bytes32[5])', [pairId, orderSplitEncodings], {
          from: accounts[0]
        }).getConfirmation()
      })
      it('should have increased ordersCount by 1', async () => {
        const _ordersCount = await zocr.fetch('ordersCount(bytes4)', [pairId])
        const diff = _ordersCount.to(amorphNumber.unsigned) - ordersCount.to(amorphNumber.unsigned)
        diff.should.equal(1)
      })
      it('should fetch orderSplitEncodings', async () => {
        _orderSplitEncodings = await zocr.fetch('orderSplitEncodings(bytes4,uint32)', [pairId, ordersCount])
        _orderSplitEncodings.should.have.length(5)
        _orderSplitEncodings.forEach((orderSplitEncoding, index) => {
          orderSplitEncoding.should.amorphEqual(orderSplitEncodings[index])
        })
      })
      it('should decode _orderSplitEncodings to _order', () => {
        _order = new Order(getPojoFromSplitEncodings(order.makerAssetAddress, order.takerAssetAddress, _orderSplitEncodings))
      })
      it('hashes should match', async () => {
        orderHash = await order.fetchHash()
        _orderHash = await _order.fetchHash()
        orderHash.should.amorphEqual(_orderHash)
      })
    })
  })

})
