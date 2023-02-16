import express, { Express, Request, Response } from 'express';
import { Framework } from '@nx-node/types';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to ${Framework.Express} API.`);
});

export default app;
