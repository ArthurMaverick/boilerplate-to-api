"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const env_1 = require("./config/env");
app_1.app.listen(env_1.env.port, () => console.log(`server running at port ${env_1.env.port} :-) -> localhost:${env_1.env.port}`));
