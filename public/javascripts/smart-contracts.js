$.when( $.ready ).then(function() {
    var sendMoney = $("#send-money");
    sendMoney.click(function(e) {
        e.preventDefault();
        sendMoneyToAuction(diamContractAddress, auctionContractAddress, 100, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });

    var create = $("#launch-auction");
    create.click(function(e) {
        e.preventDefault();
        launchAuction(auctionContractAddress, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });

    var view = $("#produce-auction");
    view.click(function(e) {
        e.preventDefault();
        produceAuction(auctionContractAddress, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });

    var send = $("#send-auction");
    send.click(function(e) {
        e.preventDefault();
        sendAuction(auctionContractAddress, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });

    var issue = $("#issue-auction");
    issue.click(function(e) {
        e.preventDefault();
        issueAuction(auctionContractAddress, function (result) {
            console.log('WhoWho!');
            console.log(result);
        });
    });
});