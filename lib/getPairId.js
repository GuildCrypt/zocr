const Amorph = require('amorph')

module.exports = function getPairId(base, quote) {
  const pairIdUint8Array = new Uint8Array(4)
  for (let i = 0; i < 4; i ++) {
    pairIdUint8Array[i] = base.uint8Array[i] ^ quote.uint8Array[i]
  }
  return new Amorph(pairIdUint8Array)
}
