const encodingOffsets = require('./encodingOffsets')
const Amorph = require('amorph')

module.exports = function getEncoding(pojo) {
  const encodingUint8Array = (new Uint8Array(192)).fill(0)
  Object.keys(encodingOffsets).forEach((key) => {
    if (pojo[key].uint8Array > (encodingOffsets[1] - encodingOffsets[0])) {
      throw new Error('Too Big')
    }
    encodingUint8Array.set(pojo[key].uint8Array, encodingOffsets[key][1] - pojo[key].uint8Array.length)
  })
  return new Amorph(encodingUint8Array)
}
