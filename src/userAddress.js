const Amorph = require('amorph')
const amorphHex = require('amorph-hex')

module.exports = Amorph.from(amorphHex.prefixed, web3.currentProvider.selectedAddress)
