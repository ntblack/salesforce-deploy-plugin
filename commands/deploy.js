'use strict';
module.exports = {
  topic: 'sf',
  command: 'deploy',
  description: 'deploys salesforce metadata',
  help: 'optionally specify the directory to deploy with an argument',
  run: function (context) {
    console.log('Deploying salesforce metadata');
  }
};
