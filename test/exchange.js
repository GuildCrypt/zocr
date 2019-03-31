const ultralightbeam = require('./ultralightbeam')
const accounts = require('./accounts')
const amorphHex = require('amorph-hex')
const Amorph = require('amorph')
const exchangeInfo = require('../lib/exchangeInfo')
const exchangeStub = require('./exchangeStub')

describe('exchange', () => {
  let exchange
  const zrxAssetData = Amorph.from(
    amorphHex.prefixed,
    '0xf47261b00000000000000000000000000000000000000000000000000000000000000000'
  )
  after(() => {
    exchangeStub.resolve(exchange)
  })
  it('should deploy', async () => {
    exchange = await ultralightbeam.solDeploy(exchangeInfo.code, exchangeInfo.abi, [zrxAssetData], {
      from: accounts[0]
    })
  })
})
