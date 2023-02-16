import request from 'supertest';
import { Framework } from '@nx-node/types';
import app from '../src/libs/app';

describe('GIVEN test', () => {
  it('SHOULD test', async () => {
    const response = await request(app.listen()).get('/').send();

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(`Welcome to ${Framework.Koa} API.`);
  });
});
