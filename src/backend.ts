interface Backend {
    url: string;
}

let backends: Array<Backend> = [];
['http://localhost:8081', 'http://localhost:8082', 'http://localhost:8083'].forEach((url) => backends.push({ url }));

export const nextBackend = (): Backend | undefined => {
    const nextBackend = backends.shift();
    if (nextBackend) {
        backends.push(nextBackend);
    }
    return nextBackend;
};
