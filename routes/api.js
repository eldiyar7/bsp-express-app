var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var contactData = require('../data/contact.json');

router.get('/api', function (req, res, next) {
   res.json(contactData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function (req, res, next) {
    contactData.push(req.body);
    fs.writeFile('../bsp_webapp/data/contact.json', JSON.stringify(contactData), 'utf8', function (err) {
        if (err) {
            console.log(err);
        }
    });
    res.sendStatus(200);
});

module.exports = router;
