const ultralightbeam = require('./ultralightbeam')
const makerFacilityInfo = require('../')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const accounts = require('./accounts')
const amorphBignumber = require('amorph-bignumber')
const amorphHex = require('amorph-hex')
const params = require('./params')
const getSplitEncodings = require('../lib/getSplitEncodings')

ultralightbeam.options.approve = (transanctionRequest) => {
  const gasBignumber = transanctionRequest.values.gas.to(amorphBignumber.unsigned)
  console.log('GAS:',gasBignumber.toString())
  return ultralightbeam.resolve(transanctionRequest)
}

describe('makerFacility', () => {

  let makerFacility
  let splitEncodings0

  describe('deploy', () => {

    it('should create splitEncodings', () => {
      splitEncodings0 = getSplitEncodings(params.order0)
    })

    it('should deploy', () => {
      return ultralightbeam.solDeploy(makerFacilityInfo.code, makerFacilityInfo.abi, [
        splitEncodings0[0],
        splitEncodings0[1],
        splitEncodings0[2],
        splitEncodings0[3],
        splitEncodings0[4],
        splitEncodings0[5]
      ], {
        from: accounts[0]
      }).then((_makerFacility) => {
        makerFacility = _makerFacility
      })
    })
    it('should have correct code', () => {
      return ultralightbeam.eth.getCode(makerFacility.address).should.eventually.amorphEqual(makerFacilityInfo.runcode)
    })
    it('should have ordersLength of 1', () => {
      return makerFacility.fetch('orderOffset()', []).should.eventually.amorphEqual(params.six)
    })
    it('should have correct order0', () => {
      return makerFacility.fetch('orderSplitEncodings(uint256)', [params.zero]).then((orderSplitEncodings) => {
        // order0.makerAssetAddress.should.amorphEqual(makerAssetAddress)
        // order0.takerAssetAddress.should.amorphEqual(takerAssetAddress)
        // order0.makerAssetAmount.should.amorphEqual(makerAssetAmount)
        // order0.takerAssetAmount.should.amorphEqual(takerAssetAmount)
        // order0.expirationTimeSeconds.should.amorphEqual(expirationTimeSeconds)
        // order0.salt.should.amorphEqual(salt)
        // order0.signature.should.amorphEqual(signature)
      })
    })
    it('should add', () => {
      return makerFacility.broadcast('add(bytes32,bytes32,bytes32,bytes32,bytes32,bytes32)', [
        splitEncodings0[0],
        splitEncodings0[1],
        splitEncodings0[2],
        splitEncodings0[3],
        splitEncodings0[4],
        splitEncodings0[5]
      ], {
        from: accounts[0]
      }).getConfirmation()
    })
  //   it('should add order1', () => {
  //     return makerFacility.broadcast('add(address,address,uint256,uint256,uint256,uint256,bytes)', [
  //       makerAssetAddress,
  //       takerAssetAddress,
  //       makerAssetAmount,
  //       takerAssetAmount,
  //       expirationTimeSeconds,
  //       salt,
  //       signature
  //     ], {
  //       from: accounts[0]
  //     }).getConfirmation()
  //   })
  //   it('should have ordersLength of 2', () => {
  //     return makerFacility.fetch('ordersLength()', []).should.eventually.amorphEqual(two)
  //   })
  })

})
