import express, { Request, Response } from 'express';

const port = 8080;
const app = express();

app.get('/', (req: Request, res: Response) => {
    // eslint-disable-next-line no-console
    console.log(req);
    res.send('Code Challenge!');
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
});
