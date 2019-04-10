module.exports = {
  "contracts": {
    "ERC20Proxy.sol:ERC20Proxy": {
      "assembly": {
        ".code": [
          {
            "begin": 5005,
            "end": 13537,
            "name": "PUSH",
            "value": "80"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "PUSH",
            "value": "40"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "MSTORE"
          },
          {
            "begin": 804,
            "end": 809,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "DUP1"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SLOAD"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "A0"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "2"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "EXP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "SUB"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "NOT"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "AND"
          },
          {
            "begin": 812,
            "end": 822,
            "name": "CALLER"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "OR"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SWAP1"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SSTORE"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "PUSH #[$]",
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "DUP1"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "PUSH [$]",
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "CODECOPY"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 5005,
            "end": 13537,
            "name": "RETURN"
          }
        ],
        ".data": {
          "0": {
            ".auxdata": "a165627a7a72305820df9f98e4c7bf7fa5753e4aa3fe7f47495f4a2545f2f95db24c4bd030f98bed360029",
            ".code": [
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "80"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "MSTORE"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "CALLDATASIZE"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "LT"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "FFFFFFFF"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "100000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DIV"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "AND"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "42F1181E"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "494503D4"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "3"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "70712939"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "4"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "8DA5CB5B"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "5"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "9AD26744"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "6"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "AE25532E"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "7"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "B9181611"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "8"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "D39DE6E9"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "9"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "F2FDE38B"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "EQ"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "10"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "tag",
                "value": "1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "11"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "11"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "POP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 5386,
                "end": 5387,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 5373,
                "end": 5388,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 5369,
                "end": 5457,
                "name": "AND"
              },
              {
                "begin": 5852,
                "end": 5918,
                "name": "PUSH",
                "value": "A85E59E400000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 5842,
                "end": 5850,
                "name": "DUP2"
              },
              {
                "begin": 5839,
                "end": 5919,
                "name": "EQ"
              },
              {
                "begin": 5836,
                "end": 5838,
                "name": "ISZERO"
              },
              {
                "begin": 5836,
                "end": 5838,
                "name": "PUSH [tag]",
                "value": "14"
              },
              {
                "begin": 5836,
                "end": 5838,
                "name": "JUMPI"
              },
              {
                "begin": 6148,
                "end": 6150,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 6142,
                "end": 6151,
                "name": "DUP1"
              },
              {
                "begin": 6142,
                "end": 6151,
                "name": "MLOAD"
              },
              {
                "begin": 6186,
                "end": 6192,
                "name": "CALLER"
              },
              {
                "begin": 6168,
                "end": 6238,
                "name": "DUP2"
              },
              {
                "begin": 6168,
                "end": 6238,
                "name": "MSTORE"
              },
              {
                "begin": 6278,
                "end": 6293,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 6273,
                "end": 6275,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 6262,
                "end": 6276,
                "name": "DUP3"
              },
              {
                "begin": 6262,
                "end": 6276,
                "name": "ADD"
              },
              {
                "begin": 6255,
                "end": 6294,
                "name": "MSTORE"
              },
              {
                "begin": 6389,
                "end": 6409,
                "name": "SWAP1"
              },
              {
                "begin": 6389,
                "end": 6409,
                "name": "DUP2"
              },
              {
                "begin": 6389,
                "end": 6409,
                "name": "KECCAK256"
              },
              {
                "begin": 6383,
                "end": 6410,
                "name": "SLOAD"
              },
              {
                "begin": 6376,
                "end": 6411,
                "name": "ISZERO"
              },
              {
                "begin": 6373,
                "end": 6375,
                "name": "ISZERO"
              },
              {
                "begin": 6373,
                "end": 6375,
                "name": "PUSH [tag]",
                "value": "15"
              },
              {
                "begin": 6373,
                "end": 6375,
                "name": "JUMPI"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 6509,
                "end": 6510,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 6502,
                "end": 6579,
                "name": "MSTORE"
              },
              {
                "begin": 6611,
                "end": 6677,
                "name": "PUSH",
                "value": "2000000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 6607,
                "end": 6609,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 6600,
                "end": 6678,
                "name": "MSTORE"
              },
              {
                "begin": 6710,
                "end": 6776,
                "name": "PUSH",
                "value": "1553454E4445525F4E4F545F415554484F52495A454400000000000000"
              },
              {
                "begin": 6706,
                "end": 6708,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 6699,
                "end": 6777,
                "name": "MSTORE"
              },
              {
                "begin": 6809,
                "end": 6810,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 6805,
                "end": 6807,
                "name": "PUSH",
                "value": "60"
              },
              {
                "begin": 6798,
                "end": 6811,
                "name": "MSTORE"
              },
              {
                "begin": 6842,
                "end": 6845,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 6839,
                "end": 6840,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 6832,
                "end": 6846,
                "name": "REVERT"
              },
              {
                "begin": 6373,
                "end": 6375,
                "name": "tag",
                "value": "15"
              },
              {
                "begin": 6373,
                "end": 6375,
                "name": "JUMPDEST"
              },
              {
                "begin": 10804,
                "end": 10806,
                "name": "PUSH",
                "value": "28"
              },
              {
                "begin": 10800,
                "end": 10801,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 10787,
                "end": 10802,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 10783,
                "end": 10807,
                "name": "ADD"
              },
              {
                "begin": 10770,
                "end": 10808,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 11084,
                "end": 11150,
                "name": "PUSH",
                "value": "23B872DD00000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 11081,
                "end": 11082,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 11074,
                "end": 11151,
                "name": "MSTORE"
              },
              {
                "begin": 11373,
                "end": 11375,
                "name": "PUSH",
                "value": "60"
              },
              {
                "begin": 11369,
                "end": 11371,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 11366,
                "end": 11367,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 11353,
                "end": 11376,
                "name": "CALLDATACOPY"
              },
              {
                "begin": 11878,
                "end": 11880,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 11815,
                "end": 11816,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 11760,
                "end": 11763,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 11695,
                "end": 11696,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 11637,
                "end": 11638,
                "name": "DUP1"
              },
              {
                "begin": 11567,
                "end": 11572,
                "name": "DUP6"
              },
              {
                "begin": 11512,
                "end": 11515,
                "name": "GAS"
              },
              {
                "begin": 11486,
                "end": 11945,
                "name": "CALL"
              },
              {
                "begin": 12687,
                "end": 12688,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 12683,
                "end": 12684,
                "name": "DUP1"
              },
              {
                "begin": 12677,
                "end": 12685,
                "name": "MLOAD"
              },
              {
                "begin": 12674,
                "end": 12689,
                "name": "GT"
              },
              {
                "begin": 12645,
                "end": 12647,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 12629,
                "end": 12643,
                "name": "RETURNDATASIZE"
              },
              {
                "begin": 12626,
                "end": 12648,
                "name": "EQ"
              },
              {
                "begin": 12597,
                "end": 12711,
                "name": "AND"
              },
              {
                "begin": 12560,
                "end": 12574,
                "name": "RETURNDATASIZE"
              },
              {
                "begin": 12553,
                "end": 12575,
                "name": "ISZERO"
              },
              {
                "begin": 12529,
                "end": 12729,
                "name": "OR"
              },
              {
                "begin": 12520,
                "end": 12527,
                "name": "DUP2"
              },
              {
                "begin": 12516,
                "end": 12730,
                "name": "AND"
              },
              {
                "begin": 12505,
                "end": 12730,
                "name": "SWAP1"
              },
              {
                "begin": 12505,
                "end": 12730,
                "name": "POP"
              },
              {
                "begin": 12750,
                "end": 12757,
                "name": "DUP1"
              },
              {
                "begin": 12747,
                "end": 12749,
                "name": "ISZERO"
              },
              {
                "begin": 12747,
                "end": 12749,
                "name": "PUSH [tag]",
                "value": "16"
              },
              {
                "begin": 12747,
                "end": 12749,
                "name": "JUMPI"
              },
              {
                "begin": 12780,
                "end": 12792,
                "name": "STOP"
              },
              {
                "begin": 12747,
                "end": 12749,
                "name": "tag",
                "value": "16"
              },
              {
                "begin": 12747,
                "end": 12749,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 12893,
                "end": 12894,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 12886,
                "end": 12963,
                "name": "MSTORE"
              },
              {
                "begin": 12991,
                "end": 13057,
                "name": "PUSH",
                "value": "2000000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 12987,
                "end": 12989,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 12980,
                "end": 13058,
                "name": "MSTORE"
              },
              {
                "begin": 13086,
                "end": 13152,
                "name": "PUSH",
                "value": "F5452414E534645525F4641494C454400000000000000000000000000"
              },
              {
                "begin": 13082,
                "end": 13084,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 13075,
                "end": 13153,
                "name": "MSTORE"
              },
              {
                "begin": 13181,
                "end": 13182,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 13177,
                "end": 13179,
                "name": "PUSH",
                "value": "60"
              },
              {
                "begin": 13170,
                "end": 13183,
                "name": "MSTORE"
              },
              {
                "begin": 13210,
                "end": 13213,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 13207,
                "end": 13208,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 13200,
                "end": 13214,
                "name": "REVERT"
              },
              {
                "begin": 5836,
                "end": 5838,
                "name": "tag",
                "value": "14"
              },
              {
                "begin": 5836,
                "end": 5838,
                "name": "JUMPDEST"
              },
              {
                "begin": 13306,
                "end": 13307,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 13303,
                "end": 13304,
                "name": "DUP1"
              },
              {
                "begin": 13296,
                "end": 13308,
                "name": "REVERT"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "tag",
                "value": "2"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMPDEST"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "17"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "17"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "PUSH [tag]",
                "value": "18"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "AND"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "PUSH [tag]",
                "value": "19"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "tag",
                "value": "18"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMPDEST"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "STOP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "20"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "20"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH [tag]",
                "value": "21"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH [tag]",
                "value": "22"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "21"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "AND"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MSTORE"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MLOAD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SUB"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "ADD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "RETURN"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "tag",
                "value": "4"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMPDEST"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "23"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "23"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "PUSH [tag]",
                "value": "18"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "AND"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "PUSH [tag]",
                "value": "25"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "5"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "26"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "26"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "POP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH [tag]",
                "value": "21"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH [tag]",
                "value": "28"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "tag",
                "value": "6"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMPDEST"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "29"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "29"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH [tag]",
                "value": "18"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "AND"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH [tag]",
                "value": "31"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMP"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "tag",
                "value": "7"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "JUMPDEST"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "32"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "32"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "POP"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "PUSH [tag]",
                "value": "33"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "PUSH [tag]",
                "value": "34"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "JUMP"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "tag",
                "value": "33"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "JUMPDEST"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "DUP1"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SWAP1"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SWAP3"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "AND"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "DUP3"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "MSTORE"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "MLOAD"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SWAP1"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "DUP2"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SWAP1"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SUB"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "ADD"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SWAP1"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "RETURN"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "tag",
                "value": "8"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMPDEST"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "35"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "35"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH [tag]",
                "value": "36"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "AND"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH [tag]",
                "value": "37"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMP"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "tag",
                "value": "36"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMPDEST"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MLOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "ISZERO"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "ISZERO"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP3"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MSTORE"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MLOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SUB"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "ADD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "RETURN"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "9"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "38"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "38"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH [tag]",
                "value": "39"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH [tag]",
                "value": "40"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "39"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MSTORE"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MSTORE"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP6"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MUL"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "tag",
                "value": "41"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMPDEST"
              },
              {
                "begin": 33,
                "end": 36,
                "name": "DUP4"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "DUP2"
              },
              {
                "begin": 27,
                "end": 37,
                "name": "LT"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "ISZERO"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "PUSH [tag]",
                "value": "42"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMPI"
              },
              {
                "begin": 90,
                "end": 101,
                "name": "DUP2"
              },
              {
                "begin": 90,
                "end": 101,
                "name": "DUP2"
              },
              {
                "begin": 90,
                "end": 101,
                "name": "ADD"
              },
              {
                "begin": 84,
                "end": 102,
                "name": "MLOAD"
              },
              {
                "begin": 71,
                "end": 82,
                "name": "DUP4"
              },
              {
                "begin": 71,
                "end": 82,
                "name": "DUP3"
              },
              {
                "begin": 71,
                "end": 82,
                "name": "ADD"
              },
              {
                "begin": 64,
                "end": 103,
                "name": "MSTORE"
              },
              {
                "begin": 52,
                "end": 54,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 45,
                "end": 55,
                "name": "ADD"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "PUSH [tag]",
                "value": "41"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMP"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "tag",
                "value": "42"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMPDEST"
              },
              {
                "begin": 12,
                "end": 26,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SUB"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "RETURN"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "10"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "44"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "44"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH [tag]",
                "value": "18"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "AND"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH [tag]",
                "value": "46"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "tag",
                "value": "19"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "48"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "48"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "DUP2"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "AND"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "SWAP1"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "DUP2"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "MSTORE"
              },
              {
                "begin": 3086,
                "end": 3096,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "MSTORE"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "SWAP1"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "KECCAK256"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "SLOAD"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "AND"
              },
              {
                "begin": 3085,
                "end": 3104,
                "name": "ISZERO"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH [tag]",
                "value": "50"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "JUMPI"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP2"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP3"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "19"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP3"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "5441524745545F414C52454144595F415554484F52495A454400000000000000"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP3"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MLOAD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP2"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SUB"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "REVERT"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "tag",
                "value": "50"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "AND"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "MSTORE"
              },
              {
                "begin": 3187,
                "end": 3191,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "SWAP1"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "MSTORE"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP1"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP4"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "KECCAK256"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "DUP1"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "AND"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "DUP4"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "OR"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "SWAP1"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "SSTORE"
              },
              {
                "begin": 3201,
                "end": 3212,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 27,
                "end": 37,
                "name": "DUP1"
              },
              {
                "begin": 27,
                "end": 37,
                "name": "SLOAD"
              },
              {
                "begin": 23,
                "end": 41,
                "name": "SWAP3"
              },
              {
                "begin": 23,
                "end": 41,
                "name": "DUP4"
              },
              {
                "begin": 23,
                "end": 41,
                "name": "ADD"
              },
              {
                "begin": 45,
                "end": 68,
                "name": "DUP2"
              },
              {
                "begin": 45,
                "end": 68,
                "name": "SSTORE"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "DUP4"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "MSTORE"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "PUSH",
                "value": "405787FA12A823E0F2B7631CC41B3BA8828B3321CA811111FA75CD3AA3BB5ACE"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SWAP1"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SWAP2"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "ADD"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "DUP1"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "AND"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "DUP5"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "OR"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SWAP1"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SSTORE"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "MLOAD"
              },
              {
                "begin": 3271,
                "end": 3281,
                "name": "CALLER"
              },
              {
                "begin": 3271,
                "end": 3281,
                "name": "SWAP3"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "SWAP2"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "PUSH",
                "value": "3147867C59D17E8FA9D522465651D44AAE0A9E38F902F3475B97E58072F0ED4C"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "SWAP2"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "LOG3"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "POP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "22"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SLOAD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "LT"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH [tag]",
                "value": "52"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPI"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "INVALID"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "52"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MSTORE"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "KECCAK256"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "ADD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "AND"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "tag",
                "value": "25"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMPDEST"
              },
              {
                "begin": 3638,
                "end": 3647,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "DUP1"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "55"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "55"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "DUP3"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "AND"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "SWAP1"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "DUP2"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "MSTORE"
              },
              {
                "begin": 3522,
                "end": 3532,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "MSTORE"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "SWAP1"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "KECCAK256"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "SLOAD"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "AND"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ISZERO"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ISZERO"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH [tag]",
                "value": "57"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "JUMPI"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP2"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP3"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "15"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP3"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "5441524745545F4E4F545F415554484F52495A45440000000000000000000000"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP3"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MLOAD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP2"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SUB"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "REVERT"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "tag",
                "value": "57"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "DUP2"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "AND"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "SWAP1"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "DUP2"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "MSTORE"
              },
              {
                "begin": 3605,
                "end": 3615,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "MSTORE"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "DUP2"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "KECCAK256"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "DUP1"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "AND"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "SWAP1"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "SSTORE"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "tag",
                "value": "58"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMPDEST"
              },
              {
                "begin": 3657,
                "end": 3668,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3657,
                "end": 3675,
                "name": "SLOAD"
              },
              {
                "begin": 3653,
                "end": 3675,
                "name": "DUP2"
              },
              {
                "begin": 3653,
                "end": 3675,
                "name": "LT"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "ISZERO"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "PUSH [tag]",
                "value": "59"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMPI"
              },
              {
                "begin": 3718,
                "end": 3724,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3700,
                "end": 3724,
                "name": "AND"
              },
              {
                "begin": 3700,
                "end": 3711,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3712,
                "end": 3713,
                "name": "DUP3"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "DUP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SLOAD"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "DUP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "LT"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "ISZERO"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "ISZERO"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "PUSH [tag]",
                "value": "61"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "JUMPI"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "INVALID"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "tag",
                "value": "61"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "JUMPDEST"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SWAP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "DUP3"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "MSTORE"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SWAP1"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SWAP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "KECCAK256"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "ADD"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "AND"
              },
              {
                "begin": 3700,
                "end": 3724,
                "name": "EQ"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "ISZERO"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "PUSH [tag]",
                "value": "63"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "JUMPI"
              },
              {
                "begin": 3761,
                "end": 3772,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3773,
                "end": 3791,
                "name": "DUP1"
              },
              {
                "begin": 3773,
                "end": 3791,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3773,
                "end": 3795,
                "name": "DUP2"
              },
              {
                "begin": 3773,
                "end": 3795,
                "name": "ADD"
              },
              {
                "begin": 3773,
                "end": 3795,
                "name": "SWAP1"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "DUP2"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "LT"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "PUSH [tag]",
                "value": "64"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "JUMPI"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "INVALID"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "tag",
                "value": "64"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "JUMPDEST"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "DUP3"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "MSTORE"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "KECCAK256"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "ADD"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SLOAD"
              },
              {
                "begin": 3744,
                "end": 3755,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "DUP1"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP3"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "AND"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3756,
                "end": 3757,
                "name": "DUP4"
              },
              {
                "begin": 3756,
                "end": 3757,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "DUP2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "LT"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "PUSH [tag]",
                "value": "66"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "JUMPI"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "INVALID"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "tag",
                "value": "66"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "JUMPDEST"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "DUP3"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "MSTORE"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "KECCAK256"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "ADD"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "DUP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "AND"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP3"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP3"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "AND"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "OR"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SSTORE"
              },
              {
                "begin": 3814,
                "end": 3825,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "DUP1"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "ADD"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "SWAP1"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "PUSH [tag]",
                "value": "68"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "SWAP1"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "DUP3"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "PUSH [tag]",
                "value": "69"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "JUMP",
                "value": "[in]"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "tag",
                "value": "68"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "JUMPDEST"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "POP"
              },
              {
                "begin": 3855,
                "end": 3860,
                "name": "PUSH [tag]",
                "value": "59"
              },
              {
                "begin": 3855,
                "end": 3860,
                "name": "JUMP"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "tag",
                "value": "63"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "JUMPDEST"
              },
              {
                "begin": 3677,
                "end": 3680,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3677,
                "end": 3680,
                "name": "ADD"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "PUSH [tag]",
                "value": "58"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMP"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "tag",
                "value": "59"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMPDEST"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "MLOAD"
              },
              {
                "begin": 3932,
                "end": 3942,
                "name": "CALLER"
              },
              {
                "begin": 3932,
                "end": 3942,
                "name": "SWAP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "DUP5"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "AND"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "SWAP1"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "PUSH",
                "value": "1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "SWAP1"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "SWAP1"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "LOG3"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "POP"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "POP"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "28"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "AND"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "DUP2"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "tag",
                "value": "31"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "71"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "71"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "DUP3"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "AND"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "SWAP1"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "DUP2"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "MSTORE"
              },
              {
                "begin": 4286,
                "end": 4296,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "MSTORE"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "SWAP1"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "KECCAK256"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "SLOAD"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "AND"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ISZERO"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ISZERO"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH [tag]",
                "value": "73"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "JUMPI"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP2"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP3"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "15"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP3"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "5441524745545F4E4F545F415554484F52495A45440000000000000000000000"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP3"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MLOAD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP2"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SUB"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "REVERT"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "tag",
                "value": "73"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "JUMPDEST"
              },
              {
                "begin": 4390,
                "end": 4401,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4390,
                "end": 4408,
                "name": "SLOAD"
              },
              {
                "begin": 4382,
                "end": 4408,
                "name": "DUP2"
              },
              {
                "begin": 4382,
                "end": 4408,
                "name": "LT"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH [tag]",
                "value": "74"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "JUMPI"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP2"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP3"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP3"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "494E4445585F4F55545F4F465F424F554E445300000000000000000000000000"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP3"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MLOAD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP2"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SUB"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "REVERT"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "tag",
                "value": "74"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "JUMPDEST"
              },
              {
                "begin": 4506,
                "end": 4512,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4484,
                "end": 4512,
                "name": "AND"
              },
              {
                "begin": 4484,
                "end": 4495,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4496,
                "end": 4501,
                "name": "DUP3"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "DUP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SLOAD"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "DUP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "LT"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "ISZERO"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "ISZERO"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "PUSH [tag]",
                "value": "75"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "JUMPI"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "INVALID"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "tag",
                "value": "75"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "JUMPDEST"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SWAP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "DUP3"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "MSTORE"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SWAP1"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SWAP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "KECCAK256"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "ADD"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "AND"
              },
              {
                "begin": 4484,
                "end": 4512,
                "name": "EQ"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH [tag]",
                "value": "77"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "JUMPI"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP2"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP3"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "1B"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP3"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "415554484F52495A45445F414444524553535F4D49534D415443480000000000"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP3"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MLOAD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP2"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SUB"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "REVERT"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "tag",
                "value": "77"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "DUP3"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "AND"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "SWAP1"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "DUP2"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "MSTORE"
              },
              {
                "begin": 4583,
                "end": 4593,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "MSTORE"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "SWAP1"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "KECCAK256"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "DUP1"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "AND"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "SWAP1"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "SSTORE"
              },
              {
                "begin": 4632,
                "end": 4643,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4644,
                "end": 4662,
                "name": "DUP1"
              },
              {
                "begin": 4644,
                "end": 4662,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4644,
                "end": 4666,
                "name": "DUP2"
              },
              {
                "begin": 4644,
                "end": 4666,
                "name": "ADD"
              },
              {
                "begin": 4644,
                "end": 4666,
                "name": "SWAP1"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "DUP2"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "LT"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "PUSH [tag]",
                "value": "78"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "JUMPI"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "INVALID"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "tag",
                "value": "78"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "JUMPDEST"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "DUP3"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "MSTORE"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "KECCAK256"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "ADD"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SLOAD"
              },
              {
                "begin": 4611,
                "end": 4622,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "DUP1"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP3"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "AND"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4623,
                "end": 4628,
                "name": "DUP4"
              },
              {
                "begin": 4623,
                "end": 4628,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "DUP2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "LT"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "PUSH [tag]",
                "value": "80"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "JUMPI"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "INVALID"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "tag",
                "value": "80"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "JUMPDEST"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "DUP3"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "MSTORE"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "KECCAK256"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "ADD"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "DUP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "AND"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP3"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP3"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "AND"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "OR"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SSTORE"
              },
              {
                "begin": 4677,
                "end": 4688,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "DUP1"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "ADD"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "SWAP1"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "PUSH [tag]",
                "value": "82"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "SWAP1"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "DUP3"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "PUSH [tag]",
                "value": "69"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "JUMP",
                "value": "[in]"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "tag",
                "value": "82"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "MLOAD"
              },
              {
                "begin": 4748,
                "end": 4758,
                "name": "CALLER"
              },
              {
                "begin": 4748,
                "end": 4758,
                "name": "SWAP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "DUP5"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "AND"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "SWAP1"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "PUSH",
                "value": "1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "SWAP1"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "SWAP1"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "LOG3"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "POP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "POP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "tag",
                "value": "34"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "JUMPDEST"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "DUP1"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "MLOAD"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "PUSH",
                "value": "4552433230546F6B656E28616464726573732900000000000000000000000000"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "DUP2"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "MSTORE"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "SWAP1"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "MLOAD"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "SWAP1"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "DUP2"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "SWAP1"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "SUB"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "ADD"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "SWAP1"
              },
              {
                "begin": 5124,
                "end": 5156,
                "name": "KECCAK256"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "tag",
                "value": "83"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "JUMPDEST"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "SWAP1"
              },
              {
                "begin": 13422,
                "end": 13535,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "tag",
                "value": "37"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMPDEST"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MSTORE"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MSTORE"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "KECCAK256"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SLOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "AND"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "40"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4944,
                "end": 4953,
                "name": "PUSH",
                "value": "60"
              },
              {
                "begin": 4983,
                "end": 4994,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SLOAD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MUL"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MLOAD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP3"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP3"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SLOAD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ISZERO"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH [tag]",
                "value": "85"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPI"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MUL"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP3"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "KECCAK256"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "tag",
                "value": "86"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPDEST"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "AND"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP4"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "GT"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH [tag]",
                "value": "86"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPI"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "tag",
                "value": "85"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPDEST"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "46"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "88"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "88"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "DUP2"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "AND"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "ISZERO"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "PUSH [tag]",
                "value": "90"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "JUMPI"
              },
              {
                "begin": 1109,
                "end": 1114,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "DUP1"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "AND"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "DUP4"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "AND"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "OR"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SWAP1"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SSTORE"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "tag",
                "value": "90"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "POP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "tag",
                "value": "69"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SLOAD"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP4"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SSTORE"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "GT"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "ISZERO"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "92"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP4"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "MSTORE"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SWAP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "KECCAK256"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "92"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SWAP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "ADD"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SWAP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP4"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "ADD"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "93"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMP",
                "value": "[in]"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "tag",
                "value": "92"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "POP"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "POP"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "POP"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "tag",
                "value": "93"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "83"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SWAP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SWAP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "tag",
                "value": "95"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP3"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "GT"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "ISZERO"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "96"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPI"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "DUP2"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SSTORE"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "ADD"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "PUSH [tag]",
                "value": "95"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMP"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "tag",
                "value": "96"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMPDEST"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "POP"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "SWAP1"
              },
              {
                "begin": 5005,
                "end": 13537,
                "name": "JUMP"
              }
            ],
            ".data": {
              "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100": "4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000"
            }
          }
        }
      },
      "bytecode": "608060405260008054600160a060020a03191633179055610b8e806100256000396000f3006080604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342f1181e8114610217578063494503d41461023a578063707129391461026e5780638da5cb5b1461028f5780639ad26744146102a4578063ae25532e146102c8578063b91816111461030f578063d39de6e914610344578063f2fde38b146103a9575b3480156100a457600080fd5b507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19600035167fa85e59e4000000000000000000000000000000000000000000000000000000008114156102125760408051338152600160208201529081205415156101615760e560020a62461bcd026000527c20000000000000000000000000000000000000000000000000000000006020527c1553454e4445525f4e4f545f415554484f52495a454400000000000000604052600060605260646000fd5b602860043501357f23b872dd0000000000000000000000000000000000000000000000000000000060005260606024600437602060006064600080855af1600080511160203d14163d15178116905080156101b857005b60e560020a62461bcd026000527c20000000000000000000000000000000000000000000000000000000006020527c0f5452414e534645525f4641494c454400000000000000000000000000604052600060605260646000fd5b600080fd5b34801561022357600080fd5b50610238600160a060020a03600435166103ca565b005b34801561024657600080fd5b50610252600435610526565b60408051600160a060020a039092168252519081900360200190f35b34801561027a57600080fd5b50610238600160a060020a036004351661054e565b34801561029b57600080fd5b5061025261073a565b3480156102b057600080fd5b50610238600160a060020a0360043516602435610749565b3480156102d457600080fd5b506102dd6109c3565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b34801561031b57600080fd5b50610330600160a060020a03600435166109f9565b604080519115158252519081900360200190f35b34801561035057600080fd5b50610359610a0e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561039557818101518382015260200161037d565b505050509050019250505060405180910390f35b3480156103b557600080fd5b50610238600160a060020a0360043516610a70565b600054600160a060020a0316331461041a576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03811660009081526001602052604090205460ff161561048b576040805160e560020a62461bcd02815260206004820152601960248201527f5441524745545f414c52454144595f415554484f52495a454400000000000000604482015290519081900360640190fd5b600160a060020a0381166000818152600160208190526040808320805460ff19168317905560028054928301815583527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909101805473ffffffffffffffffffffffffffffffffffffffff191684179055513392917f3147867c59d17e8fa9d522465651d44aae0a9e38f902f3475b97e58072f0ed4c91a350565b600280548290811061053457fe5b600091825260209091200154600160a060020a0316905081565b60008054600160a060020a0316331461059f576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff161515610611576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b50600160a060020a0381166000908152600160205260408120805460ff191690555b6002548110156107005781600160a060020a031660028281548110151561065657fe5b600091825260209091200154600160a060020a031614156106f85760028054600019810190811061068357fe5b60009182526020909120015460028054600160a060020a0390921691839081106106a957fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556002805460001901906106f29082610afb565b50610700565b600101610633565b6040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b600054600160a060020a031681565b600054600160a060020a03163314610799576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff16151561080b576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b6002548110610864576040805160e560020a62461bcd02815260206004820152601360248201527f494e4445585f4f55545f4f465f424f554e445300000000000000000000000000604482015290519081900360640190fd5b81600160a060020a031660028281548110151561087d57fe5b600091825260209091200154600160a060020a0316146108e7576040805160e560020a62461bcd02815260206004820152601b60248201527f415554484f52495a45445f414444524553535f4d49534d415443480000000000604482015290519081900360640190fd5b600160a060020a0382166000908152600160205260409020805460ff1916905560028054600019810190811061091957fe5b60009182526020909120015460028054600160a060020a03909216918390811061093f57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556002805460001901906109889082610afb565b506040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b604080517f4552433230546f6b656e28616464726573732900000000000000000000000000815290519081900360130190205b90565b60016020526000908152604090205460ff1681565b60606002805480602002602001604051908101604052809291908181526020018280548015610a6657602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610a48575b5050505050905090565b600054600160a060020a03163314610ac0576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03811615610af8576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b50565b815481835581811115610b1f57600083815260209020610b1f918101908301610b24565b505050565b6109f691905b80821115610b3e5760008155600101610b2a565b509056004f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000a165627a7a72305820df9f98e4c7bf7fa5753e4aa3fe7f47495f4a2545f2f95db24c4bd030f98bed360029",
      "functionHashes": {
        "addAuthorizedAddress(address)": "42f1181e",
        "authorities(uint256)": "494503d4",
        "authorized(address)": "b9181611",
        "getAuthorizedAddresses()": "d39de6e9",
        "getProxyId()": "ae25532e",
        "owner()": "8da5cb5b",
        "removeAuthorizedAddress(address)": "70712939",
        "removeAuthorizedAddressAtIndex(address,uint256)": "9ad26744",
        "transferOwnership(address)": "f2fde38b"
      },
      "gasEstimates": {
        "creation": [
          20893,
          591600
        ],
        "external": {
          "": null,
          "addAuthorizedAddress(address)": null,
          "authorities(uint256)": 859,
          "authorized(address)": 675,
          "getAuthorizedAddresses()": null,
          "getProxyId()": 385,
          "owner()": 603,
          "removeAuthorizedAddress(address)": null,
          "removeAuthorizedAddressAtIndex(address,uint256)": null,
          "transferOwnership(address)": null
        },
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"authorities\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeAuthorizedAddressAtIndex\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getProxyId\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes4\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressRemoved\",\"type\":\"event\"}]",
      "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"authorities\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeAuthorizedAddressAtIndex\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getProxyId\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes4\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressRemoved\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"addAuthorizedAddress(address)\":{\"details\":\"Authorizes an address.\",\"params\":{\"target\":\"Address to authorize.\"}},\"getAuthorizedAddresses()\":{\"details\":\"Gets all authorized addresses.\",\"return\":\"Array of authorized addresses.\"},\"getProxyId()\":{\"details\":\"Gets the proxy id associated with the proxy address.\",\"return\":\"Proxy id.\"},\"removeAuthorizedAddress(address)\":{\"details\":\"Removes authorizion of an address.\",\"params\":{\"target\":\"Address to remove authorization from.\"}},\"removeAuthorizedAddressAtIndex(address,uint256)\":{\"details\":\"Removes authorizion of an address.\",\"params\":{\"index\":\"Index of target in authorities array.\",\"target\":\"Address to remove authorization from.\"}}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"ERC20Proxy.sol\":\"ERC20Proxy\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"ERC20Proxy.sol\":{\"keccak256\":\"0xce71a992d7d006d4a65386bb6f2d9abea0bbb55cc4cefbbc607934dd6622ae4c\",\"urls\":[\"bzzr://46bd0a2782f126d4846f2b4627c6dca1db84d38f34b02a2e59c4ff7e72da119d\"]}},\"version\":1}",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0xB8E DUP1 PUSH2 0x25 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x98 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x42F1181E DUP2 EQ PUSH2 0x217 JUMPI DUP1 PUSH4 0x494503D4 EQ PUSH2 0x23A JUMPI DUP1 PUSH4 0x70712939 EQ PUSH2 0x26E JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x28F JUMPI DUP1 PUSH4 0x9AD26744 EQ PUSH2 0x2A4 JUMPI DUP1 PUSH4 0xAE25532E EQ PUSH2 0x2C8 JUMPI DUP1 PUSH4 0xB9181611 EQ PUSH2 0x30F JUMPI DUP1 PUSH4 0xD39DE6E9 EQ PUSH2 0x344 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x3A9 JUMPI JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xA4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT PUSH1 0x0 CALLDATALOAD AND PUSH32 0xA85E59E400000000000000000000000000000000000000000000000000000000 DUP2 EQ ISZERO PUSH2 0x212 JUMPI PUSH1 0x40 DUP1 MLOAD CALLER DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP3 ADD MSTORE SWAP1 DUP2 KECCAK256 SLOAD ISZERO ISZERO PUSH2 0x161 JUMPI PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL PUSH1 0x0 MSTORE PUSH29 0x2000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 MSTORE PUSH29 0x1553454E4445525F4E4F545F415554484F52495A454400000000000000 PUSH1 0x40 MSTORE PUSH1 0x0 PUSH1 0x60 MSTORE PUSH1 0x64 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x28 PUSH1 0x4 CALLDATALOAD ADD CALLDATALOAD PUSH32 0x23B872DD00000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x60 PUSH1 0x24 PUSH1 0x4 CALLDATACOPY PUSH1 0x20 PUSH1 0x0 PUSH1 0x64 PUSH1 0x0 DUP1 DUP6 GAS CALL PUSH1 0x0 DUP1 MLOAD GT PUSH1 0x20 RETURNDATASIZE EQ AND RETURNDATASIZE ISZERO OR DUP2 AND SWAP1 POP DUP1 ISZERO PUSH2 0x1B8 JUMPI STOP JUMPDEST PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL PUSH1 0x0 MSTORE PUSH29 0x2000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 MSTORE PUSH29 0xF5452414E534645525F4641494C454400000000000000000000000000 PUSH1 0x40 MSTORE PUSH1 0x0 PUSH1 0x60 MSTORE PUSH1 0x64 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x223 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x238 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x3CA JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x246 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x252 PUSH1 0x4 CALLDATALOAD PUSH2 0x526 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x27A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x238 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x54E JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x29B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x252 PUSH2 0x73A JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2B0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x238 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x749 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2D4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2DD PUSH2 0x9C3 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x31B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x330 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x9F9 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x350 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x359 PUSH2 0xA0E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 DUP2 ADD SWAP2 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x395 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x37D JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3B5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x238 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0xA70 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x41A JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0xB43 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x48B JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x19 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x5441524745545F414C52454144595F415554484F52495A454400000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND DUP4 OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD SWAP3 DUP4 ADD DUP2 SSTORE DUP4 MSTORE PUSH32 0x405787FA12A823E0F2B7631CC41B3BA8828B3321CA811111FA75CD3AA3BB5ACE SWAP1 SWAP2 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP5 OR SWAP1 SSTORE MLOAD CALLER SWAP3 SWAP2 PUSH32 0x3147867C59D17E8FA9D522465651D44AAE0A9E38F902F3475B97E58072F0ED4C SWAP2 LOG3 POP JUMP JUMPDEST PUSH1 0x2 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x534 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x59F JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0xB43 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x611 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x15 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x5441524745545F4E4F545F415554484F52495A45440000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST POP PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE JUMPDEST PUSH1 0x2 SLOAD DUP2 LT ISZERO PUSH2 0x700 JUMPI DUP2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x656 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND EQ ISZERO PUSH2 0x6F8 JUMPI PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT DUP2 ADD SWAP1 DUP2 LT PUSH2 0x683 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 DUP4 SWAP1 DUP2 LT PUSH2 0x6A9 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT ADD SWAP1 PUSH2 0x6F2 SWAP1 DUP3 PUSH2 0xAFB JUMP JUMPDEST POP PUSH2 0x700 JUMP JUMPDEST PUSH1 0x1 ADD PUSH2 0x633 JUMP JUMPDEST PUSH1 0x40 MLOAD CALLER SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND SWAP1 PUSH32 0x1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0 SWAP1 PUSH1 0x0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x799 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0xB43 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x80B JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x15 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x5441524745545F4E4F545F415554484F52495A45440000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x2 SLOAD DUP2 LT PUSH2 0x864 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x494E4445585F4F55545F4F465F424F554E445300000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST DUP2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x87D JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND EQ PUSH2 0x8E7 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x415554484F52495A45445F414444524553535F4D49534D415443480000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT DUP2 ADD SWAP1 DUP2 LT PUSH2 0x919 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 DUP4 SWAP1 DUP2 LT PUSH2 0x93F JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT ADD SWAP1 PUSH2 0x988 SWAP1 DUP3 PUSH2 0xAFB JUMP JUMPDEST POP PUSH1 0x40 MLOAD CALLER SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND SWAP1 PUSH32 0x1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0 SWAP1 PUSH1 0x0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH32 0x4552433230546F6B656E28616464726573732900000000000000000000000000 DUP2 MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x13 ADD SWAP1 KECCAK256 JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x2 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0xA66 JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0xA48 JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0xAC0 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0xB43 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND ISZERO PUSH2 0xAF8 JUMPI PUSH1 0x0 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND OR SWAP1 SSTORE JUMPDEST POP JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 GT ISZERO PUSH2 0xB1F JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH2 0xB1F SWAP2 DUP2 ADD SWAP1 DUP4 ADD PUSH2 0xB24 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x9F6 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xB3E JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xB2A JUMP JUMPDEST POP SWAP1 JUMP STOP 0x4f 0x4e 0x4c MSIZE 0x5f NUMBER 0x4f 0x4e SLOAD MSTORE COINBASE NUMBER SLOAD 0x5f 0x4f JUMPI 0x4e GASLIMIT MSTORE STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xdf SWAP16 SWAP9 0xe4 0xc7 0xbf PUSH32 0xA5753E4AA3FE7F47495F4A2545F2F95DB24C4BD030F98BED3600290000000000 ",
      "runtimeBytecode": "6080604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342f1181e8114610217578063494503d41461023a578063707129391461026e5780638da5cb5b1461028f5780639ad26744146102a4578063ae25532e146102c8578063b91816111461030f578063d39de6e914610344578063f2fde38b146103a9575b3480156100a457600080fd5b507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19600035167fa85e59e4000000000000000000000000000000000000000000000000000000008114156102125760408051338152600160208201529081205415156101615760e560020a62461bcd026000527c20000000000000000000000000000000000000000000000000000000006020527c1553454e4445525f4e4f545f415554484f52495a454400000000000000604052600060605260646000fd5b602860043501357f23b872dd0000000000000000000000000000000000000000000000000000000060005260606024600437602060006064600080855af1600080511160203d14163d15178116905080156101b857005b60e560020a62461bcd026000527c20000000000000000000000000000000000000000000000000000000006020527c0f5452414e534645525f4641494c454400000000000000000000000000604052600060605260646000fd5b600080fd5b34801561022357600080fd5b50610238600160a060020a03600435166103ca565b005b34801561024657600080fd5b50610252600435610526565b60408051600160a060020a039092168252519081900360200190f35b34801561027a57600080fd5b50610238600160a060020a036004351661054e565b34801561029b57600080fd5b5061025261073a565b3480156102b057600080fd5b50610238600160a060020a0360043516602435610749565b3480156102d457600080fd5b506102dd6109c3565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b34801561031b57600080fd5b50610330600160a060020a03600435166109f9565b604080519115158252519081900360200190f35b34801561035057600080fd5b50610359610a0e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561039557818101518382015260200161037d565b505050509050019250505060405180910390f35b3480156103b557600080fd5b50610238600160a060020a0360043516610a70565b600054600160a060020a0316331461041a576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03811660009081526001602052604090205460ff161561048b576040805160e560020a62461bcd02815260206004820152601960248201527f5441524745545f414c52454144595f415554484f52495a454400000000000000604482015290519081900360640190fd5b600160a060020a0381166000818152600160208190526040808320805460ff19168317905560028054928301815583527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909101805473ffffffffffffffffffffffffffffffffffffffff191684179055513392917f3147867c59d17e8fa9d522465651d44aae0a9e38f902f3475b97e58072f0ed4c91a350565b600280548290811061053457fe5b600091825260209091200154600160a060020a0316905081565b60008054600160a060020a0316331461059f576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff161515610611576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b50600160a060020a0381166000908152600160205260408120805460ff191690555b6002548110156107005781600160a060020a031660028281548110151561065657fe5b600091825260209091200154600160a060020a031614156106f85760028054600019810190811061068357fe5b60009182526020909120015460028054600160a060020a0390921691839081106106a957fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556002805460001901906106f29082610afb565b50610700565b600101610633565b6040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b600054600160a060020a031681565b600054600160a060020a03163314610799576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff16151561080b576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b6002548110610864576040805160e560020a62461bcd02815260206004820152601360248201527f494e4445585f4f55545f4f465f424f554e445300000000000000000000000000604482015290519081900360640190fd5b81600160a060020a031660028281548110151561087d57fe5b600091825260209091200154600160a060020a0316146108e7576040805160e560020a62461bcd02815260206004820152601b60248201527f415554484f52495a45445f414444524553535f4d49534d415443480000000000604482015290519081900360640190fd5b600160a060020a0382166000908152600160205260409020805460ff1916905560028054600019810190811061091957fe5b60009182526020909120015460028054600160a060020a03909216918390811061093f57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556002805460001901906109889082610afb565b506040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b604080517f4552433230546f6b656e28616464726573732900000000000000000000000000815290519081900360130190205b90565b60016020526000908152604090205460ff1681565b60606002805480602002602001604051908101604052809291908181526020018280548015610a6657602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610a48575b5050505050905090565b600054600160a060020a03163314610ac0576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610b43833981519152604482015290519081900360640190fd5b600160a060020a03811615610af8576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b50565b815481835581811115610b1f57600083815260209020610b1f918101908301610b24565b505050565b6109f691905b80821115610b3e5760008155600101610b2a565b509056004f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000a165627a7a72305820df9f98e4c7bf7fa5753e4aa3fe7f47495f4a2545f2f95db24c4bd030f98bed360029",
      "srcmap": "5005:8532:0:-;;;804:5;:18;;-1:-1:-1;;;;;;804:18:0;812:10;804:18;;;5005:8532;;;;;;",
      "srcmapRuntime": "5005:8532:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5005:8532:0;-1:-1:-1;;5386:1:0;5373:15;5369:88;5852:66;5842:8;5839:80;5836:2;;;6148;6142:9;;6186:6;6168:70;;6278:15;6273:2;6262:14;;6255:39;6389:20;;;6383:27;6376:35;6373:2;;;-1:-1:-1;;;;;6509:1:0;6502:77;6611:66;6607:2;6600:78;6710:66;6706:2;6699:78;6809:1;6805:2;6798:13;6842:3;6839:1;6832:14;6373:2;10804;10800:1;10787:15;10783:24;10770:38;11084:66;11081:1;11074:77;11373:2;11369;11366:1;11353:23;11878:2;11815:1;11760:3;11695:1;11637;11567:5;11512:3;11486:459;12687:1;12683;12677:8;12674:15;12645:2;12629:14;12626:22;12597:114;12560:14;12553:22;12529:200;12520:7;12516:214;12505:225;;12750:7;12747:2;;;12780:12;12747:2;-1:-1:-1;;;;;12893:1:0;12886:77;12991:66;12987:2;12980:78;13086:66;13082:2;13075:78;13181:1;13177:2;13170:13;13210:3;13207:1;13200:14;5836:2;13306:1;13303;13296:12;2969:320;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2969:320:0;-1:-1:-1;;;;;2969:320:0;;;;;;;2854:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2854:28:0;;;;;;;;;-1:-1:-1;;;;;2854:28:0;;;;;;;;;;;;;;3403:547;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3403:547:0;-1:-1:-1;;;;;3403:547:0;;;;;733:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;733:20:0;;;;4123:643;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4123:643:0;-1:-1:-1;;;;;4123:643:0;;;;;;;13422:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;13422:113:0;;;;;;;;-1:-1:-1;;13422:113:0;;;;;;;;;;;;;;2805:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2805:43:0;-1:-1:-1;;;;;2805:43:0;;;;;;;;;;;;;;;;;;;;;;;4863:138;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4863:138:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;4863:138:0;;;;;;;;;;;;;;;;;975:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;975:167:0;-1:-1:-1;;;;;975:167:0;;;;;2969:320;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;3086:18:0;;;;;;:10;:18;;;;;;;;3085:19;3064:91;;;;;-1:-1:-1;;;;;3064:91:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3166:18:0;;;;;;3187:4;3166:18;;;;;;;;:25;;-1:-1:-1;;3166:25:0;;;;;3201:11;27:10:-1;;23:18;;;45:23;;3201:24:0;;;;;;;;-1:-1:-1;;3201:24:0;;;;;3240:42;3271:10;;3166:18;3240:42;;;2969:320;:::o;2854:28::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2854:28:0;;-1:-1:-1;2854:28:0;:::o;3403:547::-;3638:9;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;3522:18:0;;;;;;:10;:18;;;;;;;;3501:86;;;;;;;-1:-1:-1;;;;;3501:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3605:18:0;;;;;;:10;:18;;;;;3598:25;;-1:-1:-1;;3598:25:0;;;3633:252;3657:11;:18;3653:22;;3633:252;;;3718:6;-1:-1:-1;;;;;3700:24:0;:11;3712:1;3700:14;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3700:14:0;:24;3696:179;;;3761:11;3773:18;;-1:-1:-1;;3773:22:0;;;3761:35;;;;;;;;;;;;;;;;3744:11;:14;;-1:-1:-1;;;;;3761:35:0;;;;3756:1;;3744:14;;;;;;;;;;;;;;;:52;;-1:-1:-1;;3744:52:0;-1:-1:-1;;;;;3744:52:0;;;;;;;;;;3814:11;:23;;-1:-1:-1;;3814:23:0;;;;;;:::i;:::-;;3855:5;;3696:179;3677:3;;3633:252;;;3899:44;;3932:10;;-1:-1:-1;;;;;3899:44:0;;;;;;;;3403:547;;:::o;733:20::-;;;-1:-1:-1;;;;;733:20:0;;:::o;4123:643::-;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;4286:18:0;;;;;;:10;:18;;;;;;;;4265:86;;;;;;;-1:-1:-1;;;;;4265:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;4390:11;:18;4382:26;;4361:92;;;;;-1:-1:-1;;;;;4361:92:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;4506:6;-1:-1:-1;;;;;4484:28:0;:11;4496:5;4484:18;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4484:18:0;:28;4463:102;;;;;-1:-1:-1;;;;;4463:102:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4583:18:0;;;;;;:10;:18;;;;;4576:25;;-1:-1:-1;;4576:25:0;;;4632:11;4644:18;;-1:-1:-1;;4644:22:0;;;4632:35;;;;;;;;;;;;;;;;4611:11;:18;;-1:-1:-1;;;;;4632:35:0;;;;4623:5;;4611:18;;;;;;;;;;;;;;;:56;;-1:-1:-1;;4611:56:0;-1:-1:-1;;;;;4611:56:0;;;;;;;;;;4677:11;:23;;-1:-1:-1;;4677:23:0;;;;;;:::i;:::-;-1:-1:-1;4715:44:0;;4748:10;;-1:-1:-1;;;;;4715:44:0;;;;;;;;4123:643;;:::o;13422:113::-;5124:32;;;;;;;;;;;;;;;;13422:113;;:::o;2805:43::-;;;;;;;;;;;;;;;:::o;4863:138::-;4944:9;4983:11;4976:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4976:18:0;;;;;;;;;;;;;;;;;;;;;;;4863:138;:::o;975:167::-;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;1071:22:0;;;1067:69;;1109:5;:16;;-1:-1:-1;;1109:16:0;-1:-1:-1;;;;;1109:16:0;;;;;1067:69;975:167;:::o;5005:8532::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;"
    },
    "ERC20Proxy.sol:IAuthorizable": {
      "assembly": null,
      "bytecode": "",
      "functionHashes": {
        "addAuthorizedAddress(address)": "42f1181e",
        "getAuthorizedAddresses()": "d39de6e9",
        "removeAuthorizedAddress(address)": "70712939",
        "removeAuthorizedAddressAtIndex(address,uint256)": "9ad26744",
        "transferOwnership(address)": "f2fde38b"
      },
      "gasEstimates": {
        "creation": {},
        "external": {},
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeAuthorizedAddressAtIndex\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "metadata": "",
      "opcodes": "",
      "runtimeBytecode": "",
      "srcmap": "",
      "srcmapRuntime": ""
    },
    "ERC20Proxy.sol:IOwnable": {
      "assembly": null,
      "bytecode": "",
      "functionHashes": {
        "transferOwnership(address)": "f2fde38b"
      },
      "gasEstimates": {
        "creation": {},
        "external": {},
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "metadata": "",
      "opcodes": "",
      "runtimeBytecode": "",
      "srcmap": "",
      "srcmapRuntime": ""
    },
    "ERC20Proxy.sol:MAuthorizable": {
      "assembly": null,
      "bytecode": "",
      "functionHashes": {
        "addAuthorizedAddress(address)": "42f1181e",
        "getAuthorizedAddresses()": "d39de6e9",
        "removeAuthorizedAddress(address)": "70712939",
        "removeAuthorizedAddressAtIndex(address,uint256)": "9ad26744",
        "transferOwnership(address)": "f2fde38b"
      },
      "gasEstimates": {
        "creation": {},
        "external": {},
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeAuthorizedAddressAtIndex\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressRemoved\",\"type\":\"event\"}]",
      "metadata": "",
      "opcodes": "",
      "runtimeBytecode": "",
      "srcmap": "",
      "srcmapRuntime": ""
    },
    "ERC20Proxy.sol:MixinAuthorizable": {
      "assembly": {
        ".code": [
          {
            "begin": 2510,
            "end": 5003,
            "name": "PUSH",
            "value": "80"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "PUSH",
            "value": "40"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "MSTORE"
          },
          {
            "begin": 804,
            "end": 809,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "DUP1"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SLOAD"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "A0"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "2"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "EXP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "SUB"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "NOT"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "AND"
          },
          {
            "begin": 812,
            "end": 822,
            "name": "CALLER"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "OR"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SWAP1"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SSTORE"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "PUSH #[$]",
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "DUP1"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "PUSH [$]",
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "CODECOPY"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 2510,
            "end": 5003,
            "name": "RETURN"
          }
        ],
        ".data": {
          "0": {
            ".auxdata": "a165627a7a72305820af07a9a1cee08c51a2e55a2942d031d0e4d7857efe7987147ae4790bd5a87b9f0029",
            ".code": [
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "80"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "MSTORE"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "CALLDATASIZE"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "LT"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "FFFFFFFF"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "100000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DIV"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "AND"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "42F1181E"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "494503D4"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "3"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "70712939"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "4"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "8DA5CB5B"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "5"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "9AD26744"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "6"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "B9181611"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "7"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "D39DE6E9"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "8"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "F2FDE38B"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "EQ"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "9"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "tag",
                "value": "1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPDEST"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "REVERT"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "tag",
                "value": "2"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMPDEST"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "10"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "10"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "PUSH [tag]",
                "value": "11"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "AND"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "PUSH [tag]",
                "value": "12"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "tag",
                "value": "11"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMPDEST"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "STOP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "13"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "13"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH [tag]",
                "value": "14"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH [tag]",
                "value": "15"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "14"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "AND"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MSTORE"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MLOAD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SUB"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "ADD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "RETURN"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "tag",
                "value": "4"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMPDEST"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "16"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "16"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "PUSH [tag]",
                "value": "11"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "AND"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "PUSH [tag]",
                "value": "18"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "5"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "19"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "19"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "POP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH [tag]",
                "value": "14"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH [tag]",
                "value": "21"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "tag",
                "value": "6"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMPDEST"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "22"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "22"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH [tag]",
                "value": "11"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "AND"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "PUSH [tag]",
                "value": "24"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMP"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "tag",
                "value": "7"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMPDEST"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "25"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "25"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH [tag]",
                "value": "26"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "AND"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH [tag]",
                "value": "27"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMP"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "tag",
                "value": "26"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMPDEST"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MLOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "ISZERO"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "ISZERO"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP3"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MSTORE"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MLOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SUB"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "ADD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "RETURN"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "8"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "28"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "28"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH [tag]",
                "value": "29"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH [tag]",
                "value": "30"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "29"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MSTORE"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MSTORE"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP6"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MUL"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP4"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "tag",
                "value": "31"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMPDEST"
              },
              {
                "begin": 33,
                "end": 36,
                "name": "DUP4"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "DUP2"
              },
              {
                "begin": 27,
                "end": 37,
                "name": "LT"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "ISZERO"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "PUSH [tag]",
                "value": "32"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMPI"
              },
              {
                "begin": 90,
                "end": 101,
                "name": "DUP2"
              },
              {
                "begin": 90,
                "end": 101,
                "name": "DUP2"
              },
              {
                "begin": 90,
                "end": 101,
                "name": "ADD"
              },
              {
                "begin": 84,
                "end": 102,
                "name": "MLOAD"
              },
              {
                "begin": 71,
                "end": 82,
                "name": "DUP4"
              },
              {
                "begin": 71,
                "end": 82,
                "name": "DUP3"
              },
              {
                "begin": 71,
                "end": 82,
                "name": "ADD"
              },
              {
                "begin": 64,
                "end": 103,
                "name": "MSTORE"
              },
              {
                "begin": 52,
                "end": 54,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 45,
                "end": 55,
                "name": "ADD"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "PUSH [tag]",
                "value": "31"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMP"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "tag",
                "value": "32"
              },
              {
                "begin": 8,
                "end": 108,
                "name": "JUMPDEST"
              },
              {
                "begin": 12,
                "end": 26,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "ADD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP3"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "MLOAD"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "DUP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP2"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SUB"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "RETURN"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "9"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "34"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "34"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH [tag]",
                "value": "11"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "AND"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH [tag]",
                "value": "36"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "tag",
                "value": "12"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "38"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "38"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "DUP2"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "AND"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "SWAP1"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "DUP2"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "MSTORE"
              },
              {
                "begin": 3086,
                "end": 3096,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "MSTORE"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "SWAP1"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "KECCAK256"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "SLOAD"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 3086,
                "end": 3104,
                "name": "AND"
              },
              {
                "begin": 3085,
                "end": 3104,
                "name": "ISZERO"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH [tag]",
                "value": "40"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "JUMPI"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP2"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP3"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "19"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP3"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "5441524745545F414C52454144595F415554484F52495A454400000000000000"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP3"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MSTORE"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "MLOAD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "DUP2"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SUB"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "ADD"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "SWAP1"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "REVERT"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "tag",
                "value": "40"
              },
              {
                "begin": 3064,
                "end": 3155,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "AND"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "MSTORE"
              },
              {
                "begin": 3187,
                "end": 3191,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP2"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "SWAP1"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "MSTORE"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP1"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "DUP4"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "KECCAK256"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "DUP1"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "AND"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "DUP4"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "OR"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "SWAP1"
              },
              {
                "begin": 3166,
                "end": 3191,
                "name": "SSTORE"
              },
              {
                "begin": 3201,
                "end": 3212,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 27,
                "end": 37,
                "name": "DUP1"
              },
              {
                "begin": 27,
                "end": 37,
                "name": "SLOAD"
              },
              {
                "begin": 23,
                "end": 41,
                "name": "SWAP3"
              },
              {
                "begin": 23,
                "end": 41,
                "name": "DUP4"
              },
              {
                "begin": 23,
                "end": 41,
                "name": "ADD"
              },
              {
                "begin": 45,
                "end": 68,
                "name": "DUP2"
              },
              {
                "begin": 45,
                "end": 68,
                "name": "SSTORE"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "DUP4"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "MSTORE"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "PUSH",
                "value": "405787FA12A823E0F2B7631CC41B3BA8828B3321CA811111FA75CD3AA3BB5ACE"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SWAP1"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SWAP2"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "ADD"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "DUP1"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "AND"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "DUP5"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "OR"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SWAP1"
              },
              {
                "begin": 3201,
                "end": 3225,
                "name": "SSTORE"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "MLOAD"
              },
              {
                "begin": 3271,
                "end": 3281,
                "name": "CALLER"
              },
              {
                "begin": 3271,
                "end": 3281,
                "name": "SWAP3"
              },
              {
                "begin": 3166,
                "end": 3184,
                "name": "SWAP2"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "PUSH",
                "value": "3147867C59D17E8FA9D522465651D44AAE0A9E38F902F3475B97E58072F0ED4C"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "SWAP2"
              },
              {
                "begin": 3240,
                "end": 3282,
                "name": "LOG3"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "POP"
              },
              {
                "begin": 2969,
                "end": 3289,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "15"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SLOAD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "LT"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH [tag]",
                "value": "42"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPI"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "INVALID"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "tag",
                "value": "42"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMPDEST"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP3"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "MSTORE"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "KECCAK256"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "ADD"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "AND"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "SWAP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "DUP2"
              },
              {
                "begin": 2854,
                "end": 2882,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "tag",
                "value": "18"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMPDEST"
              },
              {
                "begin": 3638,
                "end": 3647,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "DUP1"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "45"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "45"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "DUP3"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "AND"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "SWAP1"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "DUP2"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "MSTORE"
              },
              {
                "begin": 3522,
                "end": 3532,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "MSTORE"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "SWAP1"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "KECCAK256"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "SLOAD"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 3522,
                "end": 3540,
                "name": "AND"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ISZERO"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ISZERO"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH [tag]",
                "value": "47"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "JUMPI"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP2"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP3"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "15"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP3"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "5441524745545F4E4F545F415554484F52495A45440000000000000000000000"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP3"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MSTORE"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "MLOAD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "DUP2"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SUB"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "ADD"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "SWAP1"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "REVERT"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "tag",
                "value": "47"
              },
              {
                "begin": 3501,
                "end": 3587,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "DUP2"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "AND"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "SWAP1"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "DUP2"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "MSTORE"
              },
              {
                "begin": 3605,
                "end": 3615,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "MSTORE"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "DUP2"
              },
              {
                "begin": 3605,
                "end": 3623,
                "name": "KECCAK256"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "DUP1"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "AND"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "SWAP1"
              },
              {
                "begin": 3598,
                "end": 3623,
                "name": "SSTORE"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "tag",
                "value": "48"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMPDEST"
              },
              {
                "begin": 3657,
                "end": 3668,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3657,
                "end": 3675,
                "name": "SLOAD"
              },
              {
                "begin": 3653,
                "end": 3675,
                "name": "DUP2"
              },
              {
                "begin": 3653,
                "end": 3675,
                "name": "LT"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "ISZERO"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "PUSH [tag]",
                "value": "49"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMPI"
              },
              {
                "begin": 3718,
                "end": 3724,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3700,
                "end": 3724,
                "name": "AND"
              },
              {
                "begin": 3700,
                "end": 3711,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3712,
                "end": 3713,
                "name": "DUP3"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "DUP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SLOAD"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "DUP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "LT"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "ISZERO"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "ISZERO"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "PUSH [tag]",
                "value": "51"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "JUMPI"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "INVALID"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "tag",
                "value": "51"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "JUMPDEST"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SWAP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "DUP3"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "MSTORE"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SWAP1"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SWAP2"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "KECCAK256"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "ADD"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3700,
                "end": 3714,
                "name": "AND"
              },
              {
                "begin": 3700,
                "end": 3724,
                "name": "EQ"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "ISZERO"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "PUSH [tag]",
                "value": "53"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "JUMPI"
              },
              {
                "begin": 3761,
                "end": 3772,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3773,
                "end": 3791,
                "name": "DUP1"
              },
              {
                "begin": 3773,
                "end": 3791,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3773,
                "end": 3795,
                "name": "DUP2"
              },
              {
                "begin": 3773,
                "end": 3795,
                "name": "ADD"
              },
              {
                "begin": 3773,
                "end": 3795,
                "name": "SWAP1"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "DUP2"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "LT"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "PUSH [tag]",
                "value": "54"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "JUMPI"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "INVALID"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "tag",
                "value": "54"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "JUMPDEST"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "DUP3"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "MSTORE"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "KECCAK256"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "ADD"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SLOAD"
              },
              {
                "begin": 3744,
                "end": 3755,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "DUP1"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP3"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "AND"
              },
              {
                "begin": 3761,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3756,
                "end": 3757,
                "name": "DUP4"
              },
              {
                "begin": 3756,
                "end": 3757,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "DUP2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "LT"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "PUSH [tag]",
                "value": "56"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "JUMPI"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "INVALID"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "tag",
                "value": "56"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "JUMPDEST"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "DUP3"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "MSTORE"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "KECCAK256"
              },
              {
                "begin": 3744,
                "end": 3758,
                "name": "ADD"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "DUP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "AND"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP3"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP3"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "AND"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP2"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "OR"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SWAP1"
              },
              {
                "begin": 3744,
                "end": 3796,
                "name": "SSTORE"
              },
              {
                "begin": 3814,
                "end": 3825,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "DUP1"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "ADD"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "SWAP1"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "PUSH [tag]",
                "value": "58"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "SWAP1"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "DUP3"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "PUSH [tag]",
                "value": "59"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "JUMP",
                "value": "[in]"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "tag",
                "value": "58"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "JUMPDEST"
              },
              {
                "begin": 3814,
                "end": 3837,
                "name": "POP"
              },
              {
                "begin": 3855,
                "end": 3860,
                "name": "PUSH [tag]",
                "value": "49"
              },
              {
                "begin": 3855,
                "end": 3860,
                "name": "JUMP"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "tag",
                "value": "53"
              },
              {
                "begin": 3696,
                "end": 3875,
                "name": "JUMPDEST"
              },
              {
                "begin": 3677,
                "end": 3680,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 3677,
                "end": 3680,
                "name": "ADD"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "PUSH [tag]",
                "value": "48"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMP"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "tag",
                "value": "49"
              },
              {
                "begin": 3633,
                "end": 3885,
                "name": "JUMPDEST"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "MLOAD"
              },
              {
                "begin": 3932,
                "end": 3942,
                "name": "CALLER"
              },
              {
                "begin": 3932,
                "end": 3942,
                "name": "SWAP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "DUP5"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "AND"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "SWAP1"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "PUSH",
                "value": "1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "SWAP1"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "SWAP1"
              },
              {
                "begin": 3899,
                "end": 3943,
                "name": "LOG3"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "POP"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "POP"
              },
              {
                "begin": 3403,
                "end": 3950,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "21"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "AND"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "DUP2"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "tag",
                "value": "24"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "61"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "61"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "DUP3"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "AND"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "SWAP1"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "DUP2"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "MSTORE"
              },
              {
                "begin": 4286,
                "end": 4296,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "MSTORE"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "SWAP1"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "KECCAK256"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "SLOAD"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 4286,
                "end": 4304,
                "name": "AND"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ISZERO"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ISZERO"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH [tag]",
                "value": "63"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "JUMPI"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP2"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP3"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "15"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP3"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "5441524745545F4E4F545F415554484F52495A45440000000000000000000000"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP3"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MSTORE"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "MLOAD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "DUP2"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SUB"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "ADD"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "SWAP1"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "REVERT"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "tag",
                "value": "63"
              },
              {
                "begin": 4265,
                "end": 4351,
                "name": "JUMPDEST"
              },
              {
                "begin": 4390,
                "end": 4401,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4390,
                "end": 4408,
                "name": "SLOAD"
              },
              {
                "begin": 4382,
                "end": 4408,
                "name": "DUP2"
              },
              {
                "begin": 4382,
                "end": 4408,
                "name": "LT"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH [tag]",
                "value": "64"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "JUMPI"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP2"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP3"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP3"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "494E4445585F4F55545F4F465F424F554E445300000000000000000000000000"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP3"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MSTORE"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "MLOAD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "DUP2"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SUB"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "ADD"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "SWAP1"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "REVERT"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "tag",
                "value": "64"
              },
              {
                "begin": 4361,
                "end": 4453,
                "name": "JUMPDEST"
              },
              {
                "begin": 4506,
                "end": 4512,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4484,
                "end": 4512,
                "name": "AND"
              },
              {
                "begin": 4484,
                "end": 4495,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4496,
                "end": 4501,
                "name": "DUP3"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "DUP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SLOAD"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "DUP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "LT"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "ISZERO"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "ISZERO"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "PUSH [tag]",
                "value": "65"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "JUMPI"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "INVALID"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "tag",
                "value": "65"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "JUMPDEST"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SWAP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "DUP3"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "MSTORE"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SWAP1"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SWAP2"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "KECCAK256"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "ADD"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4484,
                "end": 4502,
                "name": "AND"
              },
              {
                "begin": 4484,
                "end": 4512,
                "name": "EQ"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH [tag]",
                "value": "67"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "JUMPI"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP2"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP3"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "1B"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP3"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "415554484F52495A45445F414444524553535F4D49534D415443480000000000"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP3"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MSTORE"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "MLOAD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "DUP2"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SUB"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "ADD"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "SWAP1"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "REVERT"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "tag",
                "value": "67"
              },
              {
                "begin": 4463,
                "end": 4565,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "DUP3"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "AND"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "SWAP1"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "DUP2"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "MSTORE"
              },
              {
                "begin": 4583,
                "end": 4593,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "MSTORE"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "SWAP1"
              },
              {
                "begin": 4583,
                "end": 4601,
                "name": "KECCAK256"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "DUP1"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "AND"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "SWAP1"
              },
              {
                "begin": 4576,
                "end": 4601,
                "name": "SSTORE"
              },
              {
                "begin": 4632,
                "end": 4643,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4644,
                "end": 4662,
                "name": "DUP1"
              },
              {
                "begin": 4644,
                "end": 4662,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4644,
                "end": 4666,
                "name": "DUP2"
              },
              {
                "begin": 4644,
                "end": 4666,
                "name": "ADD"
              },
              {
                "begin": 4644,
                "end": 4666,
                "name": "SWAP1"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "DUP2"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "LT"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "PUSH [tag]",
                "value": "68"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "JUMPI"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "INVALID"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "tag",
                "value": "68"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "JUMPDEST"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "DUP3"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "MSTORE"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "KECCAK256"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "ADD"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SLOAD"
              },
              {
                "begin": 4611,
                "end": 4622,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "DUP1"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP3"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "AND"
              },
              {
                "begin": 4632,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4623,
                "end": 4628,
                "name": "DUP4"
              },
              {
                "begin": 4623,
                "end": 4628,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "DUP2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "LT"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "PUSH [tag]",
                "value": "70"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "JUMPI"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "INVALID"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "tag",
                "value": "70"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "JUMPDEST"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "DUP3"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "MSTORE"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "KECCAK256"
              },
              {
                "begin": 4611,
                "end": 4629,
                "name": "ADD"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "DUP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "AND"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP3"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP3"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "AND"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP2"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "OR"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SWAP1"
              },
              {
                "begin": 4611,
                "end": 4667,
                "name": "SSTORE"
              },
              {
                "begin": 4677,
                "end": 4688,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "DUP1"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "ADD"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "SWAP1"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "PUSH [tag]",
                "value": "72"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "SWAP1"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "DUP3"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "PUSH [tag]",
                "value": "59"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "JUMP",
                "value": "[in]"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "tag",
                "value": "72"
              },
              {
                "begin": 4677,
                "end": 4700,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "MLOAD"
              },
              {
                "begin": 4748,
                "end": 4758,
                "name": "CALLER"
              },
              {
                "begin": 4748,
                "end": 4758,
                "name": "SWAP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "DUP5"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "AND"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "SWAP1"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "PUSH",
                "value": "1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "SWAP1"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "SWAP1"
              },
              {
                "begin": 4715,
                "end": 4759,
                "name": "LOG3"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "POP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "POP"
              },
              {
                "begin": 4123,
                "end": 4766,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "tag",
                "value": "27"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMPDEST"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MSTORE"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "MSTORE"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SWAP1"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "KECCAK256"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "SLOAD"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "PUSH",
                "value": "FF"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "AND"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "DUP2"
              },
              {
                "begin": 2805,
                "end": 2848,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "30"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4944,
                "end": 4953,
                "name": "PUSH",
                "value": "60"
              },
              {
                "begin": 4983,
                "end": 4994,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SLOAD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MUL"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MLOAD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP3"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP3"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SLOAD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ISZERO"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH [tag]",
                "value": "74"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPI"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MUL"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP3"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "KECCAK256"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "tag",
                "value": "75"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPDEST"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "AND"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "MSTORE"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP2"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "ADD"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "DUP4"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "GT"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "PUSH [tag]",
                "value": "75"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPI"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "tag",
                "value": "74"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "JUMPDEST"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "SWAP1"
              },
              {
                "begin": 4976,
                "end": 4994,
                "name": "POP"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "tag",
                "value": "73"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMPDEST"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "SWAP1"
              },
              {
                "begin": 4863,
                "end": 5001,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "36"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "77"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "E5"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "461BCD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MUL"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH data",
                "value": "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP4"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "CODECOPY"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "DUP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SWAP2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "77"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "DUP2"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "AND"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "ISZERO"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "PUSH [tag]",
                "value": "79"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "JUMPI"
              },
              {
                "begin": 1109,
                "end": 1114,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "DUP1"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "AND"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "A0"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "2"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "EXP"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "SUB"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "DUP4"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "AND"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "OR"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SWAP1"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SSTORE"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "tag",
                "value": "79"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "POP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "tag",
                "value": "59"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPDEST"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SLOAD"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP4"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SSTORE"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "GT"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "ISZERO"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "81"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP4"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "MSTORE"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SWAP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "KECCAK256"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "81"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SWAP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "ADD"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SWAP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP4"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "ADD"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "82"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMP",
                "value": "[in]"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "tag",
                "value": "81"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPDEST"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "POP"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "POP"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "POP"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "tag",
                "value": "82"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPDEST"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "73"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SWAP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SWAP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "tag",
                "value": "84"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPDEST"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP3"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "GT"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "ISZERO"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "85"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPI"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "DUP2"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SSTORE"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH",
                "value": "1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "ADD"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "PUSH [tag]",
                "value": "84"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMP"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "tag",
                "value": "85"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMPDEST"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "POP"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "SWAP1"
              },
              {
                "begin": 2510,
                "end": 5003,
                "name": "JUMP"
              }
            ],
            ".data": {
              "B991A9AEF98A22E414125411C5638C5CF1EE71D0D603033758B74303534EC100": "4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000"
            }
          }
        }
      },
      "bytecode": "608060405260008054600160a060020a0319163317905561098d806100256000396000f30060806040526004361061008d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342f1181e8114610092578063494503d4146100b557806370712939146100e95780638da5cb5b1461010a5780639ad267441461011f578063b918161114610143578063d39de6e914610178578063f2fde38b146101dd575b600080fd5b34801561009e57600080fd5b506100b3600160a060020a03600435166101fe565b005b3480156100c157600080fd5b506100cd60043561035a565b60408051600160a060020a039092168252519081900360200190f35b3480156100f557600080fd5b506100b3600160a060020a0360043516610382565b34801561011657600080fd5b506100cd61056e565b34801561012b57600080fd5b506100b3600160a060020a036004351660243561057d565b34801561014f57600080fd5b50610164600160a060020a03600435166107f7565b604080519115158252519081900360200190f35b34801561018457600080fd5b5061018d61080c565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101c95781810151838201526020016101b1565b505050509050019250505060405180910390f35b3480156101e957600080fd5b506100b3600160a060020a036004351661086f565b600054600160a060020a0316331461024e576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a03811660009081526001602052604090205460ff16156102bf576040805160e560020a62461bcd02815260206004820152601960248201527f5441524745545f414c52454144595f415554484f52495a454400000000000000604482015290519081900360640190fd5b600160a060020a0381166000818152600160208190526040808320805460ff19168317905560028054928301815583527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909101805473ffffffffffffffffffffffffffffffffffffffff191684179055513392917f3147867c59d17e8fa9d522465651d44aae0a9e38f902f3475b97e58072f0ed4c91a350565b600280548290811061036857fe5b600091825260209091200154600160a060020a0316905081565b60008054600160a060020a031633146103d3576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff161515610445576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b50600160a060020a0381166000908152600160205260408120805460ff191690555b6002548110156105345781600160a060020a031660028281548110151561048a57fe5b600091825260209091200154600160a060020a0316141561052c576002805460001981019081106104b757fe5b60009182526020909120015460028054600160a060020a0390921691839081106104dd57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560028054600019019061052690826108fa565b50610534565b600101610467565b6040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b600054600160a060020a031681565b600054600160a060020a031633146105cd576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff16151561063f576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b6002548110610698576040805160e560020a62461bcd02815260206004820152601360248201527f494e4445585f4f55545f4f465f424f554e445300000000000000000000000000604482015290519081900360640190fd5b81600160a060020a03166002828154811015156106b157fe5b600091825260209091200154600160a060020a03161461071b576040805160e560020a62461bcd02815260206004820152601b60248201527f415554484f52495a45445f414444524553535f4d49534d415443480000000000604482015290519081900360640190fd5b600160a060020a0382166000908152600160205260409020805460ff1916905560028054600019810190811061074d57fe5b60009182526020909120015460028054600160a060020a03909216918390811061077357fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556002805460001901906107bc90826108fa565b506040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b60016020526000908152604090205460ff1681565b6060600280548060200260200160405190810160405280929190818152602001828054801561086457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610846575b505050505090505b90565b600054600160a060020a031633146108bf576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a038116156108f7576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b50565b81548183558181111561091e5760008381526020902061091e918101908301610923565b505050565b61086c91905b8082111561093d5760008155600101610929565b509056004f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000a165627a7a72305820af07a9a1cee08c51a2e55a2942d031d0e4d7857efe7987147ae4790bd5a87b9f0029",
      "functionHashes": {
        "addAuthorizedAddress(address)": "42f1181e",
        "authorities(uint256)": "494503d4",
        "authorized(address)": "b9181611",
        "getAuthorizedAddresses()": "d39de6e9",
        "owner()": "8da5cb5b",
        "removeAuthorizedAddress(address)": "70712939",
        "removeAuthorizedAddressAtIndex(address,uint256)": "9ad26744",
        "transferOwnership(address)": "f2fde38b"
      },
      "gasEstimates": {
        "creation": [
          20792,
          489000
        ],
        "external": {
          "addAuthorizedAddress(address)": null,
          "authorities(uint256)": 859,
          "authorized(address)": 653,
          "getAuthorizedAddresses()": null,
          "owner()": 603,
          "removeAuthorizedAddress(address)": null,
          "removeAuthorizedAddressAtIndex(address,uint256)": null,
          "transferOwnership(address)": null
        },
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"authorities\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeAuthorizedAddressAtIndex\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressRemoved\",\"type\":\"event\"}]",
      "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"addAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"authorities\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"}],\"name\":\"removeAuthorizedAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"removeAuthorizedAddressAtIndex\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorized\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAuthorizedAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"AuthorizedAddressRemoved\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"addAuthorizedAddress(address)\":{\"details\":\"Authorizes an address.\",\"params\":{\"target\":\"Address to authorize.\"}},\"getAuthorizedAddresses()\":{\"details\":\"Gets all authorized addresses.\",\"return\":\"Array of authorized addresses.\"},\"removeAuthorizedAddress(address)\":{\"details\":\"Removes authorizion of an address.\",\"params\":{\"target\":\"Address to remove authorization from.\"}},\"removeAuthorizedAddressAtIndex(address,uint256)\":{\"details\":\"Removes authorizion of an address.\",\"params\":{\"index\":\"Index of target in authorities array.\",\"target\":\"Address to remove authorization from.\"}}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"ERC20Proxy.sol\":\"MixinAuthorizable\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"ERC20Proxy.sol\":{\"keccak256\":\"0xce71a992d7d006d4a65386bb6f2d9abea0bbb55cc4cefbbc607934dd6622ae4c\",\"urls\":[\"bzzr://46bd0a2782f126d4846f2b4627c6dca1db84d38f34b02a2e59c4ff7e72da119d\"]}},\"version\":1}",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0x98D DUP1 PUSH2 0x25 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x8D JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x42F1181E DUP2 EQ PUSH2 0x92 JUMPI DUP1 PUSH4 0x494503D4 EQ PUSH2 0xB5 JUMPI DUP1 PUSH4 0x70712939 EQ PUSH2 0xE9 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x10A JUMPI DUP1 PUSH4 0x9AD26744 EQ PUSH2 0x11F JUMPI DUP1 PUSH4 0xB9181611 EQ PUSH2 0x143 JUMPI DUP1 PUSH4 0xD39DE6E9 EQ PUSH2 0x178 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x1DD JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x1FE JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xC1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xCD PUSH1 0x4 CALLDATALOAD PUSH2 0x35A JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x382 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x116 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xCD PUSH2 0x56E JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x12B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH1 0x24 CALLDATALOAD PUSH2 0x57D JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x14F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x164 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x7F7 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x184 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x18D PUSH2 0x80C JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 DUP2 ADD SWAP2 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1C9 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x1B1 JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1E9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB3 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x86F JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x24E JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0x942 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x2BF JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x19 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x5441524745545F414C52454144595F415554484F52495A454400000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 DUP2 SWAP1 MSTORE PUSH1 0x40 DUP1 DUP4 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND DUP4 OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD SWAP3 DUP4 ADD DUP2 SSTORE DUP4 MSTORE PUSH32 0x405787FA12A823E0F2B7631CC41B3BA8828B3321CA811111FA75CD3AA3BB5ACE SWAP1 SWAP2 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND DUP5 OR SWAP1 SSTORE MLOAD CALLER SWAP3 SWAP2 PUSH32 0x3147867C59D17E8FA9D522465651D44AAE0A9E38F902F3475B97E58072F0ED4C SWAP2 LOG3 POP JUMP JUMPDEST PUSH1 0x2 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x368 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x3D3 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0x942 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x445 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x15 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x5441524745545F4E4F545F415554484F52495A45440000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST POP PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE JUMPDEST PUSH1 0x2 SLOAD DUP2 LT ISZERO PUSH2 0x534 JUMPI DUP2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x48A JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND EQ ISZERO PUSH2 0x52C JUMPI PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT DUP2 ADD SWAP1 DUP2 LT PUSH2 0x4B7 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 DUP4 SWAP1 DUP2 LT PUSH2 0x4DD JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT ADD SWAP1 PUSH2 0x526 SWAP1 DUP3 PUSH2 0x8FA JUMP JUMPDEST POP PUSH2 0x534 JUMP JUMPDEST PUSH1 0x1 ADD PUSH2 0x467 JUMP JUMPDEST PUSH1 0x40 MLOAD CALLER SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND SWAP1 PUSH32 0x1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0 SWAP1 PUSH1 0x0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x5CD JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0x942 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH2 0x63F JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x15 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x5441524745545F4E4F545F415554484F52495A45440000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x2 SLOAD DUP2 LT PUSH2 0x698 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x494E4445585F4F55545F4F465F424F554E445300000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST DUP2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x6B1 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND EQ PUSH2 0x71B JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x415554484F52495A45445F414444524553535F4D49534D415443480000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT DUP2 ADD SWAP1 DUP2 LT PUSH2 0x74D JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x2 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 DUP4 SWAP1 DUP2 LT PUSH2 0x773 JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 NOT ADD SWAP1 PUSH2 0x7BC SWAP1 DUP3 PUSH2 0x8FA JUMP JUMPDEST POP PUSH1 0x40 MLOAD CALLER SWAP1 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP5 AND SWAP1 PUSH32 0x1F32C1B084E2DE0713B8FB16BD46BB9DF710A3DBEAE2F3CA93AF46E016DCC6B0 SWAP1 PUSH1 0x0 SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x2 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x864 JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x846 JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x8BF JUMPI PUSH1 0x40 DUP1 MLOAD PUSH1 0xE5 PUSH1 0x2 EXP PUSH3 0x461BCD MUL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH1 0x0 DUP1 MLOAD PUSH1 0x20 PUSH2 0x942 DUP4 CODECOPY DUP2 MLOAD SWAP2 MSTORE PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP2 AND ISZERO PUSH2 0x8F7 JUMPI PUSH1 0x0 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB DUP4 AND OR SWAP1 SSTORE JUMPDEST POP JUMP JUMPDEST DUP2 SLOAD DUP2 DUP4 SSTORE DUP2 DUP2 GT ISZERO PUSH2 0x91E JUMPI PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 SWAP1 KECCAK256 PUSH2 0x91E SWAP2 DUP2 ADD SWAP1 DUP4 ADD PUSH2 0x923 JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH2 0x86C SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x93D JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x929 JUMP JUMPDEST POP SWAP1 JUMP STOP 0x4f 0x4e 0x4c MSIZE 0x5f NUMBER 0x4f 0x4e SLOAD MSTORE COINBASE NUMBER SLOAD 0x5f 0x4f JUMPI 0x4e GASLIMIT MSTORE STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xaf SMOD 0xa9 LOG1 0xce 0xe0 DUP13 MLOAD LOG2 0xe5 GAS 0x29 TIMESTAMP 0xd0 BALANCE 0xd0 0xe4 0xd7 DUP6 PUSH31 0xFE7987147AE4790BD5A87B9F00290000000000000000000000000000000000 ",
      "runtimeBytecode": "60806040526004361061008d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342f1181e8114610092578063494503d4146100b557806370712939146100e95780638da5cb5b1461010a5780639ad267441461011f578063b918161114610143578063d39de6e914610178578063f2fde38b146101dd575b600080fd5b34801561009e57600080fd5b506100b3600160a060020a03600435166101fe565b005b3480156100c157600080fd5b506100cd60043561035a565b60408051600160a060020a039092168252519081900360200190f35b3480156100f557600080fd5b506100b3600160a060020a0360043516610382565b34801561011657600080fd5b506100cd61056e565b34801561012b57600080fd5b506100b3600160a060020a036004351660243561057d565b34801561014f57600080fd5b50610164600160a060020a03600435166107f7565b604080519115158252519081900360200190f35b34801561018457600080fd5b5061018d61080c565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101c95781810151838201526020016101b1565b505050509050019250505060405180910390f35b3480156101e957600080fd5b506100b3600160a060020a036004351661086f565b600054600160a060020a0316331461024e576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a03811660009081526001602052604090205460ff16156102bf576040805160e560020a62461bcd02815260206004820152601960248201527f5441524745545f414c52454144595f415554484f52495a454400000000000000604482015290519081900360640190fd5b600160a060020a0381166000818152600160208190526040808320805460ff19168317905560028054928301815583527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909101805473ffffffffffffffffffffffffffffffffffffffff191684179055513392917f3147867c59d17e8fa9d522465651d44aae0a9e38f902f3475b97e58072f0ed4c91a350565b600280548290811061036857fe5b600091825260209091200154600160a060020a0316905081565b60008054600160a060020a031633146103d3576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff161515610445576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b50600160a060020a0381166000908152600160205260408120805460ff191690555b6002548110156105345781600160a060020a031660028281548110151561048a57fe5b600091825260209091200154600160a060020a0316141561052c576002805460001981019081106104b757fe5b60009182526020909120015460028054600160a060020a0390921691839081106104dd57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a039290921691909117905560028054600019019061052690826108fa565b50610534565b600101610467565b6040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b600054600160a060020a031681565b600054600160a060020a031633146105cd576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a03821660009081526001602052604090205460ff16151561063f576040805160e560020a62461bcd02815260206004820152601560248201527f5441524745545f4e4f545f415554484f52495a45440000000000000000000000604482015290519081900360640190fd5b6002548110610698576040805160e560020a62461bcd02815260206004820152601360248201527f494e4445585f4f55545f4f465f424f554e445300000000000000000000000000604482015290519081900360640190fd5b81600160a060020a03166002828154811015156106b157fe5b600091825260209091200154600160a060020a03161461071b576040805160e560020a62461bcd02815260206004820152601b60248201527f415554484f52495a45445f414444524553535f4d49534d415443480000000000604482015290519081900360640190fd5b600160a060020a0382166000908152600160205260409020805460ff1916905560028054600019810190811061074d57fe5b60009182526020909120015460028054600160a060020a03909216918390811061077357fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556002805460001901906107bc90826108fa565b506040513390600160a060020a038416907f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b090600090a35050565b60016020526000908152604090205460ff1681565b6060600280548060200260200160405190810160405280929190818152602001828054801561086457602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610846575b505050505090505b90565b600054600160a060020a031633146108bf576040805160e560020a62461bcd0281526020600482015260136024820152600080516020610942833981519152604482015290519081900360640190fd5b600160a060020a038116156108f7576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b50565b81548183558181111561091e5760008381526020902061091e918101908301610923565b505050565b61086c91905b8082111561093d5760008155600101610929565b509056004f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000a165627a7a72305820af07a9a1cee08c51a2e55a2942d031d0e4d7857efe7987147ae4790bd5a87b9f0029",
      "srcmap": "2510:2493:0:-;;;804:5;:18;;-1:-1:-1;;;;;;804:18:0;812:10;804:18;;;2510:2493;;;;;;",
      "srcmapRuntime": "2510:2493:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2969:320;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2969:320:0;-1:-1:-1;;;;;2969:320:0;;;;;;;2854:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2854:28:0;;;;;;;;;-1:-1:-1;;;;;2854:28:0;;;;;;;;;;;;;;3403:547;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3403:547:0;-1:-1:-1;;;;;3403:547:0;;;;;733:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;733:20:0;;;;4123:643;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4123:643:0;-1:-1:-1;;;;;4123:643:0;;;;;;;2805:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2805:43:0;-1:-1:-1;;;;;2805:43:0;;;;;;;;;;;;;;;;;;;;;;;4863:138;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4863:138:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;4863:138:0;;;;;;;;;;;;;;;;;975:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;975:167:0;-1:-1:-1;;;;;975:167:0;;;;;2969:320;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;3086:18:0;;;;;;:10;:18;;;;;;;;3085:19;3064:91;;;;;-1:-1:-1;;;;;3064:91:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3166:18:0;;;;;;3187:4;3166:18;;;;;;;;:25;;-1:-1:-1;;3166:25:0;;;;;3201:11;27:10:-1;;23:18;;;45:23;;3201:24:0;;;;;;;;-1:-1:-1;;3201:24:0;;;;;3240:42;3271:10;;3166:18;3240:42;;;2969:320;:::o;2854:28::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2854:28:0;;-1:-1:-1;2854:28:0;:::o;3403:547::-;3638:9;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;3522:18:0;;;;;;:10;:18;;;;;;;;3501:86;;;;;;;-1:-1:-1;;;;;3501:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3605:18:0;;;;;;:10;:18;;;;;3598:25;;-1:-1:-1;;3598:25:0;;;3633:252;3657:11;:18;3653:22;;3633:252;;;3718:6;-1:-1:-1;;;;;3700:24:0;:11;3712:1;3700:14;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3700:14:0;:24;3696:179;;;3761:11;3773:18;;-1:-1:-1;;3773:22:0;;;3761:35;;;;;;;;;;;;;;;;3744:11;:14;;-1:-1:-1;;;;;3761:35:0;;;;3756:1;;3744:14;;;;;;;;;;;;;;;:52;;-1:-1:-1;;3744:52:0;-1:-1:-1;;;;;3744:52:0;;;;;;;;;;3814:11;:23;;-1:-1:-1;;3814:23:0;;;;;;:::i;:::-;;3855:5;;3696:179;3677:3;;3633:252;;;3899:44;;3932:10;;-1:-1:-1;;;;;3899:44:0;;;;;;;;3403:547;;:::o;733:20::-;;;-1:-1:-1;;;;;733:20:0;;:::o;4123:643::-;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;4286:18:0;;;;;;:10;:18;;;;;;;;4265:86;;;;;;;-1:-1:-1;;;;;4265:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;4390:11;:18;4382:26;;4361:92;;;;;-1:-1:-1;;;;;4361:92:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;4506:6;-1:-1:-1;;;;;4484:28:0;:11;4496:5;4484:18;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4484:18:0;:28;4463:102;;;;;-1:-1:-1;;;;;4463:102:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4583:18:0;;;;;;:10;:18;;;;;4576:25;;-1:-1:-1;;4576:25:0;;;4632:11;4644:18;;-1:-1:-1;;4644:22:0;;;4632:35;;;;;;;;;;;;;;;;4611:11;:18;;-1:-1:-1;;;;;4632:35:0;;;;4623:5;;4611:18;;;;;;;;;;;;;;;:56;;-1:-1:-1;;4611:56:0;-1:-1:-1;;;;;4611:56:0;;;;;;;;;;4677:11;:23;;-1:-1:-1;;4677:23:0;;;;;;:::i;:::-;-1:-1:-1;4715:44:0;;4748:10;;-1:-1:-1;;;;;4715:44:0;;;;;;;;4123:643;;:::o;2805:43::-;;;;;;;;;;;;;;;:::o;4863:138::-;4944:9;4983:11;4976:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4976:18:0;;;;;;;;;;;;;;;;;;;;;;;4863:138;;:::o;975:167::-;901:5;;-1:-1:-1;;;;;901:5:0;887:10;:19;866:85;;;;;-1:-1:-1;;;;;866:85:0;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;866:85:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;1071:22:0;;;1067:69;;1109:5;:16;;-1:-1:-1;;1109:16:0;-1:-1:-1;;;;;1109:16:0;;;;;1067:69;975:167;:::o;2510:2493::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;"
    },
    "ERC20Proxy.sol:Ownable": {
      "assembly": {
        ".code": [
          {
            "begin": 694,
            "end": 1144,
            "name": "PUSH",
            "value": "80"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "PUSH",
            "value": "40"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "MSTORE"
          },
          {
            "begin": 760,
            "end": 829,
            "name": "CALLVALUE"
          },
          {
            "begin": 8,
            "end": 17,
            "name": "DUP1"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "ISZERO"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "PUSH [tag]",
            "value": "1"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "JUMPI"
          },
          {
            "begin": 30,
            "end": 31,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 27,
            "end": 28,
            "name": "DUP1"
          },
          {
            "begin": 20,
            "end": 32,
            "name": "REVERT"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "tag",
            "value": "1"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "JUMPDEST"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 804,
            "end": 809,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "DUP1"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SLOAD"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "A0"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "PUSH",
            "value": "2"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "EXP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "SUB"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "NOT"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "AND"
          },
          {
            "begin": 812,
            "end": 822,
            "name": "CALLER"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "OR"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SWAP1"
          },
          {
            "begin": 804,
            "end": 822,
            "name": "SSTORE"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "PUSH #[$]",
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "DUP1"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "PUSH [$]",
            "value": "0000000000000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "CODECOPY"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 694,
            "end": 1144,
            "name": "RETURN"
          }
        ],
        ".data": {
          "0": {
            ".auxdata": "a165627a7a7230582065f458c9d65ceb9de947052c6f4b8ba663c0f6e9750d1ffd381277d10bb1d5880029",
            ".code": [
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "80"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "MSTORE"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "CALLDATASIZE"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "LT"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH [tag]",
                "value": "1"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "JUMPI"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "FFFFFFFF"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "100000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "DIV"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "AND"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "8DA5CB5B"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "DUP2"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "EQ"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH [tag]",
                "value": "2"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "JUMPI"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "DUP1"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "F2FDE38B"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "EQ"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH [tag]",
                "value": "3"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "JUMPI"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "tag",
                "value": "1"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "JUMPDEST"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "DUP1"
              },
              {
                "begin": 694,
                "end": 1144,
                "name": "REVERT"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "2"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "4"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "4"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "POP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH [tag]",
                "value": "5"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH [tag]",
                "value": "6"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "5"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "DUP1"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "MLOAD"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SWAP1"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SWAP3"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "AND"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "DUP3"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "MSTORE"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "MLOAD"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SWAP1"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "DUP2"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SWAP1"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SUB"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "ADD"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SWAP1"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "RETURN"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "3"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "CALLVALUE"
              },
              {
                "begin": 8,
                "end": 17,
                "name": "DUP1"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "ISZERO"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "PUSH [tag]",
                "value": "7"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPI"
              },
              {
                "begin": 30,
                "end": 31,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 27,
                "end": 28,
                "name": "DUP1"
              },
              {
                "begin": 20,
                "end": 32,
                "name": "REVERT"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "tag",
                "value": "7"
              },
              {
                "begin": 5,
                "end": 7,
                "name": "JUMPDEST"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "POP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH [tag]",
                "value": "8"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "CALLDATALOAD"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "AND"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "PUSH [tag]",
                "value": "9"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "8"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "STOP"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "tag",
                "value": "6"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMPDEST"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "SLOAD"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "AND"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "DUP2"
              },
              {
                "begin": 733,
                "end": 753,
                "name": "JUMP",
                "value": "[out]"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "tag",
                "value": "9"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMPDEST"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "SLOAD"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 901,
                "end": 906,
                "name": "AND"
              },
              {
                "begin": 887,
                "end": 897,
                "name": "CALLER"
              },
              {
                "begin": 887,
                "end": 906,
                "name": "EQ"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH [tag]",
                "value": "11"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPI"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "40"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "8C379A000000000000000000000000000000000000000000000000000000000"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "20"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "13"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "24"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "4F4E4C595F434F4E54524143545F4F574E455200000000000000000000000000"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "44"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP3"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MSTORE"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "MLOAD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "DUP2"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SUB"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "PUSH",
                "value": "64"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "ADD"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "SWAP1"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "REVERT"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "tag",
                "value": "11"
              },
              {
                "begin": 866,
                "end": 951,
                "name": "JUMPDEST"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "DUP2"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "AND"
              },
              {
                "begin": 1071,
                "end": 1093,
                "name": "ISZERO"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "PUSH [tag]",
                "value": "13"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "JUMPI"
              },
              {
                "begin": 1109,
                "end": 1114,
                "name": "PUSH",
                "value": "0"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "DUP1"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SLOAD"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": -1,
                "end": -1,
                "name": "NOT"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "AND"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "PUSH",
                "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "DUP4"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "AND"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "OR"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SWAP1"
              },
              {
                "begin": 1109,
                "end": 1125,
                "name": "SSTORE"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "tag",
                "value": "13"
              },
              {
                "begin": 1067,
                "end": 1136,
                "name": "JUMPDEST"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "POP"
              },
              {
                "begin": 975,
                "end": 1142,
                "name": "JUMP",
                "value": "[out]"
              }
            ]
          }
        }
      },
      "bytecode": "608060405234801561001057600080fd5b5060008054600160a060020a031916331790556101e1806100326000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b1461008e575b600080fd5b34801561005c57600080fd5b506100656100be565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561009a57600080fd5b506100bc73ffffffffffffffffffffffffffffffffffffffff600435166100da565b005b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461016057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116156101b2576000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff83161790555b505600a165627a7a7230582065f458c9d65ceb9de947052c6f4b8ba663c0f6e9750d1ffd381277d10bb1d5880029",
      "functionHashes": {
        "owner()": "8da5cb5b",
        "transferOwnership(address)": "f2fde38b"
      },
      "gasEstimates": {
        "creation": [
          20439,
          96200
        ],
        "external": {
          "owner()": 399,
          "transferOwnership(address)": 20650
        },
        "internal": {}
      },
      "interface": "[{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]",
      "metadata": "{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"ERC20Proxy.sol\":\"Ownable\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"ERC20Proxy.sol\":{\"keccak256\":\"0xce71a992d7d006d4a65386bb6f2d9abea0bbb55cc4cefbbc607934dd6622ae4c\",\"urls\":[\"bzzr://46bd0a2782f126d4846f2b4627c6dca1db84d38f34b02a2e59c4ff7e72da119d\"]}},\"version\":1}",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0x1E1 DUP1 PUSH2 0x32 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4B JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x8DA5CB5B DUP2 EQ PUSH2 0x50 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x8E JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x5C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x65 PUSH2 0xBE JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF PUSH1 0x4 CALLDATALOAD AND PUSH2 0xDA JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x160 JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x13 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F4E4C595F434F4E54524143545F4F574E455200000000000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 AND ISZERO PUSH2 0x1B2 JUMPI PUSH1 0x0 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 AND OR SWAP1 SSTORE JUMPDEST POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 PUSH6 0xF458C9D65CEB SWAP14 0xe9 0x47 SDIV 0x2c PUSH16 0x4B8BA663C0F6E9750D1FFD381277D10B 0xb1 0xd5 DUP9 STOP 0x29 ",
      "runtimeBytecode": "60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b1461008e575b600080fd5b34801561005c57600080fd5b506100656100be565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561009a57600080fd5b506100bc73ffffffffffffffffffffffffffffffffffffffff600435166100da565b005b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461016057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4f4e4c595f434f4e54524143545f4f574e455200000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116156101b2576000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff83161790555b505600a165627a7a7230582065f458c9d65ceb9de947052c6f4b8ba663c0f6e9750d1ffd381277d10bb1d5880029",
      "srcmap": "694:450:0:-;;;760:69;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;804:5:0;:18;;-1:-1:-1;;;;;;804:18:0;812:10;804:18;;;694:450;;;;;;",
      "srcmapRuntime": "694:450:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;733:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;733:20:0;;;;;;;;;;;;;;;;;;;;;;;975:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;975:167:0;;;;;;;;;733:20;;;;;;:::o;975:167::-;901:5;;;;887:10;:19;866:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1071:22;;;;1067:69;;1109:5;:16;;-1:-1:-1;;1109:16:0;;;;;;;1067:69;975:167;:::o"
    }
  },
  "sourceList": [
    "ERC20Proxy.sol"
  ],
  "sources": {
    "ERC20Proxy.sol": {
      "AST": {
        "attributes": {
          "absolutePath": "ERC20Proxy.sol",
          "exportedSymbols": {
            "ERC20Proxy": [
              316
            ],
            "IAuthorizable": [
              78
            ],
            "IOwnable": [
              7
            ],
            "MAuthorizable": [
              100
            ],
            "MixinAuthorizable": [
              293
            ],
            "Ownable": [
              52
            ]
          }
        },
        "children": [
          {
            "attributes": {
              "literals": [
                "solidity",
                "0.4",
                ".24"
              ]
            },
            "id": 1,
            "name": "PragmaDirective",
            "src": "580:23:0"
          },
          {
            "attributes": {
              "baseContracts": [
                null
              ],
              "contractDependencies": [
                null
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": false,
              "linearizedBaseContracts": [
                7
              ],
              "name": "IOwnable",
              "scope": 317
            },
            "children": [
              {
                "attributes": {
                  "body": null,
                  "constant": false,
                  "documentation": null,
                  "implemented": false,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "transferOwnership",
                  "payable": false,
                  "scope": 7,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newOwner",
                          "scope": 6,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2,
                            "name": "ElementaryTypeName",
                            "src": "657:7:0"
                          }
                        ],
                        "id": 3,
                        "name": "VariableDeclaration",
                        "src": "657:16:0"
                      }
                    ],
                    "id": 4,
                    "name": "ParameterList",
                    "src": "656:18:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 5,
                    "name": "ParameterList",
                    "src": "689:0:0"
                  }
                ],
                "id": 6,
                "name": "FunctionDefinition",
                "src": "630:60:0"
              }
            ],
            "id": 7,
            "name": "ContractDefinition",
            "src": "605:87:0"
          },
          {
            "attributes": {
              "contractDependencies": [
                7
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "linearizedBaseContracts": [
                52,
                7
              ],
              "name": "Ownable",
              "scope": 317
            },
            "children": [
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "IOwnable",
                      "referencedDeclaration": 7,
                      "type": "contract IOwnable"
                    },
                    "id": 8,
                    "name": "UserDefinedTypeName",
                    "src": "718:8:0"
                  }
                ],
                "id": 9,
                "name": "InheritanceSpecifier",
                "src": "718:8:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "owner",
                  "scope": 52,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 10,
                    "name": "ElementaryTypeName",
                    "src": "733:7:0"
                  }
                ],
                "id": 11,
                "name": "VariableDeclaration",
                "src": "733:20:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "documentation": null,
                  "implemented": true,
                  "isConstructor": true,
                  "modifiers": [
                    null
                  ],
                  "name": "",
                  "payable": false,
                  "scope": 52,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 12,
                    "name": "ParameterList",
                    "src": "772:2:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 13,
                    "name": "ParameterList",
                    "src": "794:0:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 11,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 14,
                                "name": "Identifier",
                                "src": "804:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 331,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 15,
                                    "name": "Identifier",
                                    "src": "812:3:0"
                                  }
                                ],
                                "id": 16,
                                "name": "MemberAccess",
                                "src": "812:10:0"
                              }
                            ],
                            "id": 17,
                            "name": "Assignment",
                            "src": "804:18:0"
                          }
                        ],
                        "id": 18,
                        "name": "ExpressionStatement",
                        "src": "804:18:0"
                      }
                    ],
                    "id": 19,
                    "name": "Block",
                    "src": "794:35:0"
                  }
                ],
                "id": 20,
                "name": "FunctionDefinition",
                "src": "760:69:0"
              },
              {
                "attributes": {
                  "documentation": null,
                  "name": "onlyOwner",
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 21,
                    "name": "ParameterList",
                    "src": "853:2:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_b00f8a960991e7b0ce338f2640061ae5c81b71d70224bc24014744adc0514a1d",
                                      "typeString": "literal_string \"ONLY_CONTRACT_OWNER\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 22,
                                "name": "Identifier",
                                "src": "866:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 331,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 23,
                                        "name": "Identifier",
                                        "src": "887:3:0"
                                      }
                                    ],
                                    "id": 24,
                                    "name": "MemberAccess",
                                    "src": "887:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 11,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 25,
                                    "name": "Identifier",
                                    "src": "901:5:0"
                                  }
                                ],
                                "id": 26,
                                "name": "BinaryOperation",
                                "src": "887:19:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "4f4e4c595f434f4e54524143545f4f574e4552",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"ONLY_CONTRACT_OWNER\"",
                                  "value": "ONLY_CONTRACT_OWNER"
                                },
                                "id": 27,
                                "name": "Literal",
                                "src": "920:21:0"
                              }
                            ],
                            "id": 28,
                            "name": "FunctionCall",
                            "src": "866:85:0"
                          }
                        ],
                        "id": 29,
                        "name": "ExpressionStatement",
                        "src": "866:85:0"
                      },
                      {
                        "id": 30,
                        "name": "PlaceholderStatement",
                        "src": "961:1:0"
                      }
                    ],
                    "id": 31,
                    "name": "Block",
                    "src": "856:113:0"
                  }
                ],
                "id": 32,
                "name": "ModifierDefinition",
                "src": "835:134:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "documentation": null,
                  "implemented": true,
                  "isConstructor": false,
                  "name": "transferOwnership",
                  "payable": false,
                  "scope": 52,
                  "stateMutability": "nonpayable",
                  "superFunction": 6,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newOwner",
                          "scope": 51,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 33,
                            "name": "ElementaryTypeName",
                            "src": "1002:7:0"
                          }
                        ],
                        "id": 34,
                        "name": "VariableDeclaration",
                        "src": "1002:16:0"
                      }
                    ],
                    "id": 35,
                    "name": "ParameterList",
                    "src": "1001:18:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 38,
                    "name": "ParameterList",
                    "src": "1057:0:0"
                  },
                  {
                    "attributes": {
                      "arguments": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 32,
                          "type": "modifier ()",
                          "value": "onlyOwner"
                        },
                        "id": 36,
                        "name": "Identifier",
                        "src": "1043:9:0"
                      }
                    ],
                    "id": 37,
                    "name": "ModifierInvocation",
                    "src": "1043:9:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "falseBody": null
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 34,
                                  "type": "address",
                                  "value": "newOwner"
                                },
                                "id": 39,
                                "name": "Identifier",
                                "src": "1071:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 40,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1083:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 41,
                                    "name": "Literal",
                                    "src": "1091:1:0"
                                  }
                                ],
                                "id": 42,
                                "name": "FunctionCall",
                                "src": "1083:10:0"
                              }
                            ],
                            "id": 43,
                            "name": "BinaryOperation",
                            "src": "1071:22:0"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 11,
                                          "type": "address",
                                          "value": "owner"
                                        },
                                        "id": 44,
                                        "name": "Identifier",
                                        "src": "1109:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 34,
                                          "type": "address",
                                          "value": "newOwner"
                                        },
                                        "id": 45,
                                        "name": "Identifier",
                                        "src": "1117:8:0"
                                      }
                                    ],
                                    "id": 46,
                                    "name": "Assignment",
                                    "src": "1109:16:0"
                                  }
                                ],
                                "id": 47,
                                "name": "ExpressionStatement",
                                "src": "1109:16:0"
                              }
                            ],
                            "id": 48,
                            "name": "Block",
                            "src": "1095:41:0"
                          }
                        ],
                        "id": 49,
                        "name": "IfStatement",
                        "src": "1067:69:0"
                      }
                    ],
                    "id": 50,
                    "name": "Block",
                    "src": "1057:85:0"
                  }
                ],
                "id": 51,
                "name": "FunctionDefinition",
                "src": "975:167:0"
              }
            ],
            "id": 52,
            "name": "ContractDefinition",
            "src": "694:450:0"
          },
          {
            "attributes": {
              "contractDependencies": [
                7
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": false,
              "linearizedBaseContracts": [
                78,
                7
              ],
              "name": "IAuthorizable",
              "scope": 317
            },
            "children": [
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "IOwnable",
                      "referencedDeclaration": 7,
                      "type": "contract IOwnable"
                    },
                    "id": 53,
                    "name": "UserDefinedTypeName",
                    "src": "1176:8:0"
                  }
                ],
                "id": 54,
                "name": "InheritanceSpecifier",
                "src": "1176:8:0"
              },
              {
                "attributes": {
                  "body": null,
                  "constant": false,
                  "documentation": "@dev Authorizes an address.\n @param target Address to authorize.",
                  "implemented": false,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "addAuthorizedAddress",
                  "payable": false,
                  "scope": 78,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "external"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "target",
                          "scope": 59,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 55,
                            "name": "ElementaryTypeName",
                            "src": "1301:7:0"
                          }
                        ],
                        "id": 56,
                        "name": "VariableDeclaration",
                        "src": "1301:14:0"
                      }
                    ],
                    "id": 57,
                    "name": "ParameterList",
                    "src": "1300:16:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 58,
                    "name": "ParameterList",
                    "src": "1333:0:0"
                  }
                ],
                "id": 59,
                "name": "FunctionDefinition",
                "src": "1271:63:0"
              },
              {
                "attributes": {
                  "body": null,
                  "constant": false,
                  "documentation": "@dev Removes authorizion of an address.\n @param target Address to remove authorization from.",
                  "implemented": false,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "removeAuthorizedAddress",
                  "payable": false,
                  "scope": 78,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "external"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "target",
                          "scope": 64,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 60,
                            "name": "ElementaryTypeName",
                            "src": "1481:7:0"
                          }
                        ],
                        "id": 61,
                        "name": "VariableDeclaration",
                        "src": "1481:14:0"
                      }
                    ],
                    "id": 62,
                    "name": "ParameterList",
                    "src": "1480:16:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 63,
                    "name": "ParameterList",
                    "src": "1513:0:0"
                  }
                ],
                "id": 64,
                "name": "FunctionDefinition",
                "src": "1448:66:0"
              },
              {
                "attributes": {
                  "body": null,
                  "constant": false,
                  "documentation": "@dev Removes authorizion of an address.\n @param target Address to remove authorization from.\n @param index Index of target in authorities array.",
                  "implemented": false,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "removeAuthorizedAddressAtIndex",
                  "payable": false,
                  "scope": 78,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "external"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "target",
                          "scope": 71,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 65,
                            "name": "ElementaryTypeName",
                            "src": "1736:7:0"
                          }
                        ],
                        "id": 66,
                        "name": "VariableDeclaration",
                        "src": "1736:14:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "index",
                          "scope": 71,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 67,
                            "name": "ElementaryTypeName",
                            "src": "1760:7:0"
                          }
                        ],
                        "id": 68,
                        "name": "VariableDeclaration",
                        "src": "1760:13:0"
                      }
                    ],
                    "id": 69,
                    "name": "ParameterList",
                    "src": "1726:53:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 70,
                    "name": "ParameterList",
                    "src": "1796:0:0"
                  }
                ],
                "id": 71,
                "name": "FunctionDefinition",
                "src": "1687:110:0"
              },
              {
                "attributes": {
                  "body": null,
                  "constant": true,
                  "documentation": "@dev Gets all authorized addresses.\n @return Array of authorized addresses.",
                  "implemented": false,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getAuthorizedAddresses",
                  "payable": false,
                  "scope": 78,
                  "stateMutability": "view",
                  "superFunction": null,
                  "visibility": "external"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 72,
                    "name": "ParameterList",
                    "src": "1925:2:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 77,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "address[]",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "address[]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 73,
                                "name": "ElementaryTypeName",
                                "src": "1975:7:0"
                              }
                            ],
                            "id": 74,
                            "name": "ArrayTypeName",
                            "src": "1975:9:0"
                          }
                        ],
                        "id": 75,
                        "name": "VariableDeclaration",
                        "src": "1975:9:0"
                      }
                    ],
                    "id": 76,
                    "name": "ParameterList",
                    "src": "1974:18:0"
                  }
                ],
                "id": 77,
                "name": "FunctionDefinition",
                "src": "1894:99:0"
              }
            ],
            "id": 78,
            "name": "ContractDefinition",
            "src": "1146:849:0"
          },
          {
            "attributes": {
              "contractDependencies": [
                7,
                78
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": false,
              "linearizedBaseContracts": [
                100,
                78,
                7
              ],
              "name": "MAuthorizable",
              "scope": 317
            },
            "children": [
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "IAuthorizable",
                      "referencedDeclaration": 78,
                      "type": "contract IAuthorizable"
                    },
                    "id": 79,
                    "name": "UserDefinedTypeName",
                    "src": "2027:13:0"
                  }
                ],
                "id": 80,
                "name": "InheritanceSpecifier",
                "src": "2027:13:0"
              },
              {
                "attributes": {
                  "anonymous": false,
                  "documentation": null,
                  "name": "AuthorizedAddressAdded"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": true,
                          "name": "target",
                          "scope": 86,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 81,
                            "name": "ElementaryTypeName",
                            "src": "2139:7:0"
                          }
                        ],
                        "id": 82,
                        "name": "VariableDeclaration",
                        "src": "2139:22:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": true,
                          "name": "caller",
                          "scope": 86,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 83,
                            "name": "ElementaryTypeName",
                            "src": "2171:7:0"
                          }
                        ],
                        "id": 84,
                        "name": "VariableDeclaration",
                        "src": "2171:22:0"
                      }
                    ],
                    "id": 85,
                    "name": "ParameterList",
                    "src": "2129:70:0"
                  }
                ],
                "id": 86,
                "name": "EventDefinition",
                "src": "2101:99:0"
              },
              {
                "attributes": {
                  "anonymous": false,
                  "documentation": null,
                  "name": "AuthorizedAddressRemoved"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": true,
                          "name": "target",
                          "scope": 92,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 87,
                            "name": "ElementaryTypeName",
                            "src": "2319:7:0"
                          }
                        ],
                        "id": 88,
                        "name": "VariableDeclaration",
                        "src": "2319:22:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": true,
                          "name": "caller",
                          "scope": 92,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 89,
                            "name": "ElementaryTypeName",
                            "src": "2351:7:0"
                          }
                        ],
                        "id": 90,
                        "name": "VariableDeclaration",
                        "src": "2351:22:0"
                      }
                    ],
                    "id": 91,
                    "name": "ParameterList",
                    "src": "2309:70:0"
                  }
                ],
                "id": 92,
                "name": "EventDefinition",
                "src": "2279:101:0"
              },
              {
                "attributes": {
                  "documentation": "@dev Only authorized addresses can invoke functions with this modifier.",
                  "name": "onlyAuthorized",
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 93,
                    "name": "ParameterList",
                    "src": "2490:0:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    336,
                                    337
                                  ],
                                  "referencedDeclaration": 336,
                                  "type": "function () pure",
                                  "value": "revert"
                                },
                                "id": 94,
                                "name": "Identifier",
                                "src": "2492:6:0"
                              }
                            ],
                            "id": 95,
                            "name": "FunctionCall",
                            "src": "2492:8:0"
                          }
                        ],
                        "id": 96,
                        "name": "ExpressionStatement",
                        "src": "2492:8:0"
                      },
                      {
                        "id": 97,
                        "name": "PlaceholderStatement",
                        "src": "2502:1:0"
                      }
                    ],
                    "id": 98,
                    "name": "Block",
                    "src": "2490:16:0"
                  }
                ],
                "id": 99,
                "name": "ModifierDefinition",
                "src": "2466:40:0"
              }
            ],
            "id": 100,
            "name": "ContractDefinition",
            "src": "1997:511:0"
          },
          {
            "attributes": {
              "contractDependencies": [
                7,
                52,
                78,
                100
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "linearizedBaseContracts": [
                293,
                100,
                78,
                52,
                7
              ],
              "name": "MixinAuthorizable",
              "scope": 317
            },
            "children": [
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Ownable",
                      "referencedDeclaration": 52,
                      "type": "contract Ownable"
                    },
                    "id": 101,
                    "name": "UserDefinedTypeName",
                    "src": "2544:7:0"
                  }
                ],
                "id": 102,
                "name": "InheritanceSpecifier",
                "src": "2544:7:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "MAuthorizable",
                      "referencedDeclaration": 100,
                      "type": "contract MAuthorizable"
                    },
                    "id": 103,
                    "name": "UserDefinedTypeName",
                    "src": "2557:13:0"
                  }
                ],
                "id": 104,
                "name": "InheritanceSpecifier",
                "src": "2557:13:0"
              },
              {
                "attributes": {
                  "documentation": "@dev Only authorized addresses can invoke functions with this modifier.",
                  "name": "onlyAuthorized",
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 105,
                    "name": "ParameterList",
                    "src": "2681:0:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_b590ba9aa685f0cade0ecc2df074637b1c36cb71d1382fe7dd27a64905993f2c",
                                      "typeString": "literal_string \"SENDER_NOT_AUTHORIZED\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 106,
                                "name": "Identifier",
                                "src": "2691:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 120,
                                      "type": "mapping(address => bool)",
                                      "value": "authorized"
                                    },
                                    "id": 107,
                                    "name": "Identifier",
                                    "src": "2712:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 331,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 108,
                                        "name": "Identifier",
                                        "src": "2723:3:0"
                                      }
                                    ],
                                    "id": 109,
                                    "name": "MemberAccess",
                                    "src": "2723:10:0"
                                  }
                                ],
                                "id": 110,
                                "name": "IndexAccess",
                                "src": "2712:22:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "53454e4445525f4e4f545f415554484f52495a4544",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"SENDER_NOT_AUTHORIZED\"",
                                  "value": "SENDER_NOT_AUTHORIZED"
                                },
                                "id": 111,
                                "name": "Literal",
                                "src": "2748:23:0"
                              }
                            ],
                            "id": 112,
                            "name": "FunctionCall",
                            "src": "2691:90:0"
                          }
                        ],
                        "id": 113,
                        "name": "ExpressionStatement",
                        "src": "2691:90:0"
                      },
                      {
                        "id": 114,
                        "name": "PlaceholderStatement",
                        "src": "2791:1:0"
                      }
                    ],
                    "id": 115,
                    "name": "Block",
                    "src": "2681:118:0"
                  }
                ],
                "id": 116,
                "name": "ModifierDefinition",
                "src": "2657:142:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 293,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "mapping(address => bool)",
                  "value": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 117,
                        "name": "ElementaryTypeName",
                        "src": "2814:7:0"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 118,
                        "name": "ElementaryTypeName",
                        "src": "2825:4:0"
                      }
                    ],
                    "id": 119,
                    "name": "Mapping",
                    "src": "2805:25:0"
                  }
                ],
                "id": 120,
                "name": "VariableDeclaration",
                "src": "2805:43:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorities",
                  "scope": 293,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "address[]",
                  "value": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "address[]"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 121,
                        "name": "ElementaryTypeName",
                        "src": "2854:7:0"
                      }
                    ],
                    "id": 122,
                    "name": "ArrayTypeName",
                    "src": "2854:9:0"
                  }
                ],
                "id": 123,
                "name": "VariableDeclaration",
                "src": "2854:28:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "documentation": "@dev Authorizes an address.\n @param target Address to authorize.",
                  "implemented": true,
                  "isConstructor": false,
                  "name": "addAuthorizedAddress",
                  "payable": false,
                  "scope": 293,
                  "stateMutability": "nonpayable",
                  "superFunction": 59,
                  "visibility": "external"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "target",
                          "scope": 157,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 124,
                            "name": "ElementaryTypeName",
                            "src": "2999:7:0"
                          }
                        ],
                        "id": 125,
                        "name": "VariableDeclaration",
                        "src": "2999:14:0"
                      }
                    ],
                    "id": 126,
                    "name": "ParameterList",
                    "src": "2998:16:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 129,
                    "name": "ParameterList",
                    "src": "3054:0:0"
                  },
                  {
                    "attributes": {
                      "arguments": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 32,
                          "type": "modifier ()",
                          "value": "onlyOwner"
                        },
                        "id": 127,
                        "name": "Identifier",
                        "src": "3040:9:0"
                      }
                    ],
                    "id": 128,
                    "name": "ModifierInvocation",
                    "src": "3040:9:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_23820b87f3588ad9debf1f19fd52baa7937383e5f6c016865aecf2605ab396ba",
                                      "typeString": "literal_string \"TARGET_ALREADY_AUTHORIZED\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 130,
                                "name": "Identifier",
                                "src": "3064:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!",
                                  "prefix": true,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 120,
                                          "type": "mapping(address => bool)",
                                          "value": "authorized"
                                        },
                                        "id": 131,
                                        "name": "Identifier",
                                        "src": "3086:10:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 125,
                                          "type": "address",
                                          "value": "target"
                                        },
                                        "id": 132,
                                        "name": "Identifier",
                                        "src": "3097:6:0"
                                      }
                                    ],
                                    "id": 133,
                                    "name": "IndexAccess",
                                    "src": "3086:18:0"
                                  }
                                ],
                                "id": 134,
                                "name": "UnaryOperation",
                                "src": "3085:19:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "5441524745545f414c52454144595f415554484f52495a4544",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"TARGET_ALREADY_AUTHORIZED\"",
                                  "value": "TARGET_ALREADY_AUTHORIZED"
                                },
                                "id": 135,
                                "name": "Literal",
                                "src": "3118:27:0"
                              }
                            ],
                            "id": 136,
                            "name": "FunctionCall",
                            "src": "3064:91:0"
                          }
                        ],
                        "id": 137,
                        "name": "ExpressionStatement",
                        "src": "3064:91:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 120,
                                      "type": "mapping(address => bool)",
                                      "value": "authorized"
                                    },
                                    "id": 138,
                                    "name": "Identifier",
                                    "src": "3166:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 125,
                                      "type": "address",
                                      "value": "target"
                                    },
                                    "id": 139,
                                    "name": "Identifier",
                                    "src": "3177:6:0"
                                  }
                                ],
                                "id": 140,
                                "name": "IndexAccess",
                                "src": "3166:18:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 141,
                                "name": "Literal",
                                "src": "3187:4:0"
                              }
                            ],
                            "id": 142,
                            "name": "Assignment",
                            "src": "3166:25:0"
                          }
                        ],
                        "id": 143,
                        "name": "ExpressionStatement",
                        "src": "3166:25:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "push",
                                  "referencedDeclaration": null,
                                  "type": "function (address) returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 123,
                                      "type": "address[] storage ref",
                                      "value": "authorities"
                                    },
                                    "id": 144,
                                    "name": "Identifier",
                                    "src": "3201:11:0"
                                  }
                                ],
                                "id": 146,
                                "name": "MemberAccess",
                                "src": "3201:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 125,
                                  "type": "address",
                                  "value": "target"
                                },
                                "id": 147,
                                "name": "Identifier",
                                "src": "3218:6:0"
                              }
                            ],
                            "id": 148,
                            "name": "FunctionCall",
                            "src": "3201:24:0"
                          }
                        ],
                        "id": 149,
                        "name": "ExpressionStatement",
                        "src": "3201:24:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 86,
                                  "type": "function (address,address)",
                                  "value": "AuthorizedAddressAdded"
                                },
                                "id": 150,
                                "name": "Identifier",
                                "src": "3240:22:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 125,
                                  "type": "address",
                                  "value": "target"
                                },
                                "id": 151,
                                "name": "Identifier",
                                "src": "3263:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 331,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 152,
                                    "name": "Identifier",
                                    "src": "3271:3:0"
                                  }
                                ],
                                "id": 153,
                                "name": "MemberAccess",
                                "src": "3271:10:0"
                              }
                            ],
                            "id": 154,
                            "name": "FunctionCall",
                            "src": "3240:42:0"
                          }
                        ],
                        "id": 155,
                        "name": "EmitStatement",
                        "src": "3235:47:0"
                      }
                    ],
                    "id": 156,
                    "name": "Block",
                    "src": "3054:235:0"
                  }
                ],
                "id": 157,
                "name": "FunctionDefinition",
                "src": "2969:320:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "documentation": "@dev Removes authorizion of an address.\n @param target Address to remove authorization from.",
                  "implemented": true,
                  "isConstructor": false,
                  "name": "removeAuthorizedAddress",
                  "payable": false,
                  "scope": 293,
                  "stateMutability": "nonpayable",
                  "superFunction": 64,
                  "visibility": "external"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "target",
                          "scope": 221,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 158,
                            "name": "ElementaryTypeName",
                            "src": "3436:7:0"
                          }
                        ],
                        "id": 159,
                        "name": "VariableDeclaration",
                        "src": "3436:14:0"
                      }
                    ],
                    "id": 160,
                    "name": "ParameterList",
                    "src": "3435:16:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 163,
                    "name": "ParameterList",
                    "src": "3491:0:0"
                  },
                  {
                    "attributes": {
                      "arguments": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 32,
                          "type": "modifier ()",
                          "value": "onlyOwner"
                        },
                        "id": 161,
                        "name": "Identifier",
                        "src": "3477:9:0"
                      }
                    ],
                    "id": 162,
                    "name": "ModifierInvocation",
                    "src": "3477:9:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_00f526eb144f3ec426d9180a058fd97d34117f8c72be8029fbefb08b034ed3b2",
                                      "typeString": "literal_string \"TARGET_NOT_AUTHORIZED\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 164,
                                "name": "Identifier",
                                "src": "3501:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 120,
                                      "type": "mapping(address => bool)",
                                      "value": "authorized"
                                    },
                                    "id": 165,
                                    "name": "Identifier",
                                    "src": "3522:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 159,
                                      "type": "address",
                                      "value": "target"
                                    },
                                    "id": 166,
                                    "name": "Identifier",
                                    "src": "3533:6:0"
                                  }
                                ],
                                "id": 167,
                                "name": "IndexAccess",
                                "src": "3522:18:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "5441524745545f4e4f545f415554484f52495a4544",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"TARGET_NOT_AUTHORIZED\"",
                                  "value": "TARGET_NOT_AUTHORIZED"
                                },
                                "id": 168,
                                "name": "Literal",
                                "src": "3554:23:0"
                              }
                            ],
                            "id": 169,
                            "name": "FunctionCall",
                            "src": "3501:86:0"
                          }
                        ],
                        "id": 170,
                        "name": "ExpressionStatement",
                        "src": "3501:86:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "delete",
                              "prefix": true,
                              "type": "tuple()"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 120,
                                      "type": "mapping(address => bool)",
                                      "value": "authorized"
                                    },
                                    "id": 171,
                                    "name": "Identifier",
                                    "src": "3605:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 159,
                                      "type": "address",
                                      "value": "target"
                                    },
                                    "id": 172,
                                    "name": "Identifier",
                                    "src": "3616:6:0"
                                  }
                                ],
                                "id": 173,
                                "name": "IndexAccess",
                                "src": "3605:18:0"
                              }
                            ],
                            "id": 174,
                            "name": "UnaryOperation",
                            "src": "3598:25:0"
                          }
                        ],
                        "id": 175,
                        "name": "ExpressionStatement",
                        "src": "3598:25:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                177
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "i",
                                  "scope": 221,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "uint256",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint256",
                                      "type": "uint256"
                                    },
                                    "id": 176,
                                    "name": "ElementaryTypeName",
                                    "src": "3638:7:0"
                                  }
                                ],
                                "id": 177,
                                "name": "VariableDeclaration",
                                "src": "3638:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 178,
                                "name": "Literal",
                                "src": "3650:1:0"
                              }
                            ],
                            "id": 179,
                            "name": "VariableDeclarationStatement",
                            "src": "3638:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 177,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 180,
                                "name": "Identifier",
                                "src": "3653:1:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 123,
                                      "type": "address[] storage ref",
                                      "value": "authorities"
                                    },
                                    "id": 181,
                                    "name": "Identifier",
                                    "src": "3657:11:0"
                                  }
                                ],
                                "id": 182,
                                "name": "MemberAccess",
                                "src": "3657:18:0"
                              }
                            ],
                            "id": 183,
                            "name": "BinaryOperation",
                            "src": "3653:22:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 177,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 184,
                                    "name": "Identifier",
                                    "src": "3677:1:0"
                                  }
                                ],
                                "id": 185,
                                "name": "UnaryOperation",
                                "src": "3677:3:0"
                              }
                            ],
                            "id": 186,
                            "name": "ExpressionStatement",
                            "src": "3677:3:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "falseBody": null
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 123,
                                              "type": "address[] storage ref",
                                              "value": "authorities"
                                            },
                                            "id": 187,
                                            "name": "Identifier",
                                            "src": "3700:11:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 177,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 188,
                                            "name": "Identifier",
                                            "src": "3712:1:0"
                                          }
                                        ],
                                        "id": 189,
                                        "name": "IndexAccess",
                                        "src": "3700:14:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 159,
                                          "type": "address",
                                          "value": "target"
                                        },
                                        "id": 190,
                                        "name": "Identifier",
                                        "src": "3718:6:0"
                                      }
                                    ],
                                    "id": 191,
                                    "name": "BinaryOperation",
                                    "src": "3700:24:0"
                                  },
                                  {
                                    "children": [
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "=",
                                              "type": "address"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": true,
                                                  "type": "address"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 123,
                                                      "type": "address[] storage ref",
                                                      "value": "authorities"
                                                    },
                                                    "id": 192,
                                                    "name": "Identifier",
                                                    "src": "3744:11:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 177,
                                                      "type": "uint256",
                                                      "value": "i"
                                                    },
                                                    "id": 193,
                                                    "name": "Identifier",
                                                    "src": "3756:1:0"
                                                  }
                                                ],
                                                "id": 194,
                                                "name": "IndexAccess",
                                                "src": "3744:14:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "address"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 123,
                                                      "type": "address[] storage ref",
                                                      "value": "authorities"
                                                    },
                                                    "id": 195,
                                                    "name": "Identifier",
                                                    "src": "3761:11:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                      },
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "operator": "-",
                                                      "type": "uint256"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "member_name": "length",
                                                          "referencedDeclaration": null,
                                                          "type": "uint256"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 123,
                                                              "type": "address[] storage ref",
                                                              "value": "authorities"
                                                            },
                                                            "id": 196,
                                                            "name": "Identifier",
                                                            "src": "3773:11:0"
                                                          }
                                                        ],
                                                        "id": 197,
                                                        "name": "MemberAccess",
                                                        "src": "3773:18:0"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "hexvalue": "31",
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "subdenomination": null,
                                                          "token": "number",
                                                          "type": "int_const 1",
                                                          "value": "1"
                                                        },
                                                        "id": 198,
                                                        "name": "Literal",
                                                        "src": "3794:1:0"
                                                      }
                                                    ],
                                                    "id": 199,
                                                    "name": "BinaryOperation",
                                                    "src": "3773:22:0"
                                                  }
                                                ],
                                                "id": 200,
                                                "name": "IndexAccess",
                                                "src": "3761:35:0"
                                              }
                                            ],
                                            "id": 201,
                                            "name": "Assignment",
                                            "src": "3744:52:0"
                                          }
                                        ],
                                        "id": 202,
                                        "name": "ExpressionStatement",
                                        "src": "3744:52:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "-=",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": true,
                                                  "member_name": "length",
                                                  "referencedDeclaration": null,
                                                  "type": "uint256"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 123,
                                                      "type": "address[] storage ref",
                                                      "value": "authorities"
                                                    },
                                                    "id": 203,
                                                    "name": "Identifier",
                                                    "src": "3814:11:0"
                                                  }
                                                ],
                                                "id": 205,
                                                "name": "MemberAccess",
                                                "src": "3814:18:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "31",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 1",
                                                  "value": "1"
                                                },
                                                "id": 206,
                                                "name": "Literal",
                                                "src": "3836:1:0"
                                              }
                                            ],
                                            "id": 207,
                                            "name": "Assignment",
                                            "src": "3814:23:0"
                                          }
                                        ],
                                        "id": 208,
                                        "name": "ExpressionStatement",
                                        "src": "3814:23:0"
                                      },
                                      {
                                        "id": 209,
                                        "name": "Break",
                                        "src": "3855:5:0"
                                      }
                                    ],
                                    "id": 210,
                                    "name": "Block",
                                    "src": "3726:149:0"
                                  }
                                ],
                                "id": 211,
                                "name": "IfStatement",
                                "src": "3696:179:0"
                              }
                            ],
                            "id": 212,
                            "name": "Block",
                            "src": "3682:203:0"
                          }
                        ],
                        "id": 213,
                        "name": "ForStatement",
                        "src": "3633:252:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 92,
                                  "type": "function (address,address)",
                                  "value": "AuthorizedAddressRemoved"
                                },
                                "id": 214,
                                "name": "Identifier",
                                "src": "3899:24:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 159,
                                  "type": "address",
                                  "value": "target"
                                },
                                "id": 215,
                                "name": "Identifier",
                                "src": "3924:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 331,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 216,
                                    "name": "Identifier",
                                    "src": "3932:3:0"
                                  }
                                ],
                                "id": 217,
                                "name": "MemberAccess",
                                "src": "3932:10:0"
                              }
                            ],
                            "id": 218,
                            "name": "FunctionCall",
                            "src": "3899:44:0"
                          }
                        ],
                        "id": 219,
                        "name": "EmitStatement",
                        "src": "3894:49:0"
                      }
                    ],
                    "id": 220,
                    "name": "Block",
                    "src": "3491:459:0"
                  }
                ],
                "id": 221,
                "name": "FunctionDefinition",
                "src": "3403:547:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "documentation": "@dev Removes authorizion of an address.\n @param target Address to remove authorization from.\n @param index Index of target in authorities array.",
                  "implemented": true,
                  "isConstructor": false,
                  "name": "removeAuthorizedAddressAtIndex",
                  "payable": false,
                  "scope": 293,
                  "stateMutability": "nonpayable",
                  "superFunction": 71,
                  "visibility": "external"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "target",
                          "scope": 283,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 222,
                            "name": "ElementaryTypeName",
                            "src": "4172:7:0"
                          }
                        ],
                        "id": 223,
                        "name": "VariableDeclaration",
                        "src": "4172:14:0"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "index",
                          "scope": 283,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 224,
                            "name": "ElementaryTypeName",
                            "src": "4196:7:0"
                          }
                        ],
                        "id": 225,
                        "name": "VariableDeclaration",
                        "src": "4196:13:0"
                      }
                    ],
                    "id": 226,
                    "name": "ParameterList",
                    "src": "4162:53:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 229,
                    "name": "ParameterList",
                    "src": "4255:0:0"
                  },
                  {
                    "attributes": {
                      "arguments": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 32,
                          "type": "modifier ()",
                          "value": "onlyOwner"
                        },
                        "id": 227,
                        "name": "Identifier",
                        "src": "4241:9:0"
                      }
                    ],
                    "id": 228,
                    "name": "ModifierInvocation",
                    "src": "4241:9:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_00f526eb144f3ec426d9180a058fd97d34117f8c72be8029fbefb08b034ed3b2",
                                      "typeString": "literal_string \"TARGET_NOT_AUTHORIZED\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 230,
                                "name": "Identifier",
                                "src": "4265:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 120,
                                      "type": "mapping(address => bool)",
                                      "value": "authorized"
                                    },
                                    "id": 231,
                                    "name": "Identifier",
                                    "src": "4286:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 223,
                                      "type": "address",
                                      "value": "target"
                                    },
                                    "id": 232,
                                    "name": "Identifier",
                                    "src": "4297:6:0"
                                  }
                                ],
                                "id": 233,
                                "name": "IndexAccess",
                                "src": "4286:18:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "5441524745545f4e4f545f415554484f52495a4544",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"TARGET_NOT_AUTHORIZED\"",
                                  "value": "TARGET_NOT_AUTHORIZED"
                                },
                                "id": 234,
                                "name": "Literal",
                                "src": "4318:23:0"
                              }
                            ],
                            "id": 235,
                            "name": "FunctionCall",
                            "src": "4265:86:0"
                          }
                        ],
                        "id": 236,
                        "name": "ExpressionStatement",
                        "src": "4265:86:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_7ba4dc8f715496ea115fdbd0a2da65e0665096c909392fefbfb708035bd62915",
                                      "typeString": "literal_string \"INDEX_OUT_OF_BOUNDS\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 237,
                                "name": "Identifier",
                                "src": "4361:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 225,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 238,
                                    "name": "Identifier",
                                    "src": "4382:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 123,
                                          "type": "address[] storage ref",
                                          "value": "authorities"
                                        },
                                        "id": 239,
                                        "name": "Identifier",
                                        "src": "4390:11:0"
                                      }
                                    ],
                                    "id": 240,
                                    "name": "MemberAccess",
                                    "src": "4390:18:0"
                                  }
                                ],
                                "id": 241,
                                "name": "BinaryOperation",
                                "src": "4382:26:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "494e4445585f4f55545f4f465f424f554e4453",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"INDEX_OUT_OF_BOUNDS\"",
                                  "value": "INDEX_OUT_OF_BOUNDS"
                                },
                                "id": 242,
                                "name": "Literal",
                                "src": "4422:21:0"
                              }
                            ],
                            "id": 243,
                            "name": "FunctionCall",
                            "src": "4361:92:0"
                          }
                        ],
                        "id": 244,
                        "name": "ExpressionStatement",
                        "src": "4361:92:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_069a2a6df713b5bc8c3a27f34de5d4935a63a3fea1572d6c00b7cfc3535e10b0",
                                      "typeString": "literal_string \"AUTHORIZED_ADDRESS_MISMATCH\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    334,
                                    335
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "function (bool,string memory) pure",
                                  "value": "require"
                                },
                                "id": 245,
                                "name": "Identifier",
                                "src": "4463:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 123,
                                          "type": "address[] storage ref",
                                          "value": "authorities"
                                        },
                                        "id": 246,
                                        "name": "Identifier",
                                        "src": "4484:11:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 225,
                                          "type": "uint256",
                                          "value": "index"
                                        },
                                        "id": 247,
                                        "name": "Identifier",
                                        "src": "4496:5:0"
                                      }
                                    ],
                                    "id": 248,
                                    "name": "IndexAccess",
                                    "src": "4484:18:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 223,
                                      "type": "address",
                                      "value": "target"
                                    },
                                    "id": 249,
                                    "name": "Identifier",
                                    "src": "4506:6:0"
                                  }
                                ],
                                "id": 250,
                                "name": "BinaryOperation",
                                "src": "4484:28:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "415554484f52495a45445f414444524553535f4d49534d41544348",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"AUTHORIZED_ADDRESS_MISMATCH\"",
                                  "value": "AUTHORIZED_ADDRESS_MISMATCH"
                                },
                                "id": 251,
                                "name": "Literal",
                                "src": "4526:29:0"
                              }
                            ],
                            "id": 252,
                            "name": "FunctionCall",
                            "src": "4463:102:0"
                          }
                        ],
                        "id": 253,
                        "name": "ExpressionStatement",
                        "src": "4463:102:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "delete",
                              "prefix": true,
                              "type": "tuple()"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 120,
                                      "type": "mapping(address => bool)",
                                      "value": "authorized"
                                    },
                                    "id": 254,
                                    "name": "Identifier",
                                    "src": "4583:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 223,
                                      "type": "address",
                                      "value": "target"
                                    },
                                    "id": 255,
                                    "name": "Identifier",
                                    "src": "4594:6:0"
                                  }
                                ],
                                "id": 256,
                                "name": "IndexAccess",
                                "src": "4583:18:0"
                              }
                            ],
                            "id": 257,
                            "name": "UnaryOperation",
                            "src": "4576:25:0"
                          }
                        ],
                        "id": 258,
                        "name": "ExpressionStatement",
                        "src": "4576:25:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 123,
                                      "type": "address[] storage ref",
                                      "value": "authorities"
                                    },
                                    "id": 259,
                                    "name": "Identifier",
                                    "src": "4611:11:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 225,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 260,
                                    "name": "Identifier",
                                    "src": "4623:5:0"
                                  }
                                ],
                                "id": 261,
                                "name": "IndexAccess",
                                "src": "4611:18:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 123,
                                      "type": "address[] storage ref",
                                      "value": "authorities"
                                    },
                                    "id": 262,
                                    "name": "Identifier",
                                    "src": "4632:11:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "length",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 123,
                                              "type": "address[] storage ref",
                                              "value": "authorities"
                                            },
                                            "id": 263,
                                            "name": "Identifier",
                                            "src": "4644:11:0"
                                          }
                                        ],
                                        "id": 264,
                                        "name": "MemberAccess",
                                        "src": "4644:18:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 265,
                                        "name": "Literal",
                                        "src": "4665:1:0"
                                      }
                                    ],
                                    "id": 266,
                                    "name": "BinaryOperation",
                                    "src": "4644:22:0"
                                  }
                                ],
                                "id": 267,
                                "name": "IndexAccess",
                                "src": "4632:35:0"
                              }
                            ],
                            "id": 268,
                            "name": "Assignment",
                            "src": "4611:56:0"
                          }
                        ],
                        "id": 269,
                        "name": "ExpressionStatement",
                        "src": "4611:56:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 123,
                                      "type": "address[] storage ref",
                                      "value": "authorities"
                                    },
                                    "id": 270,
                                    "name": "Identifier",
                                    "src": "4677:11:0"
                                  }
                                ],
                                "id": 272,
                                "name": "MemberAccess",
                                "src": "4677:18:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 273,
                                "name": "Literal",
                                "src": "4699:1:0"
                              }
                            ],
                            "id": 274,
                            "name": "Assignment",
                            "src": "4677:23:0"
                          }
                        ],
                        "id": 275,
                        "name": "ExpressionStatement",
                        "src": "4677:23:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 92,
                                  "type": "function (address,address)",
                                  "value": "AuthorizedAddressRemoved"
                                },
                                "id": 276,
                                "name": "Identifier",
                                "src": "4715:24:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 223,
                                  "type": "address",
                                  "value": "target"
                                },
                                "id": 277,
                                "name": "Identifier",
                                "src": "4740:6:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 331,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 278,
                                    "name": "Identifier",
                                    "src": "4748:3:0"
                                  }
                                ],
                                "id": 279,
                                "name": "MemberAccess",
                                "src": "4748:10:0"
                              }
                            ],
                            "id": 280,
                            "name": "FunctionCall",
                            "src": "4715:44:0"
                          }
                        ],
                        "id": 281,
                        "name": "EmitStatement",
                        "src": "4710:49:0"
                      }
                    ],
                    "id": 282,
                    "name": "Block",
                    "src": "4255:511:0"
                  }
                ],
                "id": 283,
                "name": "FunctionDefinition",
                "src": "4123:643:0"
              },
              {
                "attributes": {
                  "constant": true,
                  "documentation": "@dev Gets all authorized addresses.\n @return Array of authorized addresses.",
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getAuthorizedAddresses",
                  "payable": false,
                  "scope": 293,
                  "stateMutability": "view",
                  "superFunction": 77,
                  "visibility": "external"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 284,
                    "name": "ParameterList",
                    "src": "4894:2:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 292,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "address[]",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "address[]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 285,
                                "name": "ElementaryTypeName",
                                "src": "4944:7:0"
                              }
                            ],
                            "id": 286,
                            "name": "ArrayTypeName",
                            "src": "4944:9:0"
                          }
                        ],
                        "id": 287,
                        "name": "VariableDeclaration",
                        "src": "4944:9:0"
                      }
                    ],
                    "id": 288,
                    "name": "ParameterList",
                    "src": "4943:18:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "functionReturnParameters": 288
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 123,
                              "type": "address[] storage ref",
                              "value": "authorities"
                            },
                            "id": 289,
                            "name": "Identifier",
                            "src": "4983:11:0"
                          }
                        ],
                        "id": 290,
                        "name": "Return",
                        "src": "4976:18:0"
                      }
                    ],
                    "id": 291,
                    "name": "Block",
                    "src": "4966:35:0"
                  }
                ],
                "id": 292,
                "name": "FunctionDefinition",
                "src": "4863:138:0"
              }
            ],
            "id": 293,
            "name": "ContractDefinition",
            "src": "2510:2493:0"
          },
          {
            "attributes": {
              "contractDependencies": [
                7,
                52,
                78,
                100,
                293
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "linearizedBaseContracts": [
                316,
                293,
                100,
                78,
                52,
                7
              ],
              "name": "ERC20Proxy",
              "scope": 317
            },
            "children": [
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "MixinAuthorizable",
                      "referencedDeclaration": 293,
                      "type": "contract MixinAuthorizable"
                    },
                    "id": 294,
                    "name": "UserDefinedTypeName",
                    "src": "5032:17:0"
                  }
                ],
                "id": 295,
                "name": "InheritanceSpecifier",
                "src": "5032:17:0"
              },
              {
                "attributes": {
                  "constant": true,
                  "name": "PROXY_ID",
                  "scope": 316,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "bytes4",
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes4",
                      "type": "bytes4"
                    },
                    "id": 296,
                    "name": "ElementaryTypeName",
                    "src": "5081:6:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "isStructConstructorCall": false,
                      "lValueRequested": false,
                      "names": [
                        null
                      ],
                      "type": "bytes4",
                      "type_conversion": true
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "type": "type(bytes4)",
                          "value": "bytes4"
                        },
                        "id": 297,
                        "name": "ElementaryTypeNameExpression",
                        "src": "5117:6:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_f47261b06eedbfce68afd46d0f3c27c60b03faad319eaf33103611cf8f6456ad",
                                  "typeString": "literal_string \"ERC20Token(address)\""
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 325,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 298,
                            "name": "Identifier",
                            "src": "5124:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4552433230546f6b656e286164647265737329",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"ERC20Token(address)\"",
                              "value": "ERC20Token(address)"
                            },
                            "id": 299,
                            "name": "Literal",
                            "src": "5134:21:0"
                          }
                        ],
                        "id": 300,
                        "name": "FunctionCall",
                        "src": "5124:32:0"
                      }
                    ],
                    "id": 301,
                    "name": "FunctionCall",
                    "src": "5117:40:0"
                  }
                ],
                "id": 302,
                "name": "VariableDeclaration",
                "src": "5081:76:0"
              },
              {
                "attributes": {
                  "constant": false,
                  "documentation": null,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "",
                  "payable": false,
                  "scope": 316,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "external"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 303,
                    "name": "ParameterList",
                    "src": "5223:2:0"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 304,
                    "name": "ParameterList",
                    "src": "5247:0:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "externalReferences": [
                            {
                              "authorized_slot": {
                                "declaration": 120,
                                "isOffset": false,
                                "isSlot": true,
                                "src": "6278:15:0",
                                "valueSize": 1
                              }
                            }
                          ],
                          "operations": "{\n    let selector := and(calldataload(0), 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    if eq(selector, 0xa85e59e400000000000000000000000000000000000000000000000000000000)\n    {\n        let start := mload(64)\n        mstore(start, and(caller(), 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(start, 32), authorized_slot)\n        if iszero(sload(keccak256(start, 64)))\n        {\n            mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)\n            mstore(32, 0x0000002000000000000000000000000000000000000000000000000000000000)\n            mstore(64, 0x0000001553454e4445525f4e4f545f415554484f52495a454400000000000000)\n            mstore(96, 0)\n            revert(0, 100)\n        }\n        let token := calldataload(add(calldataload(4), 40))\n        mstore(0, 0x23b872dd00000000000000000000000000000000000000000000000000000000)\n        calldatacopy(4, 36, 96)\n        let success := call(gas(), token, 0, 0, 100, 0, 32)\n        success := and(success, or(iszero(returndatasize()), and(eq(returndatasize(), 32), gt(mload(0), 0))))\n        if success\n        {\n            return(0, 0)\n        }\n        mstore(0, 0x08c379a000000000000000000000000000000000000000000000000000000000)\n        mstore(32, 0x0000002000000000000000000000000000000000000000000000000000000000)\n        mstore(64, 0x0000000f5452414e534645525f4641494c454400000000000000000000000000)\n        mstore(96, 0)\n        revert(0, 100)\n    }\n    revert(0, 0)\n}"
                        },
                        "children": [],
                        "id": 305,
                        "name": "InlineAssembly",
                        "src": "5257:8067:0"
                      }
                    ],
                    "id": 306,
                    "name": "Block",
                    "src": "5247:8077:0"
                  }
                ],
                "id": 307,
                "name": "FunctionDefinition",
                "src": "5214:8110:0"
              },
              {
                "attributes": {
                  "constant": true,
                  "documentation": "@dev Gets the proxy id associated with the proxy address.\n @return Proxy id.",
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getProxyId",
                  "payable": false,
                  "scope": 316,
                  "stateMutability": "pure",
                  "superFunction": null,
                  "visibility": "external"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 308,
                    "name": "ParameterList",
                    "src": "13441:2:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 315,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes4",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes4",
                              "type": "bytes4"
                            },
                            "id": 309,
                            "name": "ElementaryTypeName",
                            "src": "13491:6:0"
                          }
                        ],
                        "id": 310,
                        "name": "VariableDeclaration",
                        "src": "13491:6:0"
                      }
                    ],
                    "id": 311,
                    "name": "ParameterList",
                    "src": "13490:8:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "functionReturnParameters": 311
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 302,
                              "type": "bytes4",
                              "value": "PROXY_ID"
                            },
                            "id": 312,
                            "name": "Identifier",
                            "src": "13520:8:0"
                          }
                        ],
                        "id": 313,
                        "name": "Return",
                        "src": "13513:15:0"
                      }
                    ],
                    "id": 314,
                    "name": "Block",
                    "src": "13503:32:0"
                  }
                ],
                "id": 315,
                "name": "FunctionDefinition",
                "src": "13422:113:0"
              }
            ],
            "id": 316,
            "name": "ContractDefinition",
            "src": "5005:8532:0"
          }
        ],
        "id": 317,
        "name": "SourceUnit",
        "src": "580:12958:0"
      }
    }
  }
}