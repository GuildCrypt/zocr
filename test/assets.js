const ultralightbeam = require('./ultralightbeam')
const accounts = require('./accounts')
const assetInfo = require('./assetInfo')
const assetsStub = require('./assetsStub')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const generateOrders = require('./generateOrders')

const assetSymbols = ['WETH', 'ZRX', 'USDC', 'DAI']
const totalSupply = Amorph.from(amorphNumber.unsigned, 100)
const assets = {}

describe('assets', () => {
  after(async () => {
    assetsStub.resolve(assets)
  })
  assetSymbols.forEach((assetSymbol) => {
    describe(assetSymbol, () => {
      let asset
      it('should deploy', async () => {
        asset = await ultralightbeam.solDeploy(assetInfo.code, assetInfo.abi, [totalSupply], {
          from: accounts[0]
        })
        assets[assetSymbol] = asset
      })
      it('should have correct totalSupply', () => {
        return asset.fetch('totalSupply()', []).should.eventually.amorphEqual(totalSupply)
      })
      it('account[0] should have correct balance', () => {
        return asset.fetch('balanceOf(address)', [accounts[0].address]).should.eventually.amorphEqual(totalSupply)
      })
    })
  })
})
