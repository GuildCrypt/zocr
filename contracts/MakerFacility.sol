pragma solidity ^0.4.24;

contract MakerFacility {

  mapping(uint256 => Order) public orders;

  address public owner;
  uint256 public ordersLength;

  struct Order {
    address makerAssetAddress;
    address takerAssetAddress;
    uint256 makerAssetAmount;
    uint256 takerAssetAmount;
    uint256 expirationTimeSeconds;
    uint256 salt;
    bytes signature;
  }

  constructor(
    address makerAssetAddress,
    address takerAssetAddress,
    uint256 makerAssetAmount,
    uint256 takerAssetAmount,
    uint256 expirationTimeSeconds,
    uint256 salt,
    bytes signature
  ) public {
    owner = msg.sender;
    add(
      makerAssetAddress,
      takerAssetAddress,
      makerAssetAmount,
      takerAssetAmount,
      expirationTimeSeconds,
      salt,
      signature
    );
  }

  function add (
    address makerAssetAddress,
    address takerAssetAddress,
    uint256 makerAssetAmount,
    uint256 takerAssetAmount,
    uint256 expirationTimeSeconds,
    uint256 salt,
    bytes signature
  ) public {
    require(msg.sender == owner);
    orders[ordersLength] = Order(
      makerAssetAddress,
      takerAssetAddress,
      makerAssetAmount,
      takerAssetAmount,
      expirationTimeSeconds,
      salt,
      signature
    );
    ordersLength ++;
  }

  function remove(uint256 orderIndex) public {
    require(msg.sender == owner);
    delete orders[orderIndex];
  }

}
