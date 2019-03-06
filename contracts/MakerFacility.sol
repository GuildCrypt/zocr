pragma solidity ^0.4.24;

contract MakerFacility {

  address public owner;
  uint256 public orderOffset;
  mapping(uint256 => bytes32) public orderSplitEncodings;

  constructor(
    bytes32 orderSplitEncoding0,
    bytes32 orderSplitEncoding1,
    bytes32 orderSplitEncoding2,
    bytes32 orderSplitEncoding3,
    bytes32 orderSplitEncoding4,
    bytes32 orderSplitEncoding5
  ) public {
    owner = msg.sender;
    add(
      orderSplitEncoding0,
      orderSplitEncoding1,
      orderSplitEncoding2,
      orderSplitEncoding3,
      orderSplitEncoding4,
      orderSplitEncoding5
    );
  }

  function orderSplitEncodingsForOrder(uint256 orderIndex) public view returns(bytes32[6]) {
    uint256 _orderOffset = orderIndex * 6;
    bytes32[6] memory returnable = [orderSplitEncodings[_orderOffset], orderSplitEncodings[_orderOffset + 1], orderSplitEncodings[_orderOffset + 2], orderSplitEncodings[_orderOffset + 3], orderSplitEncodings[_orderOffset + 4], orderSplitEncodings[_orderOffset + 5]];
    return returnable;
  }

  function add (
    bytes32 orderSplitEncoding0,
    bytes32 orderSplitEncoding1,
    bytes32 orderSplitEncoding2,
    bytes32 orderSplitEncoding3,
    bytes32 orderSplitEncoding4,
    bytes32 orderSplitEncoding5
  ) public {
    require(msg.sender == owner);
    orderSplitEncodings[orderOffset] = orderSplitEncoding0;
    orderSplitEncodings[orderOffset + 1] = orderSplitEncoding1;
    orderSplitEncodings[orderOffset + 2] = orderSplitEncoding2;
    orderSplitEncodings[orderOffset + 3] = orderSplitEncoding3;
    orderSplitEncodings[orderOffset + 4] = orderSplitEncoding4;
    orderSplitEncodings[orderOffset + 5] = orderSplitEncoding5;
    orderOffset += 6;
  }

  function remove(uint256 orderIndex) public {
    require(msg.sender == owner);
    uint256 _orderOffset = orderIndex * 6;
    delete orderSplitEncodings[_orderOffset];
    delete orderSplitEncodings[_orderOffset + 1];
    delete orderSplitEncodings[_orderOffset + 2];
    delete orderSplitEncodings[_orderOffset + 3];
    delete orderSplitEncodings[_orderOffset + 4];
    delete orderSplitEncodings[_orderOffset + 5];
  }

}
