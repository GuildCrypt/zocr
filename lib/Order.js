const params = require('./params')
const amorphHex = require('amorph-hex')
const amorphBignumber = require('amorph-bignumber')
const Amorph = require('amorph')
const getSplitEncodings = require('./getSplitEncodings')
const getEncoding = require('./getEncoding')
const zeroExOrderUtils = require('@0x/order-utils')

module.exports = class Order {
  constructor(pojo) {
    Object.assign(this, pojo)
  }
  getZeroExOrder() {
    return {
      exchangeAddress: params.exchangeAddress.to(amorphHex.prefixed),
      expirationTimeSeconds: this.expirationTimeSeconds.to(amorphBignumber.unsigned),
      feeRecipientAddress: params.nullAddress.to(amorphHex.prefixed),
      makerAddress: this.makerAddress.to(amorphHex.prefixed),
      makerAssetAmount: this.makerAssetAmount.to(amorphBignumber.unsigned),
      makerFee: params.zero.to(amorphBignumber.unsigned),
      makerAssetData: zeroExOrderUtils.assetDataUtils.encodeERC20AssetData(this.makerAssetAddress.to(amorphHex.prefixed)),
      takerAddress: params.nullAddress.to(amorphHex.prefixed),
      takerAssetAmount: this.takerAssetAmount.to(amorphBignumber.unsigned),
      takerAssetData: zeroExOrderUtils.assetDataUtils.encodeERC20AssetData(this.takerAssetAddress.to(amorphHex.prefixed)),
      takerFee: params.zero.to(amorphBignumber.unsigned),
      salt: this.salt.to(amorphBignumber.unsigned),
      senderAddress: params.nullAddress.to(amorphHex.prefixed)
    }
  }
  async setSignature(provider, address) {
    const signedZeroExOrder = await zeroExOrderUtils.signatureUtils.ecSignOrderAsync(
      provider,
      this.getZeroExOrder(),
      address.to(amorphHex.prefixed)
    )
    this.signature = Amorph.from(amorphHex.prefixed, signedZeroExOrder.signature)
  }
  getSplitEncodings() {
    return getSplitEncodings(this)
  }
  getEncoding() {
    return getEncoding(this)
  }
}
