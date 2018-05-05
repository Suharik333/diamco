var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DIAMCO' });
});

/* GET SPV page. */
router.get('/spv', function(req, res, next) {
    res.render('index', { title: 'DIAMCO' });
});

/* GET Investor page. */
router.get('/investor', function(req, res, next) {
    res.render('index', { title: 'DIAMCO' });
});

/* GET AWDC page. */
router.get('/awdc', function(req, res, next) {
    res.render('index', { title: 'DIAMCO' });
});

module.exports = router;
