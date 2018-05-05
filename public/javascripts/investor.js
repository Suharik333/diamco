$.when( $.ready ).then(function() {
  var button = $("#buy-diamonds");
  button.click(function() {
    console.log('buying diamonds');
    var input = $("#invest-amount");
    if ($.isNumeric(input.val())) {
      console.log('entered: ' + input.val());
      var eth = input.val() / 820;
      console.log('received: ' + eth);
      alert("You've bought diamonds for " + eth + " ETH")
    } else {
      console.log('please stop')
    }
  });
});