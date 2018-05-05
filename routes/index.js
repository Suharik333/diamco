var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DIAMCO' });
});

/* GET SPV page. */
router.get('/spv', function(req, res, next) {
    res.render('spv', { title: 'DIAMCO', res: res });
});

/* GET SPV page. */
router.get('/spv-set-diamonds', function(req, res, next) {
    res.render('spv-set-diamonds', { title: 'DIAMCO' });
});

/* GET SPV page. */
router.get('/spv-set-days', function(req, res, next) {
    res.render('spv-set-days', { title: 'DIAMCO' });
});

/* GET Investor page. */
router.get('/investor', function(req, res, next) {
    res.render('investor', { title: 'DIAMCO' });
});

/* GET AWDC page. */
router.get('/awdc', function(req, res, next) {
    res.render('awdc', { title: 'DIAMCO' });
});

module.exports = router;
