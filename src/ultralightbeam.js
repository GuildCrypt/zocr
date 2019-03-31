const Ultralightbeam = require('ultralightbeam')

const ultralightbeam = new Ultralightbeam(web3.currentProvider)

ultralightbeam.options.approve = (transanctionRequest) => {
  const gasBignumber = transanctionRequest.values.gas.to(amorphBignumber.unsigned)
  console.log('GAS:', gasBignumber.toString())
  return ultralightbeam.resolve(transanctionRequest)
}

module.exports = ultralightbeam
