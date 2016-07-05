'use strict';

exports.topic = {
  name: 'sf',
  description: 'salesforce'
};

exports.commands = [
  require('./commands/deploy.js')
];
