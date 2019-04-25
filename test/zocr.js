const ultralightbeam =  require('./ultralightbeam')
const zocrInfo = require('../')
const getSplitEncodings = require('../lib/getSplitEncodings')
const accounts = require('./accounts')
const zocrStub = require('./zocrStub')

describe('zocr', () => {

  let zocr

  after(() => {
    zocrStub.resolve(zocr)
  })

  describe('deploy', () => {
    it('should deploy', async () => {
      zocr = await ultralightbeam.solDeploy(zocrInfo.code, zocrInfo.abi, [], {
        from: accounts[0]
      })
    })
    it('should have correct code', () => {
      return ultralightbeam.eth.getCode(zocr.address).should.eventually.amorphEqual(zocrInfo.runcode)
    })
  })

})
