const config = {
    external: ["anud12.github.io_job_base"]
}
require("anud12.github.io_ui_compiler").JSX(`${__dirname}/index.tsx`, `${__dirname}/../index`, config);
require("anud12.github.io_ui_compiler").JSX(`${__dirname}/index_add.tsx`, `${__dirname}/../add/index`, config);