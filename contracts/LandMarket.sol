// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract inverted_mfers is ERC721A, Ownable {
    AggregatorV3Interface internal priceFeed;
    // uint256 MAX_MINTS = 69;
    uint256 public MAX_SUPPLY;
    
    uint256 public mintRate=0.2 ether;

    // string public baseURI = "ipfs://bafybeieyetlp2c2vubffzjjap7utuz5jwo2k5b5kupvezfchc5tnfg4fh4/";

    constructor(uint256 _max_supply,uint256 _housePrice ,string memory _ownerName,string memory _address) ERC721A(_ownerName, _address) {
        MAX_SUPPLY=_max_supply;


    }

    function mint(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        // require(quantity + _numberMinted(msg.sender) <= MAX_MINTS, "Exceeded the limit");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Not enough tokens left");
        require(msg.value >= (mintRate * quantity), "Not enough ether sent");
        _safeMint(msg.sender, quantity);
    }
    function balanceOfContract() public view returns(uint256){
        return address(this).balance/1e18;
    }

    function withdraw() external payable onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // function _baseURI() internal view override returns (string memory) {
    //     return baseURI;
    // }

    // function setMintRate(uint256 _mintRate) public onlyOwner {
    //     mintRate = _mintRate;
    // }
}