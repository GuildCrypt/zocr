const accounts = require('./accounts')
const params = require('./params')
const zeroEx = require('0x.js')
const ultralightbeam = require('./ultralightbeam')
const amorphHex = require('amorph-hex')
const amorphBignumber = require('amorph-bignumber')
const Amorph = require('amorph')

function getOrderPojo(orderParams) {
  return {
    exchangeAddress: params.exchangeAddress.to(amorphHex.prefixed),
    expirationTimeSeconds: orderParams.expirationTimeSeconds.to(amorphBignumber.unsigned),
    feeRecipientAddress: params.nullAddress.to(amorphHex.prefixed),
    makerAddress: accounts[0].address.to(amorphHex.prefixed),
    makerAssetAmount: orderParams.makerAssetAmount.to(amorphBignumber.unsigned),
    makerFee: params.zero.to(amorphBignumber.unsigned),
    makerAssetData: zeroEx.assetDataUtils.encodeERC20AssetData(orderParams.makerAssetAddress.to(amorphHex.prefixed)),
    takerAddress: params.nullAddress.to(amorphHex.prefixed),
    takerAssetAmount: orderParams.takerAssetAmount.to(amorphBignumber.unsigned),
    takerAssetData: zeroEx.assetDataUtils.encodeERC20AssetData(orderParams.takerAssetAddress.to(amorphHex.prefixed)),
    takerFee: params.zero.to(amorphBignumber.unsigned),
    salt: orderParams.salt.to(amorphBignumber.unsigned),
    senderAddress: params.nullAddress.to(amorphHex.prefixed)
  }
}

describe('set signatures', () => {
  params.orders.forEach((order, index) => {
    it(`order #${index}`, () => {
      return zeroEx.signatureUtils.ecSignOrderAsync(
        ultralightbeam.provider,
        getOrderPojo(order),
        accounts[0].address.to(amorphHex.prefixed)
      ).then((signedOrderPojo) => {
        order.signature = Amorph.from(amorphHex.prefixed, signedOrderPojo.signature)
      })
    })
  })
})
