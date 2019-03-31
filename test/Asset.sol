pragma solidity ^0.4.24;

import "ERC20.sol";

contract Asset is ERC20 {
  constructor(uint256 _totalSupply) public {
    _mint(msg.sender, _totalSupply);
  }
}
