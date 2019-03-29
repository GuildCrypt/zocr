const LocalStorageDb = require('../lib/LocalStorageDb')
const Amorph = require('amorph')
const PromiseStub = require('bluebird-stub')

module.exports = new PromiseStub

describe('localStorageDb', () => {
  let localStorageDb
  const key = new Amorph(new Uint8Array([0, 1, 2, 3]))
  const value = new Amorph(new Uint8Array([4, 5, 6]))

  after(() => {
    module.exports.resolve(localStorageDb)
  })

  it('should create', () => {
    localStorageDb = new LocalStorageDb('./db')
  })
  it('should clear', () => {
    return localStorageDb.clear()
  })
  it('should save', () => {
    return localStorageDb.save(key, value)
  })
  it('should load', async () => {
    const _value = await localStorageDb.load(key)
    value.should.amorphEqual(_value)
  })
})
