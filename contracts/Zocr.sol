pragma solidity ^0.4.24;

/// @title Zocr: On-Chain Relay
/// @author GuildCrypt
contract Zocr {

  mapping(bytes4 => uint32) public ordersCount;
  mapping(bytes4 => mapping(uint32 => bytes32[5])) public orders;

  event Order(bytes4 indexed pairId, bytes32[5] orderSplitEncodings);

  /// @dev Add an order. Only the owner may add an order.
  /// @param pairId A unique pair id. SHA256(baseAssetAddress XOR quoteAssetAddress)[252, 256]
  /// @param orderSplitEncodings The split encodings
  function add(bytes4 pairId, bytes32[5] orderSplitEncodings) public {
    orders[pairId][ordersCount[pairId]] = orderSplitEncodings;
    ordersCount[pairId] += 1;
    // emit Order(pairId, orderSplitEncodings);
  }

  function orderSplitEncodings(bytes4 pairId, uint32 _orderIndex) public view returns(bytes32[5]) {
    return orders[pairId][_orderIndex];
  }

  function computePairId(bytes20 base, bytes20 quote) public pure returns (bytes4) {

    bytes20 pairXor = base ^ quote;

    bytes4 pairId;
    bytes4 x = bytes4(0xff000000);

    pairId ^= (x & pairXor[0]);
    pairId ^= (x & pairXor[1]) >> 8;
    pairId ^= (x & pairXor[2]) >> 16;
    pairId ^= (x & pairXor[3]) >> 24;

    return pairId;
  }

}
