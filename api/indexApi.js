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

client.on('connect', () => {
    console.log('Connected to Redis!')
})

app.get('/',(req,res) => {
    res.send({
        message: 'Hellow World🔊'
    })
})

app.get('/jobs', async(req,res) => {
    const jobs = await getAsync('mykey')
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.send(jobs)
})

app.listen(port, (req,res) => {
    console.log(`Listening on http://localhost:${port} port`)
})