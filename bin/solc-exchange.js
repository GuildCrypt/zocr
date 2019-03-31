const solc = require('solc')
const fs = require('fs')
const parseSolcOutput = require('ultralightbeam/lib/parseSolcOutput')
const amorphHex = require('amorph-hex')

const output = solc.compile({
  sources: {
    'Exchange.sol': fs.readFileSync(`${__dirname}/../lib/contracts/Exchange.sol`, 'utf8'),
  }
}, 1)

fs.writeFileSync(
  `${__dirname}/../lib/exchangeOutput.js`,
  `module.exports = ${JSON.stringify(output, null, 2)}`
)
