const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')

const WETH = getRandomAmorph(20)
const ZRX = getRandomAmorph(20)
const DAI = getRandomAmorph(20)
const USDC =  getRandomAmorph(20)

WETH.symbol = 'WETH'
WETH.type = 'base'
ZRX.symbol = 'ZRX'
ZRX.type = 'base'

DAI.symbol = 'DAI'
DAI.type = 'quote'
USDC.symbol = 'USDC'
USDC.type = 'quote'

function generateOrderPojo(makerAssetAddress, takerAssetAddress) {
  return {
    makerAssetAddress: makerAssetAddress,
    takerAssetAddress: takerAssetAddress,
    makerAssetAmount: getRandomAmorph(4),
    takerAssetAmount: getRandomAmorph(4),
    expirationTimeSeconds: getRandomAmorph(4),
    salt: getRandomAmorph(6),
  }
}


module.exports = {
  zero: Amorph.from(amorphNumber.unsigned, 0),
  one: Amorph.from(amorphNumber.unsigned, 1),
  two: Amorph.from(amorphNumber.unsigned, 2),
  six: Amorph.from(amorphNumber.unsigned, 6),
  WETH,
  ZRX,
  DAI,
  USDC,
  nullAddress: new Amorph((new Uint8Array(20)).fill(0)),
  exchangeAddress: Amorph.from(amorphHex.prefixed, '0x4f833a24e1f95d70f028921e27040ca56e09ab0b'),
  orders: [
    generateOrderPojo(WETH, DAI),
    generateOrderPojo(DAI, WETH),
    generateOrderPojo(ZRX, DAI),
    generateOrderPojo(DAI, ZRX),
    generateOrderPojo(WETH, USDC),
    generateOrderPojo(USDC, WETH),
    generateOrderPojo(ZRX, USDC),
    generateOrderPojo(USDC, ZRX),
  ]
}
