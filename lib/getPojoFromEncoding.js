const Amorph = require('amorph')
const encodingOffsets = require('./encodingOffsets')

module.exports = function getPojoFromEncoding(encoding) {
  const pojo = {}
  Object.keys(encodingOffsets).forEach((key) => {
    pojo[key] = new Amorph(encoding.uint8Array.slice(encodingOffsets[key][0], encodingOffsets[key][1]))
  })
  return pojo
}
