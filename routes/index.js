var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var allApartments = req.app.get("apartmentsData");

    res.render('index', {
        siteTitle: 'Blue Slate Properties',
        pageTitle: 'Home',
        pageId: 'home',
        apartmentsList: allApartments
    });
});

module.exports = router;
