"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        console.log(req.body);
        const httpResponse = await controller.handle(req);
        res.status(httpResponse.statusCode).json(httpResponse.data);
    };
};
exports.adaptRoute = adaptRoute;
