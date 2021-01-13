"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.serverError = void 0;
const serverError = (error) => ({
    statusCode: 500,
    data: error.stack
});
exports.serverError = serverError;
const ok = (data) => ({
    statusCode: 200,
    data
});
exports.ok = ok;
