'use strict';
const express = require('express');
const router = express.Router();
const catalogueService = require('../services/catalogueService');

router.get('/', function(req, res, next) {
  catalogueService.list(req.query.locationID)
    .then((response) => res.status(200).send({data: response}));
});

module.exports = router;
