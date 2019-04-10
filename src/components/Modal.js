const Element = require('./Element')
const Header = require('./Header')

module.exports = class Modal extends Element {
  constructor(size) {
    super('div')
    this.addClass('modal')
    this.$.style.backgroundColor = 'rgba(0, 0, 0, .5)'
    this.$.role = 'dialog'
    this.$.tabindex = '-1'

    const dialog = new Element('div')
    dialog.addClass('modal-dialog')
    dialog.addClass(`modal-${size}`)

    const content = new Element('div')
    content.addClass('modal-content')

    const header = new Element('div')
    header.addClass('modal-header')

    const title = new Header(5)
    title.addClass('modal-title')
    this.title = title

    const close = new Element('button')
    close.$.type = 'button'
    close.addClass('close')
    close.$.onclick = this.close.bind(this)
    this.close = close

    const closeSpan = new Element('span')
    closeSpan.$.ariaHidden = 'true'
    closeSpan.$.innerHTML = '&times'

    const body = new Element('div')
    body.addClass('modal-body')
    this.body = body

    const footer = new Element('div')
    footer.addClass('modal-footer')
    this.footer = footer

    close.appendChild(closeSpan)

    header.appendChild(title)
    header.appendChild(close)

    content.appendChild(header)
    content.appendChild(body)
    content.appendChild(footer)

    dialog.appendChild(content)

    this.appendChild(dialog)
    this.open()
  }

  open() {
    this.$.style.display = 'block'
  }
  close() {
    this.setIsHidden(true)
  }
}
