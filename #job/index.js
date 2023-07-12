const a = require("anud12.github.io_job_base").default;
const {readFileSync} = require("fs");
( async () => {
    process.env.CLIENT_EMAIL = readFileSync(`${__dirname}/client_email`).toString();
    process.env.PRIVATE_KEY = readFileSync(`${__dirname}/private_key`).toString();
    console.log(await a());
})()
