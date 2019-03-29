const amorphBase64 = require('amorph-base64')
const Amorph = require('amorph')

module.exports = class LocalStorageDb {
  constructor(location) {
    if (typeof localStorage !== "undefined") {
      this.localStorage = localStorage
    } else {
      this.localStorage = new require('node-localstorage').LocalStorage(location)
    }
  }
  async save(key, value) {
    this.localStorage.setItem(key.to(amorphBase64), value.to(amorphBase64))
  }
  async load(key) {
    const valueBase64 = this.localStorage.getItem(key.to(amorphBase64))
    if (valueBase64 === null) {
      return null
    }
    return Amorph.from(amorphBase64, valueBase64)
  }
  async clear() {
    this.localStorage.clear()
  }
}
