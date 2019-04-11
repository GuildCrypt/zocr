const Cell = require('./Cell')
const Alert = require('./Alert')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const fetchUltralightbeam =  require('../fetchUltralightbeam')
const erc20Abi = require('../erc20Abi')
const Amorph = require('amorph')
const amorphHex = require('amorph-hex')
const amorphNumber = require('amorph-number')
const Button = require('./Button')
const fetchZocrProviderClient = require('../fetchZocrProviderClient')
const fetchUserAddress = require('../fetchUserAddress')
const Emitter = require('events')
const Row = require('./Row')
const amorphBignumber = require('../../lib/amorphBignumber')

const maxUint256  = new Amorph((new Uint8Array(32)).fill(255))

module.exports = class SufficientBalanceRow extends Row {
  constructor(assetAddress, assetLabel, assetAmount) {
    super()

    this.assetAddress = assetAddress
    this.assetLabel = assetLabel
    this.assetAmount = assetAmount

    this.emitter = new Emitter

    this.status = new Alert('info')

    const leftCell = new Cell(`${assetLabel} Balance`)
    const rightCell = new Cell

    rightCell.appendChild(this.status)
    this.updateStatus()

    this.appendChild(leftCell)
    this.appendChild(rightCell)

  }
  setStatus(type, text) {
    this.status.setType(type)
    this.status.setText(text)
  }
  getWebAsset() {
    if (this.web3Asset) {
      return this.web3Asset
    }
    this.web3Asset = web3.eth.contract(erc20Abi).at(this.assetAddress.to(amorphHex.prefixed))
    return this.web3Asset
  }
  async fetchBalanceBn() {
    const userAddress = await fetchUserAddress()
    return new Promise((resolve, reject) => {
      this.getWebAsset().balanceOf(
        userAddress.to(amorphHex.prefixed),
        (error, balanceBn) => {
          if(error) {
            reject(error)
          } else {
            resolve(balanceBn)
          }
        }
      )
    })
  }
  async updateStatus() {
    this.setStatus('info', `Checking to see if you have enough ${this.assetLabel}..`)
    const balanceBn = await this.fetchBalanceBn()
    if (balanceBn.lt(this.assetAmount.to(amorphBignumber.unsigned))) {
      this.isValid = false
      this.setStatus('danger', `You don't have enough ${this.assetLabel}`)
    } else {
      this.isValid = true
      this.setStatus('success', `You have enough ${this.assetLabel}`)
    }
    this.emitter.emit('change', this.isValid)
  }
}
