const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')

const WETH = getRandomAmorph(20)
const ZRX = getRandomAmorph(20)
const DAI = getRandomAmorph(20)
const USDC =  getRandomAmorph(20)

WETH.symbol = 'WETH'
ZRX.symbol = 'ZRX'
DAI.symbol = 'DAI'
USDC.symbol = 'USDC'

module.exports = {
  WETH,
  ZRX,
  DAI,
  USDC
}
