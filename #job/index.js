const newGoogleSession = require("anud12.github.io_job_base");

const {readFileSync} = require("fs");
( async () => {
    process.env.CLIENT_EMAIL = readFileSync(`${__dirname}/client_email`).toString();
    process.env.PRIVATE_KEY = readFileSync(`${__dirname}/private_key`).toString();
    const globalFs = (await newGoogleSession()).intoDrive();
    const boxes = await globalFs.findOneById("1DwTbUSWf5kzNq84Kc08bJ9Wyw9ijfBuS");
    const db = (await globalFs.findOneById("1BlHXnJJPuWu0_VDe-JAJzZ0XAR_MplEW45TnmdMeKfI")).intoSheet()
    const trash = await globalFs.findOneById("1Ehz04RmJqPzmVtZtehYRsSnzOGDX-cXw");
    const images = await globalFs.findOneById("1gfpLitPAZtWF5omk97dB3IXbf_leWXPp");
    const rows = await Promise.all((await boxes.findByName("form-data.json")).map(async file => {
        const data = await file.bodyJson();
        console.log(JSON.stringify(data,null,2))
        const imageData = new Buffer(data.image ,'base64').toString('ascii');
        return {
            id: undefined,
            data: {
                ...data,
                image: (await images.create(file.id, "image/jpeg", imageData)).link
            }
        }
    }));
    db.saveAll(rows);
})().catch(e => {
    console.trace(e);
})
