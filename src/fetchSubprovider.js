const subproviders = require('@0x/subproviders')

let subprovider

module.exports = async function fetchSubprovider() {
  if (subprovider) {
    return subprovider
  }
  subprovider = new subproviders.MetamaskSubprovider(web3.currentProvider)
  return subprovider
}
