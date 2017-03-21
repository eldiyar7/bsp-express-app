var express = require('express');
var router = express.Router();
var apartments = require('../data/apartments.json');
var _ = require('lodash');

router.get('/:apartmentid', function (req, res) {
    var apartmentId = req.params.apartmentid;
    var apartment = _.find(apartments, a => a.address === apartmentId);
    if(!apartment) {
        res.sendStatus(404);
        return;
    }
    res.render('apartments',
        {
            siteTitle: apartment.address,
            pageTitle: apartment.status,
            apartment: apartment
        });
});

module.exports = router;
