const Cell = require('./Cell')
const Alert = require('./Alert')
const SolWrapper = require('ultralightbeam/lib/SolWrapper')
const ultralightbeam = require('../ultralightbeam')
const erc20Abi = require('../erc20Abi')
const Amorph = require('amorph')
const amorphHex = require('amorph-hex')
const amorphNumber = require('amorph-number')
const Button = require('./Button')
const web3WaitForConfirmation = require('../web3WaitForConfirmation')
const userAddress = require('../userAddress')

const maxUint256 = new Amorph(
  (new Uint8Array(32)).fill(255)
)

module.exports = class ZeroExApprovalCell extends Cell {
  constructor(zeroExExchangeAddress, makerAssetAddress) {
    super()
    this.zeroExExchangeAddress = zeroExExchangeAddress
    this.web3MakerAsset = web3.eth.contract(erc20Abi).at(makerAssetAddress.to(amorphHex.prefixed))

    this.status = new Alert('info')

    this.approveZeroExExchangeAddressButton = new Button('primary', 'Approve 0x Exchange')
    this.approveZeroExExchangeAddressButton.$.style.display = 'none'
    this.approveZeroExExchangeAddressButton.$.onclick = this.approveZeroExExchangeAddress.bind(this)

    this.appendChild(this.status)
    this.appendChild(this.approveZeroExExchangeAddressButton)
    this.updateStatus()
  }
  setStatus(type, text) {
    this.status.setType(type)
    this.status.$.innerText = text
  }
  fetchAllowanceBn() {
    return new Promise((resolve, reject) => {
      this.web3MakerAsset.allowance(
        userAddress.to(amorphHex.prefixed),
        this.zeroExExchangeAddress.to(amorphHex.prefixed),
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
  web3MakerAssetApproveZeroExExchangeAddress() {
    return new Promise((resolve, reject) => {
      this.web3MakerAsset.approve(
        this.zeroExExchangeAddress.to(amorphHex.prefixed),
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
    this.setStatus('info', 'Checking to see if you\'ve approved the 0x Exchange..')
    const allowanceBn = await this.fetchAllowanceBn()
    console.log(allowanceBn)
    if (allowanceBn.toNumber() === 0) {
      this.setStatus('danger', 'You need to approve the 0x Exchange to exchange your tokens')
      this.approveZeroExExchangeAddressButton.$.style.display = null
    } else {
      this.setStatus('success', 'You\'ve approved the 0x Exchange')
    }
  }
  async approveZeroExExchangeAddress() {
    this.setStatus('info', 'Approving 0x Exchange. Please follow the instructions on your Ethereum wallet.')
    this.approveZeroExExchangeAddressButton.$.style.display = 'none'

    try {
      const transactionHashHexPrefixed = await this.web3MakerAssetApproveZeroExExchangeAddress()
      this.setStatus('info', 'Waiting for confirmation...')
      await web3WaitForConfirmation(transactionHashHexPrefixed)
      this.updateStatus()
    } catch(error) {
      this.setStatus('danger', error)
      this.approveZeroExExchangeAddressButton.$.style.display = null
      return
    }
  }
}
