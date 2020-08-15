const express = require('express');
const app =  new express();
const {port} = require('./config')
const redis = require("redis");
const client = redis.createClient({
    host: 'redis-10311.c8.us-east-1-4.ec2.cloud.redislabs.com',
    port: '10311',
    password: 'CIgEc321z5OkukPtqR34aG1scv3hXRIE'
});
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
var CronJob = require('cron').CronJob;
const gitHub = require('./models/github-api');
var job = new CronJob('* * * * *', gitHub, null, true, 'America/Los_Angeles');

client.on('connect', () => {
    console.log('Connected to Redis!')
})


//middleware
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "https://client-search-app.vercel.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/',(req,res) => {
    res.send({
        message: 'Hellow World🔊'
    })
})

app.get('/jobs', async(req,res) => {
    const jobs = await getAsync('mykey')
    res.send(jobs)
})

job.start();

app.listen(port, (req,res) => {
    console.log(`Listening on http://localhost:${port} port`)
})