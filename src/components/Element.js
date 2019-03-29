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
}
