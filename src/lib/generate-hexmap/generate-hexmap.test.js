import { generateHexmap } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('generateHexmap', () => {
  it('should exist', () => {
    expect(generateHexmap).toBeDefined();
  });
});
