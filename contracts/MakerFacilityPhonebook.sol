pragma solidity ^0.4.24;

contract MakerFacilityPhonebook {

  struct Entry {
    address origin;
    address makerFacility;
  }

  mapping(address => address) public makerFacilityByOrigin;
  Entry[] public entries;

  function() public {
    require(makerFacilityByOrigin[tx.origin] == address(0));
    makerFacilityByOrigin[tx.origin] = msg.sender;
    entries.push(Entry(tx.origin, msg.sender));
  }

}
