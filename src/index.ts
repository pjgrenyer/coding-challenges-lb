import express, { Request, Response } from 'express';
import axios from 'axios';

const port = 8080;
const app = express();

app.get('/', async (req: Request, res: Response) => {
    const response = await axios.get('http://localhost:8081');
    res.send(response.data);
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});
