import React from "react";
import { Link, Page, Table, } from "anud12.github.io_ui_base";

export const folderId = {
  trash: "1NwJuSyQ4rFoI6I07vAwjmm62X3zuCNxv",
  db: "1BlHXnJJPuWu0_VDe-JAJzZ0XAR_MplEW45TnmdMeKfI",
  images: "1gfpLitPAZtWF5omk97dB3IXbf_leWXPp",
}

export default (
  <Page title="Boxes">
    <Link href={"add"}>Add</Link>
    <Table source={folderId.db} />
  </Page>
)