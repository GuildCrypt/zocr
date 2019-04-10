const ZocrProviderClient = require('../lib/ZocrProviderClient')
const LocalStorageDb = require('../lib/LocalStorageDb')
const Amorph = require('amorph')
const amorphHex = require('amorph-hex')
const exchangeAddress = require('./exchangeAddress')
const erc20ProxyAddress = require('./erc20ProxyAddress')

let zocrProviderClient

module.exports = async function fetchZocrProviderClient() {
  if (zocrProviderClient) {
    return zocrProviderClient
  }
  zocrProviderClient = new ZocrProviderClient(
    window.web3.currentProvider,
    new LocalStorageDb,
    Amorph.from(amorphHex.unprefixed, '02cfb71048a67a2a34b588b3e39f29d6434b6f67'),
    exchangeAddress,
    erc20ProxyAddress
  )
  return zocrProviderClient
}
