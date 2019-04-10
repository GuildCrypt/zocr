const Amorph = require('amorph')
const amorphHex = require('amorph-hex')

let userAddress

module.exports = async function fetchUserAddress() {
  if (userAddress) {
    return userAddress
  }
  userAddress = Amorph.from(amorphHex.prefixed, web3.currentProvider.selectedAddress)
  return userAddress
}
