"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const expressMiddles_1 = require("./expressMiddles");
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
(0, expressMiddles_1.setupMiddlewares)(app);
(0, routes_1.setupRoutes)(app);