import { markBoundaries } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('markBoundaries', () => {
  it('should exist', () => {
    expect(markBoundaries).toBeDefined();
  });
});
