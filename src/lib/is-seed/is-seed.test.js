import { isSeed } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('isSeed', () => {
  it('should exist', () => {
    expect(isSeed).toBeDefined();
  });

  it('should work when the hex is a seed', () => {
    expect(isSeed(100))
      .toBe(true);
  });

  it('should work when the hex is not a seed', () => {
    expect(isSeed(1))
      .toBe(false);
  });
});
