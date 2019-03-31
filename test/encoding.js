const getSplitEncodings = require('../lib/getSplitEncodings')
const orderParams = require('./orderParams')
const ordersStub = require('./ordersStub')
const getPojoFromSplitEncodings = require('../lib/getPojoFromSplitEncodings')
const amorphBignumber = require('amorph-bignumber')

require('./setSignatures')

const numericKeys = ['makerAssetAmount', 'takerAssetAmount', 'expirationTimeSeconds', 'salt']

describe('encoding', () => {
  orderParams.forEach((orderParam, index) => {
    describe(`order #${index}: ${orderParam[0]}/${orderParam[1]}`, () => {
      let order
      let splitEncodings
      let pojo
      before(async () => {
        const orders = await ordersStub.promise
        order = orders[index]
      })
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
