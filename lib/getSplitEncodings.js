const getEncoding = require('./getEncoding')
const Amorph = require('amorph')

module.exports = function getSplitEncodings(pojo) {
  const encoding = getEncoding(pojo)
  const splitEncodings = []
  for (let i = 0; i < 5; i++) {
    const begin = i * 32;
    const end = begin + 32
    splitEncodings.push(new Amorph(encoding.uint8Array.slice(begin, end)))
  }
  return splitEncodings
}
