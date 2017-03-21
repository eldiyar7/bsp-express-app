var express = require('express');
var router = express.Router();
var fs = require('fs');
var apartments = require('../data/apartments.json');
var applications = require('../data/applications.json');

router.route('/')
    .get(function (req, res, next) {
        res.render('application',
            {
                siteTitle: 'Blue Slate Properties',
                pageTitle: 'Application',
                pageId: 'application',
                apartments: apartments,
            });
    })
    .post(function (req, res, next) {
        applications.push(req.body);
        fs.writeFile('../bsp_webapp/data/applications.json', JSON.stringify(applications), 'utf8', function (err) {
            if (err) {
                console.log(err);
            }
        });
        res.redirect('/');
    });

module.exports = router;
