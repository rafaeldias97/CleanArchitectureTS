"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const app_1 = __importDefault(require("@/main/config/app"));
const env_1 = __importDefault(require("@/main/config/env"));
app_1.default.listen(env_1.default.port, () => console.log(`Server running at: http://localhost:${env_1.default.port}`));
