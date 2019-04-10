const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const accounts = require('./accounts')
const Order = require('../lib/Order')
const orderParams = require('./orderParams')
const assetsStub = require('./assetsStub')
const fetchZocrProviderClient = require('./fetchZocrProviderClient')
const ultralightbeam = require('./ultralightbeam')
const amorphNumber = require('amorph-number')
const params = require('../lib/params')
const Amorph = require('amorph')

let orders

module.exports = async function fetchOrders() {
  if (orders) {
    return orders
  }

  const zocrProviderClient = await fetchZocrProviderClient()
  const assets = await assetsStub.promise

  return Promise.all(orderParams.map(async (orderParam) => {

    const makerAssetSymbol = orderParam[0]
    const takerAssetSymbol = orderParam[1]
    const makerAssetAmountNumber = orderParam[2]
    const takerAssetAmountNumber = orderParam[3]

    const makerAssetAddress = assets[makerAssetSymbol].address
    const takerAssetAddress = assets[takerAssetSymbol].address
    const makerAssetAmount = Amorph.from(amorphNumber.unsigned, makerAssetAmountNumber)
    const takerAssetAmount = Amorph.from(amorphNumber.unsigned, takerAssetAmountNumber)


    const order = new Order(
      zocrProviderClient.getPair(makerAssetAddress, takerAssetAddress),
      {
        makerAddress: accounts[0].address,
        makerAssetAddress: makerAssetAddress,
        takerAssetAddress: takerAssetAddress,
        makerAssetAmount: makerAssetAmount,
        takerAssetAmount: takerAssetAmount,
        expirationTimeSeconds: params.maxExpirationTimeSeconds,
        salt: getRandomAmorph(4),
      }
    )

    await order.setSignature(ultralightbeam.provider, accounts[0].address)

    return order
  }))
}
