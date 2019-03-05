const ultralightbeam = require('./ultralightbeam')
const makerFacilityInfo = require('../')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const accounts = require('./accounts')
const FailedTransactionError = require('ultralightbeam/lib/errors/FailedTransaction')
const getRandomAmorph = require('ultralightbeam/lib/getRandomAmorph')
const amorphBignumber = require('amorph-bignumber')
const zeroEx = require('0x.js')
const amorphHex = require('amorph-hex')

ultralightbeam.options.approve = (transanctionRequest) => {
  const gasBignumber = transanctionRequest.values.gas.to(amorphBignumber.unsigned)
  console.log('GAS:',gasBignumber.toString())
  return ultralightbeam.resolve(transanctionRequest)
}

describe('makerFacility', () => {

  let makerFacility

  const zero = Amorph.from(amorphNumber.unsigned, 0)
  const one = Amorph.from(amorphNumber.unsigned, 1)
  const two = Amorph.from(amorphNumber.unsigned, 2)

  const nullAddress = new Amorph((new Uint8Array(20)).fill(0))

  const exchangeAddress = Amorph.from(amorphHex.prefixed, '0x4f833a24e1f95d70f028921e27040ca56e09ab0b')
  const makerAssetAddress = getRandomAmorph(20)
  const takerAssetAddress = getRandomAmorph(20)

  describe('deploy', () => {

    const makerAssetAmount = Amorph.from(amorphNumber.unsigned, 100)
    const takerAssetAmount = Amorph.from(amorphNumber.unsigned, 110)
    const expirationTimeSeconds = Amorph.from(amorphNumber.unsigned, 1000000)
    const salt = Amorph.from(amorphNumber.unsigned, 123456)

    let signature

    it('should create signature', () => {
      const orderPojo = {
        exchangeAddress: exchangeAddress.to(amorphHex.prefixed),
        expirationTimeSeconds: expirationTimeSeconds.to(amorphBignumber.unsigned),
        feeRecipientAddress: nullAddress.to(amorphHex.prefixed),
        makerAddress: accounts[0].address.to(amorphHex.prefixed),
        makerAssetAmount: makerAssetAmount.to(amorphBignumber.unsigned),
        makerFee: zero.to(amorphBignumber.unsigned),
        makerAssetData: zeroEx.assetDataUtils.encodeERC20AssetData(makerAssetAddress.to(amorphHex.prefixed)),
        takerAddress: nullAddress.to(amorphHex.prefixed),
        takerAssetAmount: takerAssetAmount.to(amorphBignumber.unsigned),
        takerAssetData: zeroEx.assetDataUtils.encodeERC20AssetData(takerAssetAddress.to(amorphHex.prefixed)),
        takerFee: zero.to(amorphBignumber.unsigned),
        salt: salt.to(amorphBignumber.unsigned),
        senderAddress: nullAddress.to(amorphHex.prefixed)
      }
      return zeroEx.signatureUtils.ecSignOrderAsync(
        ultralightbeam.provider,
        orderPojo,
        accounts[0].address.to(amorphHex.prefixed)
      ).then((signedOrderPojo) => {
        signature = Amorph.from(amorphHex.prefixed, signedOrderPojo.signature)
      })
    })

    it('should deploy', () => {
      return ultralightbeam.solDeploy(makerFacilityInfo.code, makerFacilityInfo.abi, [
        makerAssetAddress,
        takerAssetAddress,
        makerAssetAmount,
        takerAssetAmount,
        expirationTimeSeconds,
        salt,
        signature
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
      return makerFacility.fetch('ordersLength()', []).should.eventually.amorphEqual(one)
    })
    it('should have correct order0', () => {
      return makerFacility.fetch('orders(uint256)', [zero]).then((order0) => {
        order0.makerAssetAddress.should.amorphEqual(makerAssetAddress)
        order0.takerAssetAddress.should.amorphEqual(takerAssetAddress)
        order0.makerAssetAmount.should.amorphEqual(makerAssetAmount)
        order0.takerAssetAmount.should.amorphEqual(takerAssetAmount)
        order0.expirationTimeSeconds.should.amorphEqual(expirationTimeSeconds)
        order0.salt.should.amorphEqual(salt)
        order0.signature.should.amorphEqual(signature)
      })
    })
    it('should add order1', () => {
      return makerFacility.broadcast('add(address,address,uint256,uint256,uint256,uint256,bytes)', [
        makerAssetAddress,
        takerAssetAddress,
        makerAssetAmount,
        takerAssetAmount,
        expirationTimeSeconds,
        salt,
        signature
      ], {
        from: accounts[0]
      }).getConfirmation()
    })
    it('should have ordersLength of 2', () => {
      return makerFacility.fetch('ordersLength()', []).should.eventually.amorphEqual(two)
    })
  })

})
