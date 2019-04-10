const params = require('./params')
const amorphHex = require('amorph-hex')
const amorphBignumber = require('./amorphBignumber')
const Amorph = require('amorph')
const getSplitEncodings = require('./getSplitEncodings')
const getEncoding = require('./getEncoding')
const zeroExOrderUtils = require('@0x/order-utils')
const amorphNumber = require('amorph-number')

module.exports = class Order {
  constructor(pair, pojo) {
    this.pair = pair
    this.pojo = pojo
  }
  getMakerAssetPerTakerAssetBignumber() {
    return this.pojo.makerAssetAmount.to(amorphBignumber.unsigned).div(
      this.pojo.takerAssetAmount.to(amorphBignumber.unsigned)
    )
  }
  getType() {
    if (this.type) {
      return this.type
    }
    const baseAssetAddress = this.pair.getBaseAssetAddress()
    this.type = baseAssetAddress.equals(this.pojo.makerAssetAddress) ? 'sell' : 'buy'
    return this.type
  }
  getAntitype() {
    if (this.antitype) {
      return this.antitype
    }
    this.antitype = this.getType() === 'buy' ? 'sell' : 'buy'
    return this.antitype
  }
  getIsExpired() {
    return this.pojo.expirationTimeSeconds.to(amorphNumber.unsigned) <= Math.ceil((new Date) / 10000)
  }
  getZeroExOrder() {
    const zeroExOrder = {
      exchangeAddress: this.pair.zocrProviderClient.exchangeAddress.to(amorphHex.prefixed),
      expirationTimeSeconds: this.pojo.expirationTimeSeconds.to(amorphBignumber.unsigned),
      feeRecipientAddress: params.nullAddress.to(amorphHex.prefixed),
      makerAddress: this.pojo.makerAddress.to(amorphHex.prefixed),
      makerAssetAmount: this.pojo.makerAssetAmount.to(amorphBignumber.unsigned),
      makerFee: params.zero.to(amorphBignumber.unsigned),
      makerAssetData: this.getMakerAssetData().to(amorphHex.prefixed),
      takerAddress: params.nullAddress.to(amorphHex.prefixed),
      takerAssetAmount: this.pojo.takerAssetAmount.to(amorphBignumber.unsigned),
      takerAssetData: this.getTakerAssetData().to(amorphHex.prefixed),
      takerFee: params.zero.to(amorphBignumber.unsigned),
      salt: this.pojo.salt.to(amorphBignumber.unsigned),
      senderAddress: params.nullAddress.to(amorphHex.prefixed)
    }
    if (this.pojo.signature) {
      zeroExOrder.signature = this.pojo.signature.to(amorphHex.prefixed)
    }
    return zeroExOrder
  }
  getMakerAssetData() {
    if (this.makerAssetData) {
      return this.makerAssetData
    }
    this.makerAssetData = Amorph.from(
      amorphHex.prefixed,
      zeroExOrderUtils.assetDataUtils.encodeERC20AssetData(
        this.pojo.makerAssetAddress.to(amorphHex.prefixed)
      )
    )
    return this.makerAssetData
  }
  getTakerAssetData() {
    if (this.takerAssetData) {
      return this.takerAssetData
    }
    this.takerAssetData = Amorph.from(
      amorphHex.prefixed,
      zeroExOrderUtils.assetDataUtils.encodeERC20AssetData(
        this.pojo.takerAssetAddress.to(amorphHex.prefixed)
      )
    )
    return this.takerAssetData
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
      this.makerAsset = this.pair.getLeftAsset()
    } else {
      this.makerAsset = this.pair.getRightAsset()
    }
    return this.makerAsset
  }
  getTakerAsset() {
    if (this.takerAsset) {
      return this.takerAsset
    }
    if (this.pojo.takerAssetAddress.equals(this.pair.leftAssetAddress)) {
      this.takerAsset = this.pair.getLeftAsset()
    } else {
      this.takerAsset =  this.pair.getRightAsset()
    }
    return this.takerAsset
  }
  fetchMakerAssetBalance() {
    return this.getMakerAsset().fetch('balanceOf(address)', [
      this.pojo.makerAddress
    ])
  }
  fetchMakerAssetAllowance() {
    return this.getMakerAsset().fetch('allowance(address,address)', [
      this.pojo.makerAddress,
      this.pair.zocrProviderClient.erc20ProxyAddress
    ])
  }
  async fetchMakerAssetFillable() {
    const makerAssetAllowance = await this.fetchMakerAssetAllowance()
    const makerAssetBalance = await this.fetchMakerAssetBalance()
    const makerAssetUnfilled = await this.fetchMakerAssetUnfilled()

    return [makerAssetAllowance, makerAssetBalance, makerAssetUnfilled].reduce((a, b) => {
      if (!a) {
        return b
      }
      if (a.to(amorphBignumber.unsigned).isLessThan(b.to(amorphBignumber.unsigned))) {
        return a
      } else {
        return b
      }
    })
  }
  // async fetchAllowancePerunBignumber() {
  //   const allowance = await this.fetchAllowance()
  //   return allowance.to(amorphBignumber.unsigned).div(
  //     this.pojo.makerAssetAmount.to(amorphBignumber.unsigned)
  //   )
  // }
  // async fetchTakerAssetFilled() {
  //   const orderHash = await this.fetchHash()
  //   return this.pair.zocrProviderClient.getExchange().fetch('filled(bytes32)', [orderHash])
  // }
  async fetchTakerAssetFilled() {
    const orderHash = await this.fetchHash()
    const zeroExContractWrappers = await this.pair.zocrProviderClient.fetchZeroExContractWrappers()
    const takerAssetFilledBignumber = await zeroExContractWrappers.exchange.getFilledTakerAssetAmountAsync(orderHash.to(amorphHex.prefixed))
    return Amorph.from(amorphBignumber.unsigned, takerAssetFilledBignumber)
  }

  async fetchMakerAssetFilled() {
    const takerAssetFilled = await this.fetchTakerAssetFilled()
    const getMakerAssetPerTakerAssetBignumber = this.getMakerAssetPerTakerAssetBignumber()
    return takerAssetFilled.as(amorphBignumber.unsigned, (takerAssetFilledBignumber) => {
      return takerAssetFilledBignumber.times(getMakerAssetPerTakerAssetBignumber).integerValue()
    })
  }
  async fetchMakerAssetUnfilled() {
    const makerAssetFilled = await this.fetchMakerAssetFilled()
    return this.pojo.makerAssetAmount.as(amorphBignumber.unsigned, (makerAssetAmountBignumber) => {
      return makerAssetAmountBignumber.minus(makerAssetFilled.to(amorphBignumber.unsigned))
    })
  }
  // async fetchFilledPerunBignumber() {
  //   const takerAssetFilled = await this.fetchTakerAssetFilled()
  //   return takerAssetFilled.to(amorphBignumber.unsigned).div(
  //     this.pojo.takerAssetAmount.to(amorphBignumber.unsigned)
  //   )
  // }
  // async fetchUnfilledPerunBignumber() {
  //   const filledPerunBignumber = await this.fetchFilledPerunBignumber()
  //   return filledPerunBignumber.minus(1).times(-1)
  // }
  // async fetchFillablePerunBignumber() {
  //   const allowancePerunBignumber = await this.fetchAllowancePerunBignumber()
  //   const unfilledPerunBignumber = await this.fetchUnfilledPerunBignumber()
  //
  //   return allowancePerunBignumber.lt(unfilledPerunBignumber) ? allowancePerunBignumber : unfilledPerunBignumber
  // }
  getQuoteAssetAmount() {
    if (this.quoteAssetAmount) {
      return this.quoteAssetAmount
    }
    if (this.pair.getQuoteAssetAddress().equals(this.pojo.makerAssetAddress)) {
      return this.pojo.makerAssetAmount
    } else {
      return this.pojo.takerAssetAmount
    }
  }
  getBaseAssetAmount() {
    if (this.baseAssetAmount) {
      return this.baseAssetAmount
    }
    if (this.pair.getBaseAssetAddress().equals(this.pojo.makerAssetAddress)) {
      return this.pojo.makerAssetAmount
    } else {
      return this.pojo.takerAssetAmount
    }
  }
  getQuoteAssetAmount() {
    if (this.quoteAssetAmount) {
      return this.quoteAssetAmount
    }
    if (this.pair.getQuoteAssetAddress().equals(this.pojo.makerAssetAddress)) {
      return this.pojo.makerAssetAmount
    } else {
      return this.pojo.takerAssetAmount
    }
  }
  getBaseAssetPerQuoteAssetBignumber() {
    const baseAssetAmount = this.getBaseAssetAmount()
    const quoteAssetAmount = this.getQuoteAssetAmount()
    return baseAssetAmount.to(amorphBignumber.unsigned).div(
      quoteAssetAmount.to(amorphBignumber.unsigned)
    )
  }
  getPriceBignumber() {
    const baseAssetAmount = this.getBaseAssetAmount()
    const quoteAssetAmount = this.getQuoteAssetAmount()
    return quoteAssetAmount.to(amorphBignumber.unsigned).div(
      baseAssetAmount.to(amorphBignumber.unsigned)
    )
  }

  async fetchIsValidSignature(signatureType) {
    const orderHash = await this.fetchHash()
    // const ecSignature = zeroExOrderUtils.signatureUtils.convertToSignatureWithType(
    //   this.pojo.signature.to(amorphHex.prefixed),
    //   signatureType
    // )
    const isValidSignature = zeroExOrderUtils.signatureUtils.isValidSignatureAsync(
      this.pair.zocrProviderClient.provider,
      orderHash.to(amorphHex.prefixed),
      this.pojo.signature.to(amorphHex.prefixed),
      this.pojo.makerAddress.to(amorphHex.prefixed)
    )
    return isValidSignature
  }

  async fill(takerAssetAmount, takerAddress) {

    const zeroExContractWrappers = await this.pair.zocrProviderClient.fetchZeroExContractWrappers()
    const zeroExOrder = this.getZeroExOrder()
    console.log(JSON.stringify(zeroExOrder, null, 2))

    await zeroExContractWrappers.exchange.validateOrderFillableOrThrowAsync(zeroExOrder)

    console.log('fillable')

    const transactionHashHexPrefixed = await zeroExContractWrappers.exchange.fillOrKillOrderAsync(
      zeroExOrder,
      takerAssetAmount.to(amorphBignumber.unsigned),
      takerAddress.to(amorphHex.prefixed)
    )

    return Amorph.from(amorphHex.prefixed, transactionHashHexPrefixed)
  }
}
