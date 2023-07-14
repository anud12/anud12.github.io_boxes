const readFileSync = require("fs").readFileSync;

it("runs", async () => {
    process.env.CLIENT_EMAIL = readFileSync(`${__dirname}/client_email`).toString();
    process.env.PRIVATE_KEY = readFileSync(`${__dirname}/private_key`).toString();
    await require("./index");
})