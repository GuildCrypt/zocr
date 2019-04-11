const Ultralightbeam = require('ultralightbeam')

let ultralightbeam

module.exports = async function fetchUltralightbeam() {
  if (ultralightbeam) {
    return ultralightbeam
  }

  ultralightbeam = new Ultralightbeam(web3.currentProvider)

  ultralightbeam.options.approve = (transanctionRequest) => {
    const gasBignumber = transanctionRequest.values.gas.to(amorphBignumber.unsigned)
    console.log('GAS:', gasBignumber.toString())
    return ultralightbeam.resolve(transanctionRequest)
  }

  return ultralightbeam
}
