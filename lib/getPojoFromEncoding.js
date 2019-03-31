const Amorph = require('amorph')
const encodingOffsets = require('./encodingOffsets')
const getBiggerAddress = require('./getBiggerAddress')
const versions = require('./versions')

module.exports = function getPojoFromEncoding(leftAssetAddress, rightAssetAddress, encoding) {
  const pojo = {}
  Object.keys(encodingOffsets).forEach((key) => {
    pojo[key] = new Amorph(encoding.uint8Array.slice(encodingOffsets[key][0], encodingOffsets[key][1]))
  })

  const biggerAssetAddress = getBiggerAddress(leftAssetAddress, rightAssetAddress)
  const smallerAssetAddress = biggerAssetAddress.equals(leftAssetAddress) ? rightAssetAddress : leftAssetAddress

  if (pojo.version.equals(versions.V0_BIGGER_MAKER_ADDRESS)) {
    pojo.makerAssetAddress = biggerAssetAddress
    pojo.takerAssetAddress = smallerAssetAddress
  } else {
    pojo.makerAssetAddress = smallerAssetAddress
    pojo.takerAssetAddress = biggerAssetAddress
  }

  delete pojo.version

  return pojo
}
