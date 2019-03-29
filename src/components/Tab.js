const Element = require('./Element')
const Emitter = require('events')

module.exports = class Tab extends Element{
  constructor(text) {
    super('li')
    this.$.classList.add('nav-item')
    this.isSelected = false
    this.emitter = new Emitter

    this.link = new Element('a')
    this.link.$.classList.add('nav-link')
    this.link.$.href = '#'
    this.link.$.innerText = text
    this.appendChild(this.link)
    this.$.onclick = this.onClick.bind(this)
  }
  setIsSelected(isSelected) {
    this.isSelected = isSelected
    if (isSelected) {
      this.link.$.classList.add('active')
    } else {
      this.link.$.classList.remove('active')
    }
    this.emitter.emit('change', isSelected)
  }

  onClick() {
    this.setIsSelected(true)
  }
}
