"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("@/main/config/routes");
// import { setupApolloServer } from '@/main/config/apollo-server'
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// setupApolloServer(app)
routes_1.setupRoutes(app);
exports.default = app;
