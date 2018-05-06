var auctionContractAbi = JSON.parse('\n' +
    '[{"constant":false,"inputs":[],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"auctionLaunch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"auctionEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AWDC","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rateEthToAlCoin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"auctionSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"auctionProduce","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SPV","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"auctionIssue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bidders","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fullPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_biddingTime","type":"uint256"},{"name":"_SPV","type":"address"},{"name":"_AWDC","type":"address"},{"name":"_fullPrice","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[],"name":"AuctionLaunched","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountCollected","type":"uint256"}],"name":"AuctionProduction","type":"event"},{"anonymous":false,"inputs":[],"name":"AuctionSent","type":"event"},{"anonymous":false,"inputs":[],"name":"AuctionFinished","type":"event"}]\n'
);

var diamContractAbi = JSON.parse('\n' +
    '[{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]\n');

var auctionContractAddress = "0x2aADc85655eB503710381BB6a5B7Dde6663aaeE6";

var diamContractAddress = "0x5a2889eA93022D92E8E28d926591Ceaefa6e6c66";

function getValueFromContract(abi, contractAddress, method, callback) {
    var contractAbi = localWeb3.eth.contract(abi);
    var myContract = contractAbi.at(contractAddress);

    myContract[method](function (error, result) {
        if (error) {
            console.log('something wrong');
            return;
        }

        callback(result);
    });
}

function sendMoneyToAuction(contractAddress, auctionContractAddress, amountInDiams, callback) {
    var contractAbi = localWeb3.eth.contract(diamContractAbi);
    var myContract = contractAbi.at(contractAddress);
    var myAccount = localWeb3.eth.accounts[0];

    const transactionObject = {
        from: myAccount
    };

    myContract.transfer.sendTransaction(auctionContractAddress, amountInDiams, transactionObject, function (error, result) {
            if (error) {
                console.log('something wrong');
                return;
            }

            callback(result);
        }
    )
}


function launchAuction(auctionContractAddress, callback) {
    var contractAbi = localWeb3.eth.contract(auctionContractAbi);
    var myContract = contractAbi.at(auctionContractAddress);

    var myAccount = localWeb3.eth.accounts[0];

    if (myAccount !== "0x7069ce0caf3c67f18aace828cd68889ac7e009df") {
        console.log('You are not SPV, use proper account in MetaMask!');
        return;
    }

    const transactionObject = {
        from: myAccount
    };

    myContract.auctionLaunch.sendTransaction(transactionObject, function (error, result) {
            if (error) {
                console.log('something wrong');
                return;
            }

            callback(result);
        }
    )
}

function produceAuction(auctionContractAddress, callback) {
    var contractAbi = localWeb3.eth.contract(auctionContractAbi);
    var myContract = contractAbi.at(auctionContractAddress);

    var myAccount = localWeb3.eth.accounts[0];

    if (myAccount !== "0x7069ce0caf3c67f18aace828cd68889ac7e009df") {
        console.log('You are not SPV, use proper account in MetaMask!');
        return;
    }

    const transactionObject = {
        sender: myAccount
    };

    myContract.auctionProduce.sendTransaction(transactionObject, function (error, result) {
            if (error) {
                console.log('something wrong');
                return;
            }

            callback(result);
        }
    )

}