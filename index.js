const parseSolcOutput = require('ultralightbeam/lib/parseSolcOutput')
const output = require('./output')

const parsedSolcOuput = parseSolcOutput(output)

module.exports = {
  MakerFacility: parsedSolcOuput['MakerFacility.sol:MakerFacility'],
  MakerFacilityPhonebook: parsedSolcOuput['MakerFacilityPhonebook.sol:MakerFacilityPhonebook']
}
