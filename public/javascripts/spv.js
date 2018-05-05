$.when( $.ready ).then(function() {
    var create = $("#create-auction");
    create.click(function() {
        window.location.href = "/spv-set-diamonds";
    });

    var view = $("#view-auctions");
    view.click(function() {
        window.location.href = "/spv-view-auctions";
    });
});