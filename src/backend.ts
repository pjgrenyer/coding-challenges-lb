export const backends = ['http://localhost:8081', 'http://localhost:8082', 'http://localhost:8083'];

let activeBackends: Array<string> = [];
backends.forEach((url) => activeBackends.push(url));

export const nextBackend = (): string | undefined => {
    const nextBackend = activeBackends.shift();
    if (nextBackend) {
        activeBackends.push(nextBackend);
    }
    return nextBackend;
};

export const removeBackend = (url: string) => {
    activeBackends = activeBackends.filter((backend) => backend != url);
};

export const addBackend = (url: string) => {
    if (!activeBackends.find((backend) => backend == url)) {
        activeBackends.push(url);
    }
};
