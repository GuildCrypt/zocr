module.exports = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "pairId",
        "type": "bytes4"
      },
      {
        "name": "_orderIndex",
        "type": "uint32"
      }
    ],
    "name": "orderSplitEncodings",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[5]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "base",
        "type": "bytes20"
      },
      {
        "name": "quote",
        "type": "bytes20"
      }
    ],
    "name": "computePairId",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "pairId",
        "type": "bytes4"
      },
      {
        "name": "orderSplitEncodings",
        "type": "bytes32[5]"
      }
    ],
    "name": "add",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "name": "ordersCount",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes4"
      },
      {
        "name": "",
        "type": "uint32"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "pairId",
        "type": "bytes4"
      },
      {
        "indexed": false,
        "name": "orderSplitEncodings",
        "type": "bytes32[5]"
      }
    ],
    "name": "Order",
    "type": "event"
  }
]