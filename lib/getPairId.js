const Amorph = require('amorph')

module.exports = function getPairId(aAssetAddress, bAssetAddress) {
  const pairIdUint8Array = new Uint8Array(4)
  for (let i = 0; i < 4; i ++) {
    pairIdUint8Array[i] = aAssetAddress.uint8Array[i] ^ bAssetAddress.uint8Array[i]
  }
  return new Amorph(pairIdUint8Array)
}
