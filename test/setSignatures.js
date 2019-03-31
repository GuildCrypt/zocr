const accounts = require('./accounts')
const orderParams = require('./orderParams')
const ordersStub = require('./ordersStub')
const ultralightbeam = require('./ultralightbeam')
const amorphHex = require('amorph-hex')
const amorphBignumber = require('amorph-bignumber')
const Amorph = require('amorph')

describe('set signatures', () => {
  let orders
  before(async () => {
    orders = await ordersStub.promise
  })
  orderParams.forEach((orderParam, index) => {
    it(`order #${index}`, () => {
      console.log(orders[index])
      return orders[index].setSignature(ultralightbeam.provider, accounts[0].address)
    })
  })
})
