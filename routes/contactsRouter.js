var express = require('express');
var router = express.Router();
var fs = require('fs');
var contacts = require('../data/contacts.json');

router.route('/')
    .get(function (req, res, next) {
        res.redirect('/');
    })
    .post(function (req, res, next) {
        contacts.push(req.body);
        fs.writeFile('../bsp_webapp/data/contacts.json', JSON.stringify(contacts), 'utf8', function (err) {
            if (err) {
                console.log(err);
            }
        });
        res.sendStatus(200);
    });

module.exports = router;
