const Amorph = require('amorph')
const amorphHex = require('amorph-hex')

// addresses from 0x_ganache_snapshot
// https://github.com/0xProject/0x-monorepo/blob/development/packages/contract-addresses/src/index.ts#L81-L94

const hexPrefixedContractAddresses = {
  erc20Proxy: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
  erc721Proxy: '0x1d7022f5b17d2f8b695918fb48fa1089c9f85401',
  zrxToken: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
  etherToken: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
  exchange: '0x48bacb9266a570d521063ef5dd96e61686dbe788',
  assetProxyOwner: '0x04b5dadd2c0d6a261bfafbc964e0cac48585def3',
  forwarder: '0x6000eca38b8b5bba64986182fe2a69c57f6b5414',
  orderValidator: '0x32eecaf51dfea9618e9bc94e9fbfddb1bbdcba15',
  dutchAuction: '0x7e3f4e1deb8d3a05d9d2da87d9521268d0ec3239',
  coordinatorRegistry: '0xaa86dda78e9434aca114b6676fc742a18d15a1cc',
  coordinator: '0x4d3d5c850dd5bd9d6f4adda3dd039a3c8054ca29',
}

const contractAddresses = {}

Object.keys(hexPrefixedContractAddresses).forEach((key) => {
  const hexPrefixedContractAddress = hexPrefixedContractAddresses[key]
  contractAddresses[key] = Amorph.from(amorphHex.prefixed, hexPrefixedContractAddress)
})

module.exports = contractAddresses
