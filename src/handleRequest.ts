import { routes } from "./createRoute";

export default function handleRequest(req: any) {
    const route = req.method + req.path;
    if (!routes[route]) {
        throw new Error('404! Route does not exist');
    } else {
        const callback = routes[route];
        return callback(req);
    }
}