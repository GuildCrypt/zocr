const zocrAbi = require('./zocrAbi')
const zocrAddress = require('./zocrAddress')
const amorphHex = require('amorph-hex')

let web3Zocr

module.exports = function fetchWeb3Zocr() {
  if (web3Zocr) {
    return web3Zocr
  }
  web3Zocr = web3.eth.contract(zocrAbi).at(zocrAddress.to(amorphHex.prefixed))
  return web3Zocr
}
