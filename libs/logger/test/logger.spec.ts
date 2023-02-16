import { logger } from '../src/lib/logger';

describe('logger', () => {
  it('should work', () => {
    expect(logger()).toEqual('logger');
  });
});
