const Element = require('./Element')

module.exports = class Tabs extends Element{
  constructor(tabs) {
    super('ul')
    this.addClass('nav')
    this.addClass('nav-tabs')
    this.$.style.marginBottom = 10
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
