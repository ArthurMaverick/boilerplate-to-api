"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080,
    jwtSecret: (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : 'chavesupersecreta'
};
