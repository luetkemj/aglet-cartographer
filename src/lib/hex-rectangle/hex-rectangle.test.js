import { hexRectangle } from '../../index.prod';

describe('hexRectangle', () => {
  it('should exist', () => {
    expect(hexRectangle).toBeDefined();
  });

  it('should work without an inital hex', () => {
    expect(hexRectangle(3, 3)).toEqual([
      '0,0,0',
      '0,1,-1',
      '0,2,-2',
      '1,0,-1',
      '1,1,-2',
      '1,2,-3',
      '2,-1,-1',
      '2,0,-2',
      '2,1,-3',
    ]);
  });

  it('should work with an inital hex', () => {
    expect(hexRectangle(3, 3, { x: 0, y: 0, z: 0 })).toEqual([
      '0,0,0',
      '0,1,-1',
      '0,2,-2',
      '1,0,-1',
      '1,1,-2',
      '1,2,-3',
      '2,-1,-1',
      '2,0,-2',
      '2,1,-3',
    ]);
  });

  it('should work with an inital hex other than "0,0,0"', () => {
    expect(hexRectangle(3, 3, { x: 1, y: 1, z: 1 })).toEqual([
      '1,0,-1',
      '1,1,-2',
      '1,2,-3',
      '2,-1,-1',
      '2,0,-2',
      '2,1,-3',
      '3,-1,-2',
      '3,0,-3',
      '3,1,-4',
    ]);
  });
});
