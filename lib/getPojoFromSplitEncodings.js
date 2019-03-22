const Amorph = require('amorph')
const getPojoFromEncoding = require('./getPojoFromEncoding')

module.exports = function getPojoFromSplitEncodings(baseAssetAddress, quoteAssetAddress, splitEncodings) {
  const encodingUint8Array = (new Uint8Array(160)).fill(0)
  splitEncodings.map((splitEncoding, index) => {
    encodingUint8Array.set(splitEncoding.uint8Array, 32 * index)
  })
  return getPojoFromEncoding(baseAssetAddress, quoteAssetAddress, new Amorph(encodingUint8Array))
}
