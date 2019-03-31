const params = require('./params')
const amorphHex = require('amorph-hex')
const amorphBignumber = require('amorph-bignumber')
const Amorph = require('amorph')
const getSplitEncodings = require('./getSplitEncodings')
const getEncoding = require('./getEncoding')
const zeroExOrderUtils = require('@0x/order-utils')

module.exports = class Order {
  constructor(pair, pojo) {
    this.pair = pair
    this.pojo = pojo
  }
  getZeroExOrder() {
    const zeroExOrder = {
      exchangeAddress: params.exchangeAddress.to(amorphHex.prefixed),
      expirationTimeSeconds: this.pojo.expirationTimeSeconds.to(amorphBignumber.unsigned),
      feeRecipientAddress: params.nullAddress.to(amorphHex.prefixed),
      makerAddress: this.pojo.makerAddress.to(amorphHex.prefixed),
      makerAssetAmount: this.pojo.makerAssetAmount.to(amorphBignumber.unsigned),
      makerFee: params.zero.to(amorphBignumber.unsigned),
      makerAssetData: zeroExOrderUtils.assetDataUtils.encodeERC20AssetData(this.pojo.makerAssetAddress.to(amorphHex.prefixed)),
      takerAddress: params.nullAddress.to(amorphHex.prefixed),
      takerAssetAmount: this.pojo.takerAssetAmount.to(amorphBignumber.unsigned),
      takerAssetData: zeroExOrderUtils.assetDataUtils.encodeERC20AssetData(this.pojo.takerAssetAddress.to(amorphHex.prefixed)),
      takerFee: params.zero.to(amorphBignumber.unsigned),
      salt: this.pojo.salt.to(amorphBignumber.unsigned),
      senderAddress: params.nullAddress.to(amorphHex.prefixed)
    }
    if (this.pojo.signature) {
      zeroExOrder.signature = this.pojo.signature.to(amorphHex.prefixed)
    }
    return zeroExOrder
  }
  async setSignature(provider, address) {
    const signedZeroExOrder = await zeroExOrderUtils.signatureUtils.ecSignOrderAsync(
      provider,
      this.getZeroExOrder(),
      address.to(amorphHex.prefixed)
    )
    this.pojo.signature = Amorph.from(amorphHex.prefixed, signedZeroExOrder.signature)
  }
  async fetchHash() {
    if (this.hash) {
      return this.hash
    }
    const orderHashBuffer = await zeroExOrderUtils.orderHashUtils.getOrderHashBuffer(this.getZeroExOrder())
    return new Amorph(orderHashBuffer)
  }
  getSplitEncodings() {
    return getSplitEncodings(this.pojo)
  }
  getEncoding() {
    return getEncoding(this.pojo)
  }
  broadcast(options) {
    return this.pair.zocrProviderClient.getZocr().broadcast('add(bytes4,bytes32[5])', [
      this.pair.getId(),
      this.getSplitEncodings()
    ], options)
  }
  getMakerAsset() {
    if (this.makerAsset) {
      return this.makerAsset
    }
    if (this.pojo.makerAssetAddress.equals(this.pair.leftAssetAddress)) {
      return this.pair.getLeftAsset()
    } else {
      return this.pair.getRightAsset()
    }
  }
  fetchMakerAllowance() {
    console.log('fetch makerAddress', this.pojo.makerAddress.to(amorphHex.unprefixed))
    console.log('fetch exchangeAddress', this.pair.zocrProviderClient.exchangeAddress.to(amorphHex.unprefixed))
    return this.getMakerAsset().fetch('allowance(address,address)', [
      this.pojo.makerAddress,
      this.pair.zocrProviderClient.exchangeAddress
    ])
  }
}
