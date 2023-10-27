"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestKeys = ["method", "path", "protocol"];
function parseRequest(data) {
    const requestObject = {};
    const [requestHeaders, body] = data.split('\r\n\r\n');
    const [requestLine, ...headers] = requestHeaders.split("\r\n");
    requestLine.split(' ').forEach((element, i) => {
        requestObject[requestKeys[i]] = element;
    });
    for (const header of headers) {
        const [hKey, hValue] = header.split(": ");
        requestObject[hKey] = hValue;
    }
    if (requestObject['Content-Type'] === "application/json") {
        requestObject["body"] = JSON.parse(body);
    }
    return requestObject;
}
exports.default = parseRequest;
