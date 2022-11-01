//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract PracticeContract {
    address public owner;  
    event transactions(address to, uint amount);
    mapping(address=>uint) ledger;

    constructor() {
        owner = msg.sender;
    }


    function _transfer(address payable _to) payable public {
        _to.transfer(msg.value);
        ledger[msg.sender] = msg.value;
        emit transactions(_to, msg.value);
    }

    
    
}