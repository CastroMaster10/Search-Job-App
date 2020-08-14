var CronJob = require('cron').CronJob;
const gitHub = require('./tasks /github-api');
var job = new CronJob('* * * * *', gitHub, null, true, 'America/Los_Angeles');
job.start();    




