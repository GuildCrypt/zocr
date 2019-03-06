const Amorph = require('amorph')
const getPojoFromEncoding = require('./getPojoFromEncoding')

module.exports = function getPojoFromSplitEncodings(splitEncodings) {
  const encodingUint8Array = (new Uint8Array(192)).fill(0)
  splitEncodings.map((splitEncoding, index) => {
    encodingUint8Array.set(splitEncoding.uint8Array, 32 * index)
  })
  return getPojoFromEncoding(new Amorph(encodingUint8Array))
}
