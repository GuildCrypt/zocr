pragma solidity ^0.4.24;

/// @title MakerFacility: 0x v2 On-Chain Relay
/// @author GuildCrypt
contract MakerFacility {

  address public owner;
  uint256 public orderIndex = 1;
  mapping(uint256 => bytes32[6]) public orderSplitEncodings;

  constructor(bytes32[6] _orderSplitEncodings, address makerFacilityPhonebook) public {
    owner = msg.sender;
    orderSplitEncodings[0] = _orderSplitEncodings;
    if (makerFacilityPhonebook != address(0)) {
      require(makerFacilityPhonebook.call(0));
    }
  }

  /// @dev Add an order. Only the owner may add an order.
  /// @param _orderSplitEncodings The split encodings
  function add(bytes32[6] _orderSplitEncodings) public {
    require(msg.sender == owner);
    orderSplitEncodings[orderIndex] = _orderSplitEncodings;
    orderIndex += 1;
  }

  /// @dev Remove an order. Only the owner may remove an order.
  /// @param _orderIndex The index of the order to remove
  function remove(uint256 _orderIndex) public {
    require(msg.sender == owner);
    delete orderSplitEncodings[_orderIndex];
  }

  /// @dev Get the split encodings for an order
  /// @param _orderIndex The index of the order
  function orderSplitEncodings(uint256 _orderIndex) public view returns(bytes32[6]) {
    return orderSplitEncodings[_orderIndex];
  }

}
