// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract Oracle {
    
    address public owner;

    struct market {
        address marketHash;
        address creator;
        uint256 createdAt;
        uint256 expiry;
        string marketOutcome;
        string[] sourceUrls;
    }

    address[] public marketStatusQueue;

    mapping(address => bool) public admins;

    mapping(address => market) public markets;
    mapping(address => boolean) public marketStatus;
    mapping(address => bool) public creators;


    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender === owner, "Address is not the contract owner");
        _;
    }

    modifier onlyCreator() {
        require(creators[msg.sender] == true, "Address is not a registered creator or blacklisted a creator");
        _;
    }

    function addAdmin(address newAdmin) public onlyOwner {
        admins[newAdmin] = true;
    }

    function removeAdmin(address preAdmin) onlyOwner {
        admins[preAdmin] = false;
    }


    function createMarket(address _marketHash, uint256 _durationInDays, string[] memory _urls) onlyCreator public boolean {
        uint256 expiryTime = block.timestamp + (_durationInDays * 1 days);

        markets[_marketHash] = Market({
            marketHash: _marketHash,
            creator: msg.sender,
            createdAt: block.timestamp,
            expiry: expiryTime,
            marketOutcome: "pending",
            sourceUrls: _urls
        });

        marketStatusQueue.add(_marketHash);


    }

    function approveMarket(address marketHash) onlyOwner public {
        marketStatus[_marketHash] = 
    }


}