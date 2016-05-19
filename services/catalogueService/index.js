'use strict';
const _ = require('lodash');
const Q = require('q');

const CATALOGUE = {
  _standard: [
    {
      name: 'Sky News',
      global: true
    },
    {
      name: 'Sky Sports News',
      global: true
    }
  ],
  LONDON: [
    {
      name: 'Chelsea TV'
    },
    {
      name: 'Arsenal TV'
    }
  ],
  LIVERPOOL: [
    {
      name: 'Liverpool TV'
    }
  ]
};

function list (locationID) {
  return Q.when(_.union(CATALOGUE._standard, CATALOGUE[locationID]));
}

module.exports = {
  list: list
};
