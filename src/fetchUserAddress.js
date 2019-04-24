const Amorph = require('amorph')
const amorphHex = require('amorph-hex')

let userAddress

module.exports = async function fetchUserAddress() {
  if (userAddress) {
    return userAddress
  }
  if (!window.web3 && !window.ethereum) {
    return null
  }
  if (window.ethereum && !web3.currentProvider.selectedAddress) {
    await ethereum.enable()
  }
  if (!web3.currentProvider.selectedAddress) {
    return null
  }
  userAddress = Amorph.from(amorphHex.prefixed, web3.currentProvider.selectedAddress)
  return userAddress
}
