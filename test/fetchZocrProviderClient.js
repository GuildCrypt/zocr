const zocrStub = require('./zocrStub')
const localStorageDbStub = require('./localStorageDbStub')
const ultralightbeam =  require('./ultralightbeam')
const ZocrProviderClient = require('../lib/ZocrProviderClient')
const zeroExContractAddresses = require('./zeroExContractAddresses')

let zocrProviderClient

module.exports = async function fetchZocrProviderClient() {
  if (zocrProviderClient) {
    return zocrProviderClient
  }

  const localStorageDb = await localStorageDbStub.promise
  const zocr = await zocrStub.promise

  zocrProviderClient = new ZocrProviderClient(
    ultralightbeam.provider,
    localStorageDb,
    zocr.address,
    zeroExContractAddresses.exchange,
    zeroExContractAddresses.erc20Proxy
  )
  return zocrProviderClient
}
