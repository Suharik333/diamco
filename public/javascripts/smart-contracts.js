$.when( $.ready ).then(function() {
    var sendMoney = $("#send-money");
    create.click(function() {
        sendMoneyToAuction(auctionContractAddress, diamContractAddress, 100, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });

    var create = $("#launch-auction");
    create.click(function() {
        launchAuction(auctionContractAddress, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });

    var view = $("#produce-auction");
    view.click(function() {
        produceAuction(auctionContractAddress, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });
});