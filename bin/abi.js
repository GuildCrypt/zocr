const zocrInfo = require('../')
const fs = require('fs')

fs.writeFileSync('lib/zocrAbi.js', `module.exports = ${JSON.stringify(zocrInfo.abi, null , 2)}`)
