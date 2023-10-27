"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const parser_1 = __importDefault(require("./parser"));
const createRoute_1 = require("./createRoute");
const handleRequest_1 = __importDefault(require("./handleRequest"));
const server = net_1.default.createServer((socket) => {
    socket.on('data', (data) => {
        // * just bytes!
        // console.log(data, 'the raw data is');
        // * interpret the bytes as ASCII
        // console.log(data.toString(), 'the data we get is');
        console.log('*** getting data ***`');
        const parsedRequest = (0, parser_1.default)(data.toString());
        const res = (0, handleRequest_1.default)(parsedRequest);
        const buffer = Buffer.from(res, 'utf-8');
        console.log('the len is***', buffer.length);
        socket.write(`HTTP/1.1 200 OK\r\nContent-Length: ${buffer.byteLength}\r\n\r\n`);
        socket.write(buffer);
    });
    server.on('error', (err) => {
        console.log(err, 'the error is');
    });
});
(0, createRoute_1.createRoute)("GET", "/", (_req) => "does this run");
server.listen(8080, () => {
    console.log('server listening on port 8080');
});
