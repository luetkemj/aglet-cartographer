import { markBoundaries } from '../../index.prod';

const lodash = require('lodash');

lodash.random = () => 50;

describe('markBoundaries', () => {
  it('should exist', () => {
    expect(markBoundaries).toBeDefined();
  });

  it('should work for rows', () => {
    expect(markBoundaries({ x: 0, y: 0, z: 0 }, 5, 5)).toEqual([
      '0,0,0',
      '1,0,-1',
      '2,-1,-1',
      '3,-1,-2',
      '4,-2,-2',
      '4,-1,-3',
      '4,0,-4',
      '4,1,-5',
      '4,2,-6',
      '0,1,-1',
      '0,2,-2',
      '0,3,-3',
      '0,4,-4',
      '1,4,-5',
      '2,3,-5',
      '3,3,-6',
    ]);
  });
});
