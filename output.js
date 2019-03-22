const solc = require('solc')
const fs = require('fs')

module.exports = solc.compile({
  sources: {
    'Zocr.sol': fs.readFileSync(`${__dirname}/contracts/Zocr.sol`, 'utf8'),
  }
}, 1)
