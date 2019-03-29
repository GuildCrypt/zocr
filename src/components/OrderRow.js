const Row = require('./Row')
const Cell = require('./Cell')
const amorphBigumber = require('amorph-bignumber')
const e18 = require('../e18')

module.exports = class OrderRow extends Row {
  constructor(buyOrSell, order) {
    const baseAssetAddress = buyOrSell === 'buy' ? order.takerAssetAddress : order.makerAssetAddress
    const quoteAssetAddress = buyOrSell === 'buy' ? order.makerAssetAddress : order.takerAssetAddress
    const baseAssetAmount = buyOrSell === 'buy' ? order.takerAssetAmount : order.makerAssetAmount
    const quoteAssetAmount = buyOrSell === 'buy' ? order.makerAssetAmount : order.takerAssetAmount
    const sizeNumber = baseAssetAmount.to(amorphBigumber.unsigned).div(100).toNumber()
    const valuationNumber =
      quoteAssetAmount.to(amorphBigumber.unsigned)
      .div(e18.to(amorphBigumber.unsigned))
      .div(sizeNumber)
      .mul(100)
      .toNumber()
    super([
      new Cell(buyOrSell),
      new Cell(`${sizeNumber}%`),
      new Cell(`${valuationNumber} DAI`)
    ])
  }
}
