(function() {
    var express = require('express');
    var router = express.Router();
    var powerOff = require('power-off');

    router.get(['/'], function(req, res) {
        powerOff(function(err, stderr, stdout) {
            if (err) {
                util.log(err);
                res.status(500).json({error: 'Can\'t run shutdown'});
            } else {
                res.end();
            }
        });

    });
    module.exports = router;
}());
