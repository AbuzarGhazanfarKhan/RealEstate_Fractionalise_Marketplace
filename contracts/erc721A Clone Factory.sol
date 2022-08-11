
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./erc721contract.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ERC721Factory {
    address public implementation;
    address public clone;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    uint256 tokenId = _tokenIdCounter.current();

    constructor() {
        implementation = address(new ERC721());
    }

    function create(string calldata name_, string calldata symbol_,string memory _propertyAddress,string memory _ownerName) public {
        clone = Clones.clone(implementation);
        
        ERC721(clone).initialize(name_, symbol_,_propertyAddress,_ownerName);
        ERC721(clone).transferOwnership(msg.sender);

    }
}