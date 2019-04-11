const Amorph = require('amorph')
const amorphHex = require('amorph-hex')
const Main = require('./components/Main')

const daiAddress = Amorph.from(amorphHex.unprefixed, 'e84a3d3c9ee3a8e44be4148982c3b1594b59f5a7')
const puppyAddress = Amorph.from(amorphHex.unprefixed, '83ebd2b0e093920242cd452d5f781a86ffc8b5a8')

const main = new Main('Puppy Oath Pieces', 'DAI', puppyAddress, daiAddress)
main.appendTo$(document.body)
