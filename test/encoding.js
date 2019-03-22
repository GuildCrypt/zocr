const getSplitEncodings = require('../lib/getSplitEncodings')
const params = require('./params')
const getPojoFromSplitEncodings = require('../lib/getPojoFromSplitEncodings')
const amorphBignumber = require('amorph-bignumber')

const numericKeys = ['makerAssetAmount', 'takerAssetAmount', 'expirationTimeSeconds', 'salt']

describe('encoding', () => {
  params.orders.forEach((order, index) => {
    describe(`order #${index}: maker/taker ${order.makerAssetAddress.symbol}/${order.takerAssetAddress.symbol}`, () => {
      let splitEncodings
      let pojo
      it('should get split encodings', () => {
        splitEncodings = getSplitEncodings(order)
        splitEncodings.length.should.equal(5)
        splitEncodings.forEach((splitEncoding) => {
          splitEncoding.uint8Array.length.should.equal(32)
        })
      })
      it('should pojo', () => {
        pojo = getPojoFromSplitEncodings(order.makerAssetAddress, order.takerAssetAddress, splitEncodings)
        Object.keys(pojo).forEach((key) => {
          if (numericKeys.includes(key)) {
            const pojoString = pojo[key].to(amorphBignumber.unsigned).toString()
            const orderString = order[key].to(amorphBignumber.unsigned).toString()
            pojoString.should.equal(orderString)
          } else {
            pojo[key].should.amorphEqual(order[key])
          }
        })
      })
    })
  })
})
