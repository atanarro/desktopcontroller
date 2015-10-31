(function() {
    var express = require('express');
    var loudness = require('loudness');
    var router = express.Router();

    router.get(['/setVolume/:volume'], function(req, res) {
        loudness.setVolume(JSON.parse(req.params.volume), function(err) {
            res.send({
                error: err
            });
        });
    });
    router.get(['/getVolume'], function(req, res) {
        loudness.getVolume(function(err, vol) {
            res.send({
                volume: vol,
                error: err
            });
        });
    });
    router.get(['/setMuted/:mute'], function(req, res) {
        loudness.setMuted(JSON.parse(req.params.mute), function(err) {
            res.send({
                error: err
            });
        });
    });
    router.get(['/getMuted'], function(req, res) {
        loudness.getMuted(function(err, mute) {
            res.send({
                mute: mute,
                error: err
            });
        });
    });
    module.exports = router;
}());
