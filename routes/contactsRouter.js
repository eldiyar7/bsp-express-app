var express = require('express');
var router = express.Router();
var fs = require('fs');
var contacts = require('../data/contacts.json');
var path = require('path');

router.route('/')
    .get(function (req, res, next) {
        res.redirect('/');
    })
    .post(function (req, res, next) {
        contacts.push(req.body);
        fs.writeFile(path.join(_dirname, '../bsp_webapp/data/contactsss.json'), JSON.stringify(contacts), 'utf8', function (err) {
            if(err) {
                next(err);
                return;
            }
        });
        res.sendStatus(200);
    });

module.exports = router;
