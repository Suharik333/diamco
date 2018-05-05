window.addEventListener('load', function() {

    // Check if Web3 has been injected by the browser:
    if (typeof web3 !== 'undefined') {
        // You have a web3 browser! Continue below!
        startApp(web3);
    } else {
        alert('SORRY');
    }

});


function startApp() {
    alert('OK');
}