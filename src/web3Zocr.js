const zocrAbi = require('./zocrAbi')
const zocrAddress = require('./zocrAddress')
const amorphHex = require('amorph-hex')

module.exports = web3.eth.contract(zocrAbi).at(zocrAddress.to(amorphHex.prefixed))
