const Modal = require('./Modal')
const BaseAssetAmountPercentInputGroup = require('./BaseAssetAmountPercentInputGroup')
const ValuationInputGroup = require('./ValuationInputGroup')
const e18Bignumber = require('../e18Bignumber')
const Button = require('./Button')
const Amorph = require('amorph')
const amorphNumber = require('amorph-number')
const amorphBignumber = require('../../lib/amorphBignumber')
const Alert = require('./Alert')
const FillSummary = require('./FillSummary')
const Element = require('./Element')
const ButtonGroup = require('./ButtonGroup')
const fetchUltralightbeam = require('../fetchUltralightbeam')

module.exports = class CancelModal extends Modal {
  constructor(main, order) {
    super('lg')

    this.main = main
    this.order = order

    this.title.setText('Cancel Order')

    this.status = new Alert('info')
    this.status.setIsHidden(true)

    this.filler = new Element('div')
    this.filler.setText('Once you cancel your order, no one will be able to fill it.')

    this.buttonGroup = new ButtonGroup

    this.cancelButton = new Button('primary', 'Cancel Order')
    this.cancelButton.$.onclick = this.cancelOrder.bind(this)

    this.footer.destroy()

    this.buttonGroup.appendChild(this.cancelButton)

    this.body.appendChild(this.filler)
    this.body.appendChild(this.status)
    this.body.appendChild(this.buttonGroup)

  }


  async cancelOrder() {
    try {
      this.buttonGroup.setIsHidden(true)
      this.setStatus('info', 'Cancelling order. Pleas follow the instructions on your Ethereum Wallet.')
      const transactionHash = await this.order.cancel()
      this.setStatus('info', 'Order cancellation broadcasted. Waiting for confirmation...')
      const ultralightbeam = await fetchUltralightbeam()
      await ultralightbeam.waitForConfirmation(transactionHash)
      this.setStatus('info', 'Order cancellation confirmed!')
    } catch (error) {
      this.setStatus('danger', error)
      this.buttonGroup.setIsHidden(false)
    }
  }


  setStatus(type, text) {
    this.status.setType(type)
    this.status.setText(text)
    this.status.setIsHidden(false)
  }




}
