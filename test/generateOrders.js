const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const accounts = require('./accounts')
const Order = require('../lib/Order')
const orderParams = require('./orderParams')
const assetsStub = require('./assetsStub')
const fetchZocrProviderClient = require('./fetchZocrProviderClient')
const ultralightbeam = require('./ultralightbeam')

let orders

module.exports = async function fetchOrders() {
  if (orders) {
    return orders
  }

  const zocrProviderClient = await fetchZocrProviderClient()
  const assets = await assetsStub.promise

  return orderParams.map((orderParam) => {

    const makerAssetSymbol = orderParam[0]
    const takerAssetSymbol = orderParam[1]

    const makerAssetAddress = assets[makerAssetSymbol].address
    const takerAssetAddress = assets[takerAssetSymbol].address

    const order = new Order(
      zocrProviderClient.getPair(makerAssetAddress, takerAssetAddress),
      {
        makerAddress: accounts[0].address,
        makerAssetAddress: makerAssetAddress,
        takerAssetAddress: takerAssetAddress,
        makerAssetAmount: getRandomAmorph(4),
        takerAssetAmount: getRandomAmorph(4),
        expirationTimeSeconds: getRandomAmorph(5),
        salt: getRandomAmorph(4),
      }
    )

    order.setSignature(ultralightbeam.provider, accounts[0].address)

    return order
  })
}
