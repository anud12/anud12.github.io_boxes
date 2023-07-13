const newGoogleSession = require("anud12.github.io_job_base");
module.exports = (async () => {
    const globalFs = (await newGoogleSession()).intoDrive();
    const trash = await globalFs.findOneById("1NwJuSyQ4rFoI6I07vAwjmm62X3zuCNxv");
    const db = (await globalFs.findOneById("1BlHXnJJPuWu0_VDe-JAJzZ0XAR_MplEW45TnmdMeKfI")).intoSheet()
    const images = await globalFs.findOneById("1gfpLitPAZtWF5omk97dB3IXbf_leWXPp");

    const create = await globalFs.findOneById("11zqF7BKA-7hvcONuSmbU2RGHrxmLafNl");
    const rows = await Promise.all((await create.findByName("form-data.json")).map(async file => {
        const data = await file.bodyJson();
        const imageData = new Buffer(data.image.data, 'base64');
        await file.moveTo(trash);
        return {
            id: undefined,
            data: {
                ...data,
                image: undefined,
                id: file.id,
                imageLink: (await images.create(file.id, data.image.mimeType, imageData)).link
            }
        }
    }));
    await db.saveAll(rows);
})().catch(e => {
    console.trace(e);
})
