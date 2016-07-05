'use strict';
module.exports = {
  topic: 'sf',
  command: 'deploy',
  description: 'deploys salesforce metadata',
  help: 'sf:deploy reads salesforce metadata in metadata api format and deploys it to your salesforce environment',
  flags: [
    {name: 'dir', char: 'd', description: 'directory to deploy', hasValue: true}
  ],
  run: function (context) {
    const src = context.flags.dir ? context.flags.dir : '.';
    console.log(`Deploying salesforce metadata from ${src}`);
  }
};
