import axios from 'axios';
import { addBackend, backends, removeBackend } from './backend';

const healthCheckPath = process.env.HEALTH_CHECK_PATH ?? '_health';

export const healthChecks = async () => {
    for (const backend of backends) {
        if (await isHealthy(backend)) {
            // eslint-disable-next-line no-console
            console.log(`${backend} is healthy`);
            addBackend(backend);
        } else {
            // eslint-disable-next-line no-console
            console.log(`${backend} is not healthy`);
            removeBackend(backend);
        }
    }
};

const isHealthy = async (url: string): Promise<boolean> => {
    try {
        const response = axios.get(`${url}/${healthCheckPath}`);
        return (await response).status === 200;
    } catch (error: any) {
        return false;
    }
};
