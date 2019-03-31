const erc20Info = require('../lib/erc20Info')

module.exports = class OrderPoller {
  constructor(ultralightbeam, order) {
    this.ultralightbeam
    this.order = order
  }
  getMakerAsset() {
    if (this.makerAsset) {
      return this.makerAsset
    }
    this.makerAsset = new SolWrapper(ultralightbeam, erc20Info.abi, this.order.makerAssetAddress)
    return this.makerAsset
  }
}
