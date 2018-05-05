window.addEventListener('load', function() {

    // Check if Web3 has been injected by the browser:
    if (typeof web3 !== 'undefined') {
        // You have a web3 browser! Continue below!
        window.localWeb3 = new Web3(web3.currentProvider);
    } else {
        console.log('You dont have web3, install please');
    }

});