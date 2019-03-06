const getSplitEncodings = require('../lib/getSplitEncodings')
const params = require('./params')
const getPojoFromSplitEncodings = require('../lib/getPojoFromSplitEncodings')
const amorphBignumber = require('amorph-bignumber')

const numericKeys = ['makerAssetAmount', 'takerAssetAmount', 'expirationTimeSeconds', 'salt']

describe('encoding', () => {
  let splitEncodings
  let pojo
  it('should get split encodings', () => {
    splitEncodings = getSplitEncodings(params.order0)
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
        const order0String = params.order0[key].to(amorphBignumber.unsigned).toString()
        pojoString.should.equal(order0String)
      } else {
        pojo[key].should.amorphEqual(params.order0[key])
      }
    })
  })
})
