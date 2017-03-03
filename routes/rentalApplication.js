var express = require('express');
var router = express.Router();

router.get('/application', function (req, res, next) {
    var allApartments = req.app.get("apartmentsData");

    res.render('rentalApplication', {
        siteTitle: 'Blue Slate Properties',
        pageTitle: 'Rental Application',
        pageId: 'rental-application',
        apartmentsList: allApartments
    });
});

module.exports = router;
