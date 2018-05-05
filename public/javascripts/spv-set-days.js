$.when( $.ready ).then(function() {
    var button = $("#set-number-of-days");
    button.click(function() {
        window.location.href = "/spv";
    });
});