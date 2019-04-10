const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')

module.exports = {
  zero: Amorph.from(amorphNumber.unsigned, 0),
  nullAddress: new Amorph((new Uint8Array(20)).fill(0)),
  maxUint256: new Amorph((new Uint8Array(32)).fill(255)),
  maxExpirationTimeSeconds: new Amorph((new Uint8Array(4)).fill(255))
}
