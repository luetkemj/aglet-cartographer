import { makeOceans } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('makeOceans', () => {
  it('should exist', () => {
    expect(makeOceans).toBeDefined();
  });
});
