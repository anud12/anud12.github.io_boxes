import React from "react";
import {Form, Input, Page} from "anud12.github.io_ui_base";
import {folderId} from "./index";
import newGoogleSession from "anud12.github.io_job_base";

export const createFolderId = "11zqF7BKA-7hvcONuSmbU2RGHrxmLafNl";
type Data = Record<"name" | "image" | "months", any>

export default (
  <Page title="Boxes Add">
    <Form folderId={createFolderId}>
      <Input<Data> name="name" type="text"/>
      <Input<Data> name="image" type="file" accept="image/*" capture="environment"/>
      <Input<Data> name="months" type="number"/>
    </Form>
  </Page>
);

export const addJob = async () => {
  const globalFs = (await newGoogleSession()).intoDrive();
  const pending = await globalFs.findOneByIdLazy(createFolderId);
  const fileList = await pending.findByName("form-data.json");
  if (!fileList?.length) {
    return;
  }
  const trash = await globalFs.findOneById(folderId.trash);
  const db = (await globalFs.findOneById(folderId.db)).intoSheet()
  const images = await globalFs.findOneById(folderId.images);

  const rows = await Promise.all(fileList.map(async file => {
    const data = await file.bodyJson<Data>();
    const imageData = Buffer.from(data.image.data, 'base64');
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
}