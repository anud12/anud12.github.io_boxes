it("runs", async () => {
    const readFileSync = require("fs").readFileSync;
    process.env.CLIENT_EMAIL = readFileSync(`${__dirname}/client_email`).toString();
    process.env.PRIVATE_KEY = readFileSync(`${__dirname}/private_key`).toString();
    await require("./index_add").addJob()
}, 10000)