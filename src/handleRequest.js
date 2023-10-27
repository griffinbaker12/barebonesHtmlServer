"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRoute_1 = require("./createRoute");
function handleRequest(req) {
    const route = req.method + req.path;
    if (!createRoute_1.routes[route]) {
        throw new Error('404! Route does not exist');
    }
    else {
        const callback = createRoute_1.routes[route];
        return callback(req);
    }
}
exports.default = handleRequest;
