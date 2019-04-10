const solc = require('solc')
const fs = require('fs')
const parseSolcOutput = require('ultralightbeam/lib/parseSolcOutput')
const amorphHex = require('amorph-hex')

const output = solc.compile({
  sources: {
    'ERC20Proxy.sol': fs.readFileSync(`${__dirname}/../lib/contracts/ERC20Proxy.sol`, 'utf8'),
  }
}, 1)

fs.writeFileSync(
  `${__dirname}/../lib/erc20ProxyOutput.js`,
  `module.exports = ${JSON.stringify(output, null, 2)}`
)
