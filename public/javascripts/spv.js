$.when( $.ready ).then(function() {
    var button = $("#create-auction");
    button.click(function() {
        window.location.href = "/spv-set-diamonds";
    });
});