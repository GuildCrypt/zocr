const Amorph = require('amorph')

module.exports = function getPairId(leftAssetAddress, rightAssetAddress) {
  const pairIdUint8Array = new Uint8Array(4)
  for (let i = 0; i < 4; i ++) {
    pairIdUint8Array[i] = leftAssetAddress.uint8Array[i] ^ rightAssetAddress.uint8Array[i]
  }
  return new Amorph(pairIdUint8Array)
}
