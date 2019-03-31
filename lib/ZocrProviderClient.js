const Ultralightbeam = require('ultralightbeam')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const zocrAbi = require('../lib/zocrAbi')
const Amorph = require('amorph')
const getPojoFromEncoding = require('./getPojoFromEncoding')
const Pair = require('./Pair')
const getPairId = require('./getPairId')
const amorphHex = require('amorph-hex')
const exchangeInfo = require('./exchangeInfo')

module.exports = class ZocrProviderClient {
  constructor(provider, db, zocrAddress, exchangeAddress) {
    this.provider = provider
    this.db = db
    this.ultralightbeam = new Ultralightbeam(provider)
    this.zocrAddress = zocrAddress
    this.exchangeAddress = exchangeAddress
    this.pairs = {}
  }

  getZocr() {
    if (this.zocr) {
      return this.zocr
    }
    this.zocr = new SolWrapper(this.ultralightbeam, zocrAbi, this.zocrAddress)
    return this.zocr
  }

  getExchange() {
    if (this.exchange) {
      return this.exchange
    }
    this.exchange = new SolWrapper(this.ultralightbeam, exchangeInfo.abi, this.exchangeAddress)
    return this.exchange
  }

  getPair(leftAssetAddress, rightAssetAddress) {
    const pairId = getPairId(leftAssetAddress, rightAssetAddress)
    const pairIdBase64 = pairId.to(amorphHex.unprefixed)
    if (this.pairs[pairIdBase64]) {
      return this.pairs[pairIdBase64]
    }
    this.pairs[pairIdBase64] = new Pair(this, leftAssetAddress, rightAssetAddress)
    return this.pairs[pairIdBase64]
  }
}
