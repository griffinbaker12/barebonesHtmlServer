interface Routes {
    [key: string]: (req: any) => string;
}

export let routes: Routes = {};

export function createRoute(method: string, path: string, callback: (req: any) => string) {
    const methodAndPath = method + path;
    if (!routes) {
        const newObj = {
            [methodAndPath]: callback
        }
        routes = newObj;
    } else {
        routes[methodAndPath] = callback;
    }
}