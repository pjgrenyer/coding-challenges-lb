import { nextBackend } from './backend';
import express, { Request, Response } from 'express';
import axios from 'axios';

const port = 8080;
const app = express();

app.get('/', async (req: Request, res: Response) => {
    const backend = nextBackend();
    if (backend) {
        const response = await axios.get(backend.url);
        res.send(response.data);
    } else {
        res.status(500).send('Error!');
    }
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});
