const getSplitEncodings = require('../lib/getSplitEncodings')
const params = require('./params')
const getPojoFromSplitEncodings = require('../lib/getPojoFromSplitEncodings')
const amorphBignumber = require('amorph-bignumber')

const numericKeys = ['makerAssetAmount', 'takerAssetAmount', 'expirationTimeSeconds', 'salt']

describe('encoding', () => {
  describe('order0', () => {
    const order = params.order0
    let splitEncodings
    let pojo
    it('should get split encodings', () => {
      splitEncodings = getSplitEncodings(order)
      splitEncodings.length.should.equal(6)
      splitEncodings.forEach((splitEncoding) => {
        splitEncoding.uint8Array.length.should.equal(32)
      })
    })
    it('should pojo', () => {
      pojo = getPojoFromSplitEncodings(splitEncodings)
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
  describe('order1', () => {
    const order = params.order1
    let splitEncodings
    let pojo
    it('should get split encodings', () => {
      splitEncodings = getSplitEncodings(order)
      splitEncodings.length.should.equal(6)
      splitEncodings.forEach((splitEncoding) => {
        splitEncoding.uint8Array.length.should.equal(32)
      })
    })
    it('should pojo', () => {
      pojo = getPojoFromSplitEncodings(splitEncodings)
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
