const Ultralightbeam = require('ultralightbeam')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const zocrAbi = require('../lib/zocrAbi')
const Amorph = require('amorph')
const getPojoFromEncoding = require('./getPojoFromEncoding')
const Pair = require('./Pair')
const getPairId = require('./getPairId')
const amorphBase64 = require('amorph-base64')

module.exports = class ZocrProviderClient {
  constructor(provider, db, zocrAddress) {
    this.provider = provider
    this.db = db
    this.zocrAddress = zocrAddress
    this.ultralightbeam = new Ultralightbeam(provider)
    this.zocr = new SolWrapper(this.ultralightbeam, zocrAbi, zocrAddress)
    this.pairs = {}
  }

  getPair(aAssetAddress, bAssetAddress) {
    const pairId = getPairId(aAssetAddress, bAssetAddress)
    const pairIdBase64 = pairId.to(amorphBase64)
    if (this.pairs[pairIdBase64]) {
      return this.pairs[pairIdBase64]
    }
    this.pairs[pairIdBase64] = new Pair(this, aAssetAddress, bAssetAddress)
    return this.pairs[pairIdBase64]
  }
}
