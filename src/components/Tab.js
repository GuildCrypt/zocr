const Element = require('./Element')
const Emitter = require('events')

module.exports = class Tab extends Element{
  constructor(text, controlee) {
    super('li')
    this.controlee = controlee
    this.addClass('nav-item')
    this.emitter = new Emitter
    this.isSelected = false
    this.link = new Element('a')
    this.link.addClass('nav-link')
    this.link.$.href = document.location.hash
    this.link.setText(text)
    this.appendChild(this.link)
    this.$.onclick = this.onClick.bind(this)
    this.setIsSelected(false)
  }
  setIsSelected(isSelected) {
    if (isSelected) {
      this.controlee.setIsHidden(false)
      this.link.addClass('active')
    } else {
      this.controlee.setIsHidden(true)
      this.link.$.classList.remove('active')
    }
    if (isSelected !== this.isSelected) {
      this.emitter.emit('change', isSelected)
    }
    this.isSelected = isSelected
  }

  onClick() {
    this.setIsSelected(true)
  }
}
