const zocrStub = require('./zocrStub')
const localStorageDbStub = require('./localStorageDbStub')
const ultralightbeam = require('./ultralightbeam')
const ZocrProviderClient = require('../lib/ZocrProviderClient')
const exchangeStub = require('./exchangeStub')

let zocrProviderClient

module.exports = async function fetchZocrProviderClient() {
  if (zocrProviderClient) {
    return zocrProviderClient
  }

  const localStorageDb = await localStorageDbStub.promise
  const zocr = await zocrStub.promise
  const exchange = await exchangeStub.promise

  zocrProviderClient = new ZocrProviderClient(ultralightbeam.provider, localStorageDb, zocr.address, exchange.address)
  return zocrProviderClient
}
