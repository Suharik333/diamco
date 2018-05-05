$.when( $.ready ).then(function() {
    var button = $("#set-number-of-diamonds");
    button.click(function() {
        window.location.href = "/spv-set-days";
    });
});