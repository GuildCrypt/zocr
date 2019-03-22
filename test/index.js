const ultralightbeam = require('./ultralightbeam')
const zocrInfo = require('../')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('amorph-bignumber')
const amorphHex = require('amorph-hex')
const params = require('./params')
const getSplitEncodings = require('../lib/getSplitEncodings')
const getPairId = require('../lib/getPairId')
const accounts = require('./accounts')

ultralightbeam.options.approve = (transanctionRequest) => {
  const gasBignumber = transanctionRequest.values.gas.to(amorphBignumber.unsigned)
  console.log('GAS:',gasBignumber.toString())
  return ultralightbeam.resolve(transanctionRequest)
}

describe('zocr', () => {

  let zocr
  let orderSplitEncodings0

  describe('deploy', () => {
    it('should deploy', () => {
      return ultralightbeam.solDeploy(zocrInfo.code, zocrInfo.abi, [], {
        from: accounts[0]
      }).then((_zocr) => {
        zocr = _zocr
      })
    })
    it('should have correct code', () => {
      return ultralightbeam.eth.getCode(zocr.address).should.eventually.amorphEqual(zocrInfo.runcode)
    })
  })

  describe('add', () => {
    params.orders.forEach((order, index) => {
      describe(`order #${index}: maker/taker ${order.makerAssetAddress.symbol}/${order.takerAssetAddress.symbol}`, () => {
        describe('ETH/DAI 0', () => {
          let pairId
          let orderSplitEncodings
          let ordersCount
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
            const _orderSplitEncodings = await zocr.fetch('orderSplitEncodings(bytes4,uint32)', [pairId, ordersCount])
            _orderSplitEncodings.should.have.length(5)
            _orderSplitEncodings.forEach((orderSplitEncoding, index) => {
              orderSplitEncoding.should.amorphEqual(orderSplitEncodings[index])
            })
          })
        })
      })
    })
  })

})

// describe('zocr1', () => {
//
//   let zocr
//   let orderSplitEncodings0
//
//   describe('deploy', () => {
//
//     it('should create splitEncodings', () => {
//       orderSplitEncodings0 = getSplitEncodings(params.order0)
//     })
//
//     it('should deploy', () => {
//       return ultralightbeam.solDeploy(zocrInfo.code, zocrInfo.abi, [], {
//         from: accounts[1]
//       }).then((_zocr) => {
//         zocr = _zocr
//       })
//     })
//     it('should have correct code', () => {
//       return ultralightbeam.eth.getCode(zocr.address).should.eventually.amorphEqual(zocrInfo.runcode)
//     })
//     it('should have orderIndex of 1', () => {
//       return zocr.fetch('orderIndex()', []).should.eventually.amorphEqual(params.one)
//     })
//     it('should have correct order0', () => {
//       return zocr.fetch('orderSplitEncodings(uint256)', [params.zero]).then((orderSplitEncodings) => {
//         orderSplitEncodings.forEach((orderSplitEncoding, index) => {
//           orderSplitEncoding.should.amorphEqual(orderSplitEncodings0[index])
//         })
//       })
//     })
//     it('should add', () => {
//       return zocr.broadcast('add(bytes32[6])', [orderSplitEncodings0], {
//         from: accounts[1]
//       }).getConfirmation()
//     })
//     it('should have orderIndex of 2', () => {
//       return zocr.fetch('orderIndex()', []).should.eventually.amorphEqual(params.two)
//     })
//     it('should have correct order1', () => {
//       return zocr.fetch('orderSplitEncodings(uint256)', [params.one]).then((orderSplitEncodings) => {
//         orderSplitEncodings.forEach((orderSplitEncoding, index) => {
//           orderSplitEncoding.should.amorphEqual(orderSplitEncodings0[index])
//         })
//       })
//     })
//   })

// })
