const getOrderKey = require('../lib/getOrderKey')
const Amorph = require('amorph')
const amorphHex = require('amorph-hex')

describe('orderKey', () => {

  const pairId = Amorph.from(amorphHex.unprefixed, 'ffffffff')

  let orderKey
  it('should get order key 0xffffffff 0x00000001', () => {
    const orderIndex = Amorph.from(amorphHex.unprefixed, '00000001')
    orderKey = getOrderKey(pairId, orderIndex)
  })

  it('order key 0xffffffff 0x01 should match', () => {
    const orderIndex = Amorph.from(amorphHex.unprefixed, '01')
    getOrderKey(pairId, orderIndex).should.amorphEqual(orderKey)
  })
})
