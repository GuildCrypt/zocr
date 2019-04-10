const LibOrder = require('../lib/Order')
const amorphBignumber = require('../lib/amorphBignumber')
const e18Bignumber = require('./e18Bignumber')
const Amorph = require('amorph')

module.exports = class Order extends LibOrder {
  getBaseAssetAmountPercentBignumber() {
    if (this.baseAssetAmountPercentBignumber) {
      return this.baseAssetAmountPercentBignumber
    }
    this.baseAssetAmountPercentBignumber =
      this.getBaseAssetAmount()
        .to(amorphBignumber.unsigned)
        .div(10000)
        .times(100)
    return this.baseAssetAmountPercentBignumber
  }
  async fetchBaseAssetFillable() {
    const makerAssetFillable = await this.fetchMakerAssetFillable()
    if (this.pair.getBaseAssetAddress().equals(this.pojo.makerAssetAddress)) {
      return makerAssetFillable
    }
    return makerAssetFillable.as(amorphBignumber.unsigned, (makerAssetFillableBignumber) => {
      return makerAssetFillableBignumber.div(this.getMakerAssetPerTakerAssetBignumber()).integerValue()
    })
  }
  async fetchBaseAssetFillablePercentBignumber() {
    const baseAssetFillable = await this.fetchBaseAssetFillable()
    return baseAssetFillable
      .to(amorphBignumber.unsigned)
      .div(10000)
      .times(100)
  }
  getValuation() {
    return Amorph.from(
      amorphBignumber.unsigned,
      this.getPriceBignumber().times(10000).integerValue()
    )
  }
  getDaiValuation() {
    return this.getValuation().as(amorphBignumber.unsigned, (valuationBignumber) => {
      return valuationBignumber.div(e18Bignumber).integerValue()
    })
  }
  getPrettyType() {
    if (this.prettyType) {
      return this.prettyType
    }
    const type = this.getType()
    this.prettyType = type.charAt(0).toUpperCase() + type.slice(1)
    return this.prettyType
  }
  getPrettyAntitype() {
    if (this.prettyAntitype) {
      return this.prettyAntitype
    }
    const antitype = this.getAntitype()
    this.prettyAntitype = antitype.charAt(0).toUpperCase() + antitype.slice(1)
    return this.prettyAntitype
  }
  setBaseAssetLabel(baseAssetLabel) {
    this.baseAssetLabel = baseAssetLabel
  }
  setQuoteAssetLabel(quoteAssetLabel) {
    this.quoteAssetLabel = quoteAssetLabel
  }
  requireBaseAssetLabel() {
    if (this.baseAssetLabel === undefined) {
      throw new Error('Base Asset Label not set')
    }
  }
  requireQuoteAssetLabel() {
    if (this.quoteAssetLabel === undefined) {
      throw new Error('Quote Asset Label not set')
    }
  }
  getBaseAssetLabel() {
    this.requireBaseAssetLabel()
    return this.baseAssetLabel
  }
  getQuoteAssetLabel() {
    this.requireQuoteAssetLabel()
    return this.quoteAssetLabel
  }

  getMakerAssetLabel() {
    if (this.getType() === 'buy') {
      return this.getQuoteAssetLabel()
    } else {
      return this.getBaseAssetLabel()
    }
  }

  getTakerAssetLabel() {
    if (this.getType() === 'buy') {
      return this.getBaseAssetLabel()
    } else {
      return this.getQuoteAssetLabel()
    }
  }

}
