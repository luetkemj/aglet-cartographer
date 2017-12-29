import { makeSettlements } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('makeSettlements', () => {
  it('should exist', () => {
    expect(makeSettlements).toBeDefined();
  });
});
