import { markBoundary } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('markBoundary', () => {
  it('should exist', () => {
    expect(markBoundary).toBeDefined();
  });

  it('should work for rows', () => {
    expect(markBoundary({ x: 0, y: 0, z: 0 }, 5, false, false)).toEqual([
      '0,0,0',
      '1,0,-1',
      '2,-1,-1',
      '3,-1,-2',
      '4,-2,-2',
    ]);
  });

  it('should work for columns', () => {
    expect(markBoundary({ x: 0, y: 0, z: 0 }, 5, true, false)).toEqual([
      '0,0,0',
      '0,1,-1',
      '0,2,-2',
      '0,3,-3',
      '0,4,-4',
    ]);
  });

  it('should work with any originHex', () => {
    expect(markBoundary({ x: 31, y: -15, z: -16 }, 5, true)).toEqual([
      '31,-15,-16',
      '31,-14,-17',
      '31,-13,-18',
      '31,-12,-19',
      '31,-11,-20',
    ]);
  });
});
