const accounts = require('./accounts')
const orders = require('./orders')
const ultralightbeam = require('./ultralightbeam')
const amorphHex = require('amorph-hex')
const amorphBignumber = require('amorph-bignumber')
const Amorph = require('amorph')

describe('set signatures', () => {
  orders.forEach((order, index) => {
    it(`order #${index}`, () => {
      return order.setSignature(ultralightbeam.provider, accounts[0].address)
    })
  })
})
