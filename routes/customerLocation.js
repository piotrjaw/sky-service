'use strict';
const express = require('express');
const router = express.Router();
const customerLocationService = require('../services/customerLocationService');

router.get('/', function(req, res, next) {
  customerLocationService.location(req.query.customerID)
    .then((response) => res.status(200).send({data: response.message
      ? { error: response.message }
      : response}));
});

module.exports = router;
