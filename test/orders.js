const assetAddresses = require('./assetAddresses')
const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const accounts = require('./accounts')
const Order = require('../lib/Order')

function generateOrder(makerAssetAddress, takerAssetAddress) {
  return new Order({
    makerAddress: accounts[0].address,
    makerAssetAddress: makerAssetAddress,
    takerAssetAddress: takerAssetAddress,
    makerAssetAmount: getRandomAmorph(4),
    takerAssetAmount: getRandomAmorph(4),
    expirationTimeSeconds: getRandomAmorph(5),
    salt: getRandomAmorph(4),
  })
}


module.exports = [
  generateOrder(assetAddresses.WETH, assetAddresses.DAI),
  generateOrder(assetAddresses.DAI, assetAddresses.WETH),
  generateOrder(assetAddresses.ZRX, assetAddresses.DAI),
  generateOrder(assetAddresses.DAI, assetAddresses.ZRX),
  generateOrder(assetAddresses.WETH, assetAddresses.ZRX),
  generateOrder(assetAddresses.ZRX, assetAddresses.WETH),
  generateOrder(assetAddresses.USDC, assetAddresses.ZRX),
  generateOrder(assetAddresses.ZRX, assetAddresses.USDC),
]
