pragma solidity ^0.4.22;

interface ERC20 {
        function transfer(address _to, uint256 _value) public returns (bool success);
        function balanceOf(address _owner) public constant returns (uint256 balance);
        function mint(address _to, uint256 _value) public returns (bool success);
    }

contract Auction {
    enum State { Draft, Launched, Production, Sent, Finished }
    State public state;

    mapping (address => uint) bids;
    address[] public bidders;

    // Parameters of the auction. Times are either
    // absolute unix timestamps (seconds since 1970-01-01)
    // or time periods in seconds.
    address public SPV;
    address public AWDC;
    address diamToken = 0xDa34a216e537da3F7c85f2922008861FD069BB15;
    address alCoinToken = 0x1d9D21b734A3EcFcfBE2A3B286A58c094782b3Dc;
    uint public auctionEnd;
    uint public fullPrice;
    uint public totalCollected;
    uint public rateEthToAlCoin = 1;

    modifier onlySPV() {
        require(msg.sender == SPV);
        _;
    }

    modifier onlyAWDC() {
        require(msg.sender == AWDC);
        _;
    }

    // Set to true at the end, disallows any change
    bool ended;

    // Events that will be fired on changes.
    event Bid(address bidder, uint amount);
    event AuctionLaunched();
    event AuctionProduction(uint amountCollected);
    event AuctionSent();
    event AuctionFinished();

    // The following is a so-called natspec comment,
    // recognizable by the three slashes.
    // It will be shown when the user is asked to
    // confirm a transaction.

    /// Create a simple auction with `_biddingTime`
    /// seconds bidding time on behalf of the
    /// beneficiary address `_SPV`.
    constructor(
        uint _biddingTime,
        address _SPV,
        address _AWDC,
        uint _fullPrice
    ) public {
        SPV = _SPV;
        AWDC = _AWDC;
        auctionEnd = now + _biddingTime;
        fullPrice = _fullPrice;
        totalCollected = 0;
        state = State.Draft;
    }

    /// Bid on the auction with the value sent
    /// together with this transaction.
    /// The value will only be refunded if the
    /// auction is not won.
    function bid() public payable {
        // No arguments are necessary, all
        // information is already part of
        // the transaction. The keyword payable
        // is required for the function to
        // be able to receive Ether.

        // Revert the call if the bidding
        // period is over.
        require(
            now <= auctionEnd,
            "Auction already ended."
        );

        require(
            state == State.Launched,
            "Auction is not Launched"
        );

        require(
            totalCollected <= fullPrice,
            "Auction is fullfilled"
        );

        bids[msg.sender] += msg.value;
        totalCollected += msg.value / (1 ether);
        bidders.push(msg.sender);
        emit Bid(msg.sender, msg.value);
    }

    function auctionLaunch() public onlySPV {
        require(state == State.Draft);

        ERC20 token = ERC20(diamToken);
        uint256 balance = token.balanceOf(address(this));
        require(balance != 0, "Auction should be backed by DIAM tokens");

        //require(diamBalance >= fullPrice / diamRate, "Not enough DIAMs received");
        state = State.Launched;
        emit AuctionLaunched();
    }

    /// End the auction and send the highest bid
    /// to the beneficiary.
    function auctionProduce() public onlySPV {
        // It is a good guideline to structure functions that interact
        // with other contracts (i.e. they call functions or send Ether)
        // into three phases:
        // 1. checking conditions
        // 2. performing actions (potentially changing conditions)
        // 3. interacting with other contracts
        // If these phases are mixed up, the other contract could call
        // back into the current contract and modify the state or cause
        // effects (ether payout) to be performed multiple times.
        // If functions called internally include interaction with external
        // contracts, they also have to be considered interaction with
        // external contracts.

        // 1. Conditions
        require(state == State.Launched, "Auction is not launched");
        require(now >= auctionEnd || totalCollected >= fullPrice, "Auction not yet ended.");

        // 2. Effects
        state = State.Production;
        emit AuctionProduction(totalCollected);

        // 3. Interaction
        SPV.transfer(totalCollected);
    }

    function auctionSend() public onlyAWDC {
        require(state == State.Production, "Auction is not in Production state");
        state = State.Sent;
        emit AuctionSent();
    }

    function auctionIssue() public onlySPV {
        require(state == State.Sent, "Auction is not in sent state");
        ERC20 token = ERC20(alCoinToken);


        for (uint i=0; i<bidders.length; i++) {
            require(token.mint(bidders[i], bids[bidders[i]] / (rateEthToAlCoin * (1 ether))));
        }

        emit AuctionFinished();
        state = State.Finished;
    }

}