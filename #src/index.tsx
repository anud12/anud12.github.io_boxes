import React from "react";
import { Page } from "anud12.github.io_ui_base/src/components/Page"
import { Form } from "anud12.github.io_ui_base/src/components/Form"
import { Input, Select } from "anud12.github.io_ui_base/src/components/atoms/Input";
module.exports = (
    <Page title="anud12.github.io">
        <Form folderId="1DwTbUSWf5kzNq84Kc08bJ9Wyw9ijfBuS">
            <Input name="name" type="text" />
            <Input name="image" type="file" accept="image/*" />
            <Input name="months" type="number" />
        </Form>
    </Page>
)