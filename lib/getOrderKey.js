const Amorph = require('amorph')
const shajs = require('sha.js')

module.exports = function getOrderKey(pairId, orderIndex) {
  const sha256 = new shajs.sha256()
  const prehashUint8Array = (new Uint8Array(8)).fill(0)
  prehashUint8Array.set(pairId.uint8Array)
  prehashUint8Array.set(orderIndex.uint8Array, 8 - orderIndex.uint8Array.length)
  const keyUint8Array = sha256.update(prehashUint8Array).digest()
  return new Amorph(keyUint8Array)
}
