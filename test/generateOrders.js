const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const accounts = require('./accounts')
const Order = require('../lib/Order')
const orderParams = require('./orderParams')

module.exports = async function generateOrders(assets) {
  return orderParams.map((orderParam) => {
    return new Order({
      makerAddress: accounts[0].address,
      makerAssetAddress: assets[orderParam[0]].address,
      takerAssetAddress: assets[orderParam[1]].address,
      makerAssetAmount: getRandomAmorph(4),
      takerAssetAmount: getRandomAmorph(4),
      expirationTimeSeconds: getRandomAmorph(5),
      salt: getRandomAmorph(4),
    })
  })
}
