const solc = require('solc')
const fs = require('fs')

module.exports = solc.compile({
  sources: {
    'MakerFacility.sol': fs.readFileSync(`${__dirname}/contracts/MakerFacility.sol`, 'utf8'),
  }
}, 1)
