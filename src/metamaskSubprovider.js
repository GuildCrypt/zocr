const subproviders = require('@0x/subproviders')

module.exports = new subproviders.MetamaskSubprovider(web3.currentProvider)
