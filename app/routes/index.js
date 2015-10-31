var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index'], function(req, res) {
    res.render('index', {message: null, error: null});
});

module.exports = router;
