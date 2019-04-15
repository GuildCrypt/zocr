const Element = require('./Element')

module.exports = class Tooltip extends Element {
  constructor(text) {
    super('div')
    this.setText('i')
    this.setStyles({
      backgroundColor: 'black',
      color: '#fff',
      borderRadius: '6px',
      display: 'inline-block',
      width: '11px',
      textAlign: 'center',
      fontSize: '8px',
      verticalAlign: 'middle',
      marginTop: '-10px',
      position: 'relative'
    })

    this.tooltip = new Element('div')
    this.tooltip.setText(text)
    this.tooltip.setStyles({
      backgroundColor: 'black',
      color: '#fff',
      borderRadius: '6px',
      display: 'inline-block',
      textAlign: 'center',
      position: 'absolute',
      width: 200,
      top: -30,
      left: -100,
      fontSize: 12,
      padding: 4
    })
    this.tooltip.setIsHidden(true)

    this.$.onmouseenter = () => {
      this.tooltip.setIsHidden(false)
    }

    this.$.onmouseout = () => {
      this.tooltip.setIsHidden(true)
    }

    this.appendChild(this.tooltip)
  }

}
