var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DIAMCO' });
});

/* GET SPV page. */
router.get('/spv', function(req, res, next) {
    res.render('spv', { title: 'Create Auction', res: res });
});

/* GET SPV page. */
router.get('/spv-set-diamonds', function(req, res, next) {
    res.render('spv-set-diamonds', { title: 'Create Auction' });
});

/* GET SPV page. */
router.get('/spv-set-days', function(req, res, next) {
    res.render('spv-set-days', { title: 'Create Auction' });
});

/* GET SPV page. */
router.get('/spv-view-auctions', function(req, res, next) {
    res.render('spv-view-auctions', { title: 'DIAMCO' });
});

/* GET SPV page - Ready to launch state. */
router.get('/auction-ready-to-launch', function(req, res, next) {
  res.render('auction-ready-to-launch', { title: 'DIAMCO' });
});


/* GET SPV page - Ready to launch state. */
router.get('/auction-waiting-production', function(req, res, next) {
  res.render('auction-waiting-production', { title: 'DIAMCO' });
});


/* GET SPV page - Ready to launch state. */
router.get('/auction-approval-received', function(req, res, next) {
  res.render('auction-approval-received', { title: 'DIAMCO' });
});

/* GET SPV page - Ready to launch state. */
router.get('/auction-alcoins-transferred', function(req, res, next) {
  res.render('auction-alcoins-transferred', { title: 'DIAMCO' });
});

/* GET SPV page - Ready to launch state. */
router.get('/wallet', function(req, res, next) {
  res.render('wallet', { title: 'DIAMCO' });
});

/* GET Investor page. */
router.get('/investor', function(req, res, next) {
    res.render('investor', { title: 'DIAMCO' });
});

/* GET AWDC page. */
router.get('/awdc', function(req, res, next) {
    res.render('awdc', { title: 'DIAMCO' });
});

/* GET Smart contracts page. */
router.get('/smart-contracts', function(req, res, next) {
    res.render('smart-contracts', { title: 'DIAMCO' });
});

module.exports = router;
