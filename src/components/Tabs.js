const Element = require('./Element')

module.exports = class Tabs extends Element{
  constructor(tabs) {
    super('ul')
    this.$.classList.add('nav')
    this.$.classList.add('nav-tabs')
    this.tabs = []
    if (tabs) {
      tabs.forEach(this.appendTab.bind(this))
    }
  }
  appendTab(tab) {
    this.tabs.push(tab)
    tab.emitter.on('change', (isSelected) => {
      if (isSelected === true) {
        this.onTabSelected(tab)
      }
    })
    this.appendChild(tab)
  }
  onTabSelected(tab) {
    this.tabs.forEach((_tab) => {
      if (_tab.isSelected && tab !== _tab) {
        _tab.setIsSelected(false)
      }
    })
  }
}
