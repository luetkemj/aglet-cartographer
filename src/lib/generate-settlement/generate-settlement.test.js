import { generateSettlement } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('generateSettlement', () => {
  it('should exist', () => {
    expect(generateSettlement).toBeDefined();
  });
});
