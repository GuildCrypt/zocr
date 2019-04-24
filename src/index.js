const Amorph = require('amorph')
const amorphHex = require('amorph-hex')
const Zocrscope = require('./components/Zocrscope')

const params = document.location.hash.substr(1).split('/')

const baseAssetLabel = decodeURI(params[0])
const quoteAssetLabel = decodeURI(params[1])
const baseAssetAddressHexUnprefixed = params[2]
const quoteAssetAddressHexUnprefixed = params[3]

document.title = `Trade ${baseAssetLabel}`

const baseAssetAddress = Amorph.from(amorphHex.unprefixed, baseAssetAddressHexUnprefixed)
const quoteAssetAddress = Amorph.from(amorphHex.unprefixed, quoteAssetAddressHexUnprefixed)

const main = new Zocrscope(baseAssetLabel, quoteAssetLabel, baseAssetAddress, quoteAssetAddress)
main.appendTo$(document.body)
