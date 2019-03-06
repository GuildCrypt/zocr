pragma solidity ^0.4.24;

contract MakerFacility {

  address public owner;
  uint256 public orderIndex = 1;
  mapping(uint256 => bytes32[6]) public orderSplitEncodings;

  constructor(bytes32[6] _orderSplitEncodings) public {
    owner = msg.sender;
    orderSplitEncodings[0] = _orderSplitEncodings;
  }

  function add(bytes32[6] _orderSplitEncodings) public {
    require(msg.sender == owner);
    orderSplitEncodings[orderIndex] = _orderSplitEncodings;
    orderIndex += 1;
  }

  function remove(uint256 _orderIndex) public {
    require(msg.sender == owner);
    delete orderSplitEncodings[_orderIndex];
  }

  function orderSplitEncodings(uint256 _orderIndex) public view returns(bytes32[6]) {
    return orderSplitEncodings[_orderIndex];
  }

}
