const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')

module.exports = {
  zero: Amorph.from(amorphNumber.unsigned, 0),
  nullAddress: new Amorph((new Uint8Array(20)).fill(0)),
  exchangeAddress: Amorph.from(amorphHex.prefixed, '0x4f833a24e1f95d70f028921e27040ca56e09ab0b'),
}
