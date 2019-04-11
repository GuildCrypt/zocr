const Ultralightbeam = require('ultralightbeam')
const ganache = require('ganache-cli')
const accounts = require('./accounts')
const amorphNumber = require('amorph-number')
const amorphHex = require('amorph-hex')
const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const zeroExSubproviders = require('@0x/subproviders')


const provider = ganache.provider({
  gasPrice: 3000000000,
  gasLimit: 8000000,
  blocktime: 2,
  accounts: accounts.map((account) => {
    return {
      secretKey: account.privateKey.to(amorphHex.prefixed),
      balance: getRandomAmorph(16).to(amorphNumber.unsigned)
    }
  }),
  // db_path: `${__dirname}/0x_ganache_snapshot`
})
const fetchUltralightbeam =  new Ultralightbeam(provider)

module.exports = ultralightbeam
