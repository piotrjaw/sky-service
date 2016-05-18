'use strict';
const Q = require('q');

function location (customerId) {
  const LOCATIONS = [
    'LONDON',
    'LIVERPOOL'
  ];

  return Q.when(customerId % 7 === 0
    ? new Error('Invalid Customer ID')
    : LOCATIONS[customerId % 2]);
}

module.exports = {
  location: location
};
