const encodingOffsets = require('./encodingOffsets')
const Amorph = require('amorph')
const getVersion = require('./getVersion')

module.exports = function getEncoding(_pojo) {
  const pojo = {
    version: getVersion(_pojo.makerAssetAddress, _pojo.takerAssetAddress)
  }
  Object.assign(pojo, _pojo)
  const encodingUint8Array = (new Uint8Array(160)).fill(0)
  Object.keys(encodingOffsets).forEach((key) => {
    if (pojo[key].uint8Array > (encodingOffsets[1] - encodingOffsets[0])) {
      throw new Error('Too Big')
    }
    encodingUint8Array.set(pojo[key].uint8Array, encodingOffsets[key][1] - pojo[key].uint8Array.length)
  })
  return new Amorph(encodingUint8Array)
}
