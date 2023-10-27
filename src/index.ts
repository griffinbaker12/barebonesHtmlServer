import net from 'net';
import parseRequest from './parser';
import { createRoute } from "./createRoute"
import handleRequest from './handleRequest'

const server = net.createServer((socket: any) => {
    socket.on('data', (data: any) => {
        // * just bytes!
        // console.log(data, 'the raw data is');
        // * interpret the bytes as ASCII
        // console.log(data.toString(), 'the data we get is');
        const parsedRequest = parseRequest(data.toString());
        const res = handleRequest(parsedRequest)
        const buffer = Buffer.from(res, 'utf-8');
        socket.write(`HTTP/1.1 200 OK\r\nContent-Length: ${buffer.byteLength}\r\n\r\n`);
        socket.write(buffer);
    });
    server.on('error', (err) => {
        console.log(err, 'the error is');
    })
});

createRoute("GET", "/", (_req: any) => "does this run")

server.listen(8080, () => {
    console.log('server listening on port 8080');
})