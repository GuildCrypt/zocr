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

module.exports = class SufficientAllowanceRow extends Row {
  constructor(assetAddress, assetLabel, assetAmount) {
    super()

    this.assetAddress = assetAddress
    this.assetLabel = assetLabel
    this.assetAmount = assetAmount

    this.emitter = new Emitter

    this.status = new Alert('info')

    this.approveErc20ProxyAddressButton = new Button('primary', 'Approve 0x')
    this.approveErc20ProxyAddressButton.setIsHidden(true)
    this.approveErc20ProxyAddressButton.$.onclick = this.approveErc20ProxyAddress.bind(this)

    const leftCell = new Cell('0x Approval')
    const rightCell = new Cell

    rightCell.appendChild(this.status)
    rightCell.appendChild(this.approveErc20ProxyAddressButton)
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
  async fetchAllowanceBn() {
    const userAddress = await fetchUserAddress()
    const zocrProviderClient = await fetchZocrProviderClient()
    return new Promise((resolve, reject) => {
      this.getWebAsset().allowance(
        userAddress.to(amorphHex.prefixed),
        zocrProviderClient.erc20ProxyAddress.to(amorphHex.prefixed),
        (error, allowanceBn) => {
          if(error) {
            reject(error)
          } else {
            resolve(allowanceBn)
          }
        }
      )
    })
  }
  async web3AssetApproveZeroExExchangeAddress() {
    const zocrProviderClient = await fetchZocrProviderClient()
    return new Promise((resolve, reject) => {
      this.getWebAsset().approve(
        zocrProviderClient.erc20ProxyAddress.to(amorphHex.prefixed),
        maxUint256.to(amorphHex.prefixed),
        (error, allowanceBn) => {
          if(error) {
            reject(error)
          } else {
            resolve(allowanceBn)
          }
        }
      )
    })
  }
  async updateStatus() {
    this.setStatus('info', `Checking to see if you\'ve approved 0x to exchange your ${this.assetLabel}..`)
    const allowanceBn = await this.fetchAllowanceBn()
    if (allowanceBn.lt(this.assetAmount.to(amorphBignumber.unsigned))) {
      this.isValid = false
      this.setStatus('danger', `You need to approve 0x to exchange your ${this.assetLabel}`)
      this.approveErc20ProxyAddressButton.setIsHidden(false)
    } else {
      this.isValid = true
      this.setStatus('success', 'You\'ve approved the 0x Exchange')
    }
    this.emitter.emit('change', this.isValid)
  }
  async approveErc20ProxyAddress() {
    this.setStatus('info', 'Approving 0x Exchange. Please follow the instructions on your Ethereum wallet.')
    this.approveErc20ProxyAddressButton.setIsHidden(true)

    try {
      const transactionHashHexPrefixed = await this.web3AssetApproveZeroExExchangeAddress()
      this.setStatus('info', 'Waiting for confirmation...')
      const ultralightbeam = await fetchUltralightbeam()
      await ultralightbeam.waitForConfirmation(
        Amorph.from(amorphHex.prefixed, transactionHashHexPrefixed)
      )
      this.updateStatus()
    } catch(error) {
      this.setStatus('danger', error)
      this.approveErc20ProxyAddressButton.setIsHidden(false)
      return
    }
  }
}
