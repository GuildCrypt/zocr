const Element = require('./Element')
const Emitter = require('events')

module.exports = class Tab extends Element{
  constructor(text, controlee) {
    super('li')
    this.controlee = controlee
    this.$.classList.add('nav-item')
    this.emitter = new Emitter
    this.isSelected = false
    this.link = new Element('a')
    this.link.$.classList.add('nav-link')
    this.link.$.href = '#'
    this.link.$.innerText = text
    this.appendChild(this.link)
    this.$.onclick = this.onClick.bind(this)
    this.setIsSelected(false)
  }
  setIsSelected(isSelected) {
    if (isSelected) {
      this.controlee.$.style.display = null
      this.link.$.classList.add('active')
    } else {
      this.controlee.$.style.display = 'none'
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
