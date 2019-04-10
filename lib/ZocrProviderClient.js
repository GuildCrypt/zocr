const Ultralightbeam = require('ultralightbeam')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const zocrAbi = require('../lib/zocrAbi')
const Amorph = require('amorph')
const getPojoFromEncoding = require('./getPojoFromEncoding')
const Pair = require('./Pair')
const getPairId = require('./getPairId')
const amorphHex = require('amorph-hex')
const exchangeInfo = require('./exchangeInfo')
const erc20ProxyInfo = require('./erc20ProxyInfo')
const zeroEx = require('0x.js')
const amorphBignumber = require('./amorphBignumber')

module.exports = class ZocrProviderClient {
  constructor(provider, db, zocrAddress, exchangeAddress, erc20ProxyAddress) {
    this.provider = provider
    this.db = db
    this.ultralightbeam = new Ultralightbeam(provider)
    this.zocrAddress = zocrAddress
    this.exchangeAddress = exchangeAddress
    this.erc20ProxyAddress = erc20ProxyAddress
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

  getErc20Proxy() {
    if (this.erc20Proxy) {
      return this.erc20Proxy
    }
    this.erc20Proxy = new SolWrapper(this.ultralightbeam, erc20ProxyInfo.abi, this.erc20ProxyAdress)
    return this.erc20Proxy
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

  async fetchZeroExContractWrappers() {
    if (this.zeroExContractWrappers) {
      return this.zeroExContractWrappers
    }
    const gasPrice = await this.ultralightbeam.eth.getGasPrice()
    this.zeroExContractWrappers = new zeroEx.ContractWrappers(this.provider, {
      contractAddresses: {
        exchange: this.exchangeAddress.to(amorphHex.prefixed),
        erc20Proxy: this.erc20ProxyAddress.to(amorphHex.prefixed)
      },
      gasPrice: gasPrice.to(amorphBignumber.unsigned),
      networkId: 50
    })
    return this.zeroExContractWrappers
  }
}
