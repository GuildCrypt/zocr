const versions = require('./versions')
const getBiggerAddress = require('./getBiggerAddress')

module.exports = function getVersion(makerAssetAddress, takerAssetAddress) {
  const biggerAssetAddress = getBiggerAddress(makerAssetAddress, takerAssetAddress)
  if (biggerAssetAddress.equals(makerAssetAddress)) {
    return versions.V0_BIGGER_MAKER_ADDRESS
  } else {
    return versions.V0_BIGGER_TAKER_ADDRESS
  }
}
