const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')

module.exports = {
  zero: Amorph.from(amorphNumber.unsigned, 0),
  one: Amorph.from(amorphNumber.unsigned, 1),
  two: Amorph.from(amorphNumber.unsigned, 2),
  six: Amorph.from(amorphNumber.unsigned, 6),
  nullAddress: new Amorph((new Uint8Array(20)).fill(0)),
  exchangeAddress: Amorph.from(amorphHex.prefixed, '0x4f833a24e1f95d70f028921e27040ca56e09ab0b'),
  order0: {
    version: new Amorph(new Uint8Array([0])),
    makerAssetAddress: getRandomAmorph(20),
    takerAssetAddress: getRandomAmorph(20),
    makerAssetAmount: Amorph.from(amorphNumber.unsigned, 100),
    takerAssetAmount: Amorph.from(amorphNumber.unsigned, 110),
    expirationTimeSeconds: getRandomAmorph(4),
    salt: getRandomAmorph(6),
  },
  order1: {
    version: new Amorph(new Uint8Array([0])),
    makerAssetAddress: getRandomAmorph(20),
    takerAssetAddress: getRandomAmorph(20),
    makerAssetAmount: Amorph.from(amorphNumber.unsigned, 200),
    takerAssetAmount: Amorph.from(amorphNumber.unsigned, 210),
    expirationTimeSeconds: getRandomAmorph(4),
    salt: getRandomAmorph(6),
  }
}
