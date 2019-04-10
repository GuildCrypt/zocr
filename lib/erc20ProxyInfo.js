const parseSolcOutput = require('ultralightbeam/lib/parseSolcOutput')
const output = require('./erc20ProxyOutput')

if (
  output.errors
  && output.errors.length === 1
  && output.errors[0].indexOf('Warning: Experimental features are turned on') > 0
) {
  //0x.js Exchange uses experimental features on live deployment. This error is ignored.
  delete output.errors
}

module.exports = parseSolcOutput(output)['ERC20Proxy.sol:ERC20Proxy']
