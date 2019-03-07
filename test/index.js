const ultralightbeam = require('./ultralightbeam')
const info = require('../')
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

let makerFacilityPhonebook

describe('makerFacilityPhonebook', () => {
  it('should deploy', () => {
    return ultralightbeam.solDeploy(info.MakerFacilityPhonebook.code, info.MakerFacilityPhonebook.abi, [], {
      from: accounts[0]
    }).then((_makerFacilityPhonebook) => {
      makerFacilityPhonebook = _makerFacilityPhonebook
    })
  })
})

describe('makerFacility0', () => {

  let makerFacility
  let orderSplitEncodings0

  describe('deploy', () => {

    it('should create splitEncodings', () => {
      orderSplitEncodings0 = getSplitEncodings(params.order0)
    })

    it('should deploy', () => {
      return ultralightbeam.solDeploy(info.MakerFacility.code, info.MakerFacility.abi, [
        orderSplitEncodings0, makerFacilityPhonebook.address
      ], {
        from: accounts[0]
      }).then((_makerFacility) => {
        makerFacility = _makerFacility
      })
    })
    it('should have correct code', () => {
      return ultralightbeam.eth.getCode(makerFacility.address).should.eventually.amorphEqual(info.MakerFacility.runcode)
    })
    it('should have orderIndex of 1', () => {
      return makerFacility.fetch('orderIndex()', []).should.eventually.amorphEqual(params.one)
    })
    it('should have correct order0', () => {
      return makerFacility.fetch('orderSplitEncodings(uint256)', [params.zero]).then((orderSplitEncodings) => {
        orderSplitEncodings.forEach((orderSplitEncoding, index) => {
          orderSplitEncoding.should.amorphEqual(orderSplitEncodings0[index])
        })
      })
    })
    it('should have added to makerFacilityPhonebook', () => {
      return makerFacilityPhonebook.fetch('makerFacilityByOrigin(address)', [accounts[0].address]).should.eventually.amorphEqual(makerFacility.address)
    })
    it('should have added to makerFacilityPhonebook (entries)', () => {
      return makerFacilityPhonebook.fetch('entries(uint256)', [params.zero]).then((entry) => {
        entry.origin.should.amorphEqual(accounts[0].address)
        entry.makerFacility.should.amorphEqual(makerFacility.address)
      })
    })
    it('should add', () => {
      return makerFacility.broadcast('add(bytes32[6])', [orderSplitEncodings0], {
        from: accounts[0]
      }).getConfirmation()
    })
    it('should have orderIndex of 2', () => {
      return makerFacility.fetch('orderIndex()', []).should.eventually.amorphEqual(params.two)
    })
    it('should have correct order1', () => {
      return makerFacility.fetch('orderSplitEncodings(uint256)', [params.one]).then((orderSplitEncodings) => {
        orderSplitEncodings.forEach((orderSplitEncoding, index) => {
          orderSplitEncoding.should.amorphEqual(orderSplitEncodings0[index])
        })
      })
    })
  })

})

describe('makerFacility1', () => {

  let makerFacility
  let orderSplitEncodings0

  describe('deploy', () => {

    it('should create splitEncodings', () => {
      orderSplitEncodings0 = getSplitEncodings(params.order0)
    })

    it('should deploy', () => {
      return ultralightbeam.solDeploy(info.MakerFacility.code, info.MakerFacility.abi, [
        orderSplitEncodings0, makerFacilityPhonebook.address
      ], {
        from: accounts[1]
      }).then((_makerFacility) => {
        makerFacility = _makerFacility
      })
    })
    it('should have correct code', () => {
      return ultralightbeam.eth.getCode(makerFacility.address).should.eventually.amorphEqual(info.MakerFacility.runcode)
    })
    it('should have orderIndex of 1', () => {
      return makerFacility.fetch('orderIndex()', []).should.eventually.amorphEqual(params.one)
    })
    it('should have correct order0', () => {
      return makerFacility.fetch('orderSplitEncodings(uint256)', [params.zero]).then((orderSplitEncodings) => {
        orderSplitEncodings.forEach((orderSplitEncoding, index) => {
          orderSplitEncoding.should.amorphEqual(orderSplitEncodings0[index])
        })
      })
    })
    it('should have added to makerFacilityPhonebook', () => {
      return makerFacilityPhonebook.fetch('makerFacilityByOrigin(address)', [accounts[1].address]).should.eventually.amorphEqual(makerFacility.address)
    })
    it('should have added to makerFacilityPhonebook (entries)', () => {
      return makerFacilityPhonebook.fetch('entries(uint256)', [params.one]).then((entry) => {
        entry.origin.should.amorphEqual(accounts[1].address)
        entry.makerFacility.should.amorphEqual(makerFacility.address)
      })
    })
    it('should add', () => {
      return makerFacility.broadcast('add(bytes32[6])', [orderSplitEncodings0], {
        from: accounts[1]
      }).getConfirmation()
    })
    it('should have orderIndex of 2', () => {
      return makerFacility.fetch('orderIndex()', []).should.eventually.amorphEqual(params.two)
    })
    it('should have correct order1', () => {
      return makerFacility.fetch('orderSplitEncodings(uint256)', [params.one]).then((orderSplitEncodings) => {
        orderSplitEncodings.forEach((orderSplitEncoding, index) => {
          orderSplitEncoding.should.amorphEqual(orderSplitEncodings0[index])
        })
      })
    })
  })

})
