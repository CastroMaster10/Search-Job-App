const fetch = require('node-fetch');
const GIT_URL = 'https://jobs.github.com/positions.json'
const redis = require("redis");
const client = redis.createClient({
    host: 'redis-10311.c8.us-east-1-4.ec2.cloud.redislabs.com',
    port: '10311',
    password: 'CIgEc321z5OkukPtqR34aG1scv3hXRIE'
});

const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


const FetchGitHubApi = async () => {

    let resultCount = 1, onPage = 0;
    const allJobs = [];

    //fetch all pages

    while (resultCount > 0) {
        const response = await fetch(`${GIT_URL}?page=${onPage}`)
        const jobs = await response.json();
        allJobs.push(...jobs)
        resultCount = jobs.length
        console.log('got', jobs.length, 'jobs');
        onPage++
    }

    //filter algorithm
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase(); // it transforms the word Junior into lowercases

        //algo
        if (jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')) {
            return false
        }
        return true
    })


    //set in rediss

    console.log('There are', jrJobs.length, "junior jobs in total")
    console.log('got', allJobs.length, 'jobs');
    const success = await setAsync('mykey', JSON.stringify(jrJobs));
    console.log({ success });

}



module.exports = FetchGitHubApi;