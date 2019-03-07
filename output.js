const solc = require('solc')
const fs = require('fs')

module.exports = solc.compile({
  sources: {
    'MakerFacilityPhonebook.sol': fs.readFileSync(`${__dirname}/contracts/MakerFacilityPhonebook.sol`, 'utf8'),
    'MakerFacility.sol': fs.readFileSync(`${__dirname}/contracts/MakerFacility.sol`, 'utf8'),
  }
}, 1)
