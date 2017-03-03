var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/apartments', function (req, res) {
    var allApartments = req.app.get("apartmentsData");

    res.redirect('/#our-works');
});

router.get('/apartments/:apartmentid', function (req, res) {

    var allApartments = req.app.get('apartmentsData');
    var apartmentId = req.params.apartmentid;

    var retrievedApartment = _.find(allApartments, function (apartment) {
        return apartment.address == apartmentId;
    });

    res.render('apartmentsView', {
        siteTitle: retrievedApartment.address,
        pageTitle: 'Apartments',
        apartment: retrievedApartment,

    });
});

module.exports = router;
