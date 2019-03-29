const Amorph = require('amorph')
const Bignumber = require('bignumber.js')
const amorphBigumber = require('amorph-bignumber')

module.exports = Amorph.from(amorphBigumber.unsigned, (new Bignumber(10)).pow(18))
