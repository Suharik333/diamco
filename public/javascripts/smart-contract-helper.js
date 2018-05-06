var auctionContractAbi = JSON.parse('\n' +
    '[{"constant":false,"inputs":[],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"auctionLaunch","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"auctionEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AWDC","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rateEthToAlCoin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"auctionSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"auctionProduce","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SPV","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"auctionIssue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bidders","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fullPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_biddingTime","type":"uint256"},{"name":"_SPV","type":"address"},{"name":"_AWDC","type":"address"},{"name":"_fullPrice","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[],"name":"AuctionLaunched","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountCollected","type":"uint256"}],"name":"AuctionProduction","type":"event"},{"anonymous":false,"inputs":[],"name":"AuctionSent","type":"event"},{"anonymous":false,"inputs":[],"name":"AuctionFinished","type":"event"}]\n'
);

var auctionContractAddress = "0x2aADc85655eB503710381BB6a5B7Dde6663aaeE6";

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

function bidContract(contractAddress, amountInEther, callback) {
    var contractAbi = localWeb3.eth.contract(auctionContractAbi);
    var myContract = contractAbi.at(contractAddress);
    var myAccount = localWeb3.eth.accounts[0];

    const transactionObject = {
        from: myAccount,
        value: localWeb3.toWei(amountInEther, "ether")
    };


    myContract.bid.sendTransaction(transactionObject, function (error, result) {
        if (error) {
            console.log('something wrong');
            return;
        }

        callback(result);
    }
)
}


function changeStatusOfContract(contractAddress, callback) {
    var contractAbi = localWeb3.eth.contract(auctionContractAbi);
    var myContract = contractAbi.at(contractAddress);

    var myAccount = localWeb3.eth.accounts[0];

    console.log(myAccount);
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