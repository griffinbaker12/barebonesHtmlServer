"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoute = exports.routes = void 0;
exports.routes = {};
function createRoute(method, path, callback) {
    const methodAndPath = method + path;
    if (!exports.routes) {
        const newObj = {
            [methodAndPath]: callback
        };
        exports.routes = newObj;
    }
    else {
        exports.routes[methodAndPath] = callback;
    }
}
exports.createRoute = createRoute;
