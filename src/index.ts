import { nextBackend } from './backend';
import express, { Request, Response } from 'express';
import axios from 'axios';
import { healthChecks } from './healthChecks';

const port = process.env.PORT ? +process.env.PORT : 8080;
const healthCheckInterval = process.env.HEALTH_CHECK_INTERVAL ? +process.env.HEALTH_CHECK_INTERVAL : 10;
const app = express();

app.get('/', async (req: Request, res: Response) => {
    const backend = nextBackend();
    if (backend) {
        const response = await axios.get(backend);
        res.send(response.data);
    } else {
        res.status(500).send('Error!');
    }
});

healthChecks();
const timer = setInterval(async () => {
    await healthChecks();
}, 1000 * healthCheckInterval);
timer.unref();

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});
