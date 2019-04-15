module.exports = class Element {
  constructor(tagName) {
    this.$ = document.createElement(tagName)
  }
  appendChild(child) {
    this.$.appendChild(child.$)
  }
  appendTo$($) {
    $.append(this.$)
  }
  setText(text) {
    this.$.innerText = text === undefined ? '' : text
  }
  setIsHidden(isHidden) {
    if (isHidden) {
      this.setStyle('display', 'none')
    } else {
      this.setStyle('display', null)
    }
  }
  setStyle(key, value) {
    this.$.style[key] = value
  }
  setStyles(styles) {
    Object.keys(styles).forEach((key) => {
      this.setStyle(key, styles[key])
    })
  }
  addClass(className) {
    this.$.classList.add(className)
  }
  destroy() {
    if (this.$.parentElement) {
      this.$.parentElement.removeChild(this.$)
    }
  }
}
