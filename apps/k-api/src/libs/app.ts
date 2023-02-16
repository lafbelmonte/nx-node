import Koa from 'koa';
import { Framework } from '@nx-node/types';

const app = new Koa();

app.use((ctx) => {
  ctx.status = 200;
  ctx.message = `Welcome to ${Framework.Koa} API.`;
});

export default app;
