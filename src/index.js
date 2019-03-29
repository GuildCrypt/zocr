const ZocrProviderClient = require('../lib/ZocrProviderClient')
const LocalStorageDb = require('../lib/LocalStorageDb')
const Amorph = require('amorph')
const amorphHex = require('amorph-hex')
const Main = require('./components/Main')

const zocrProviderClient = new ZocrProviderClient(
  window.web3.currentProvider,
  new LocalStorageDb,
  Amorph.from(amorphHex.unprefixed, '02cfb71048a67a2a34b588b3e39f29d6434b6f67')
)

const daiAddress = Amorph.from(amorphHex.unprefixed, '6e87624b3bc434cd708c2ca517541ddc89c7d5b3')
const puppyAddress = Amorph.from(amorphHex.unprefixed, '83ebd2b0e093920242cd452d5f781a86ffc8b5a8')

const pair = zocrProviderClient.getPair(puppyAddress, daiAddress)

const main = new Main(pair)
main.appendTo$(document.body)
