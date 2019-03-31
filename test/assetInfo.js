const parseSolcOutput = require('ultralightbeam/lib/parseSolcOutput')
const solc = require('solc')
const fs = require('fs')
const path = require('path')

const zeppelinDir = path.dirname(require.resolve('openzeppelin-solidity/package.json'))
const zeppelinContractsDir = `${zeppelinDir}/contracts`

const output = solc.compile({
    sources: {
      'math/SafeMath.sol': fs.readFileSync(`${zeppelinContractsDir}/math/SafeMath.sol`, 'utf8'),
      'utils/Address.sol': fs.readFileSync(`${zeppelinContractsDir}/utils/Address.sol`, 'utf8'),
      'IERC20.sol': fs.readFileSync(`${zeppelinContractsDir}/token/ERC20/IERC20.sol`, 'utf8'),
      'ERC20.sol': fs.readFileSync(`${zeppelinContractsDir}/token/ERC20/ERC20.sol`, 'utf8'),
      'Asset.sol': fs.readFileSync(`${__dirname}/Asset.sol`, 'utf8'),
    }
}, 1)

module.exports = parseSolcOutput(output)['Asset.sol:Asset']
