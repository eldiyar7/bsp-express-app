var express = require('express');
var router = express.Router();
var fs = require('fs');
var apartments = require('../data/apartments.json');
var applications = require('../data/applications.json');
var path = require('path');


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
        fs.writeFile(path.join(_dirname, '../bsp_webapp/data/applications.json'), JSON.stringify(applications), 'utf8', function (err) {
            if (err) {
                next(err);
                return;
            }
        });
        res.redirect('/');
    });

module.exports = router;
