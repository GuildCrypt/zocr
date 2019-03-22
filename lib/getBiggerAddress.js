module.exports = function getBiggerAddress(a, b) {
  for (let i = 0; i < 20; i++) {
    const diff = a.uint8Array[i] - b.uint8Array[i]
    if (diff === 0) {
      continue;
    }
    if (diff > 0) {
      return a
    }
    if (diff < 0) {
      return b
    }
  }
  throw new Error('Addresses are the same')
}
