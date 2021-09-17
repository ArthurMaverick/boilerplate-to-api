"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../middlewares/authentication");
exports.default = (router) => {
    router.get('/', authentication_1.auth, (req, res) => {
        res.json({ message: 'hello world' });
    });
};
