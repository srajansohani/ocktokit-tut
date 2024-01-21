import { Octokit } from "octokit";


const octokit = new Octokit({
    auth: "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"
})

async function run(){
    const response = await octokit.request('GET /user');

    console.log(response.data.login);
}
run();