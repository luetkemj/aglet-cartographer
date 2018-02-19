// import { hexRectangle } from '../../index.prod';

import { isOdd, hexRect } from './hex-rectangle';

describe('isOdd', () => {
  it('should work', () => {
    expect(isOdd(3)).toBe(true);
  });
});


describe('hexRect', () => {
  it('should work', () => {
    expect(hexRect(3, 3, { x: 0, y: 0, z: 0 })).toEqual([]);
  });
});

// describe('hexRectangle', () => {
//   it('should exist', () => {
//     expect(hexRectangle).toBeDefined();
//   });
//
//   it('should work without an inital hex', () => {
//     expect(hexRectangle(3, 3)).toEqual([
//       '0,0,0',
//       '0,1,-1',
//       '0,2,-2',
//       '1,0,-1',
//       '1,1,-2',
//       '1,2,-3',
//       '2,-1,-1',
//       '2,0,-2',
//       '2,1,-3',
//     ]);
//   });
//
//   it('should work with an inital hex', () => {
//     expect(hexRectangle(3, 3, { x: 0, y: 0, z: 0 })).toEqual([
//       '0,0,0',
//       '0,1,-1',
//       '0,2,-2',
//       '1,0,-1',
//       '1,1,-2',
//       '1,2,-3',
//       '2,-1,-1',
//       '2,0,-2',
//       '2,1,-3',
//     ]);
//   });
//
//   it('should work with an inital hex other than "0,0,0"', () => {
//     expect(hexRectangle(3, 3, { x: 1, y: 1, z: 1 })).toEqual([
//       '1,0,-1',
//       '1,1,-2',
//       '1,2,-3',
//       '2,-1,-1',
//       '2,0,-2',
//       '2,1,-3',
//       '3,-1,-2',
//       '3,0,-3',
//       '3,1,-4',
//     ]);
//   });
//
//   it('should work with an inital hex other than "0,8,8"', () => {
//     expect(hexRectangle(3, 3, { x: 0, y: 8, z: 8 })).toEqual([
//       '1,0,-1',
//       '1,1,-2',
//       '1,2,-3',
//       '2,-1,-1',
//       '2,0,-2',
//       '2,1,-3',
//       '3,-1,-2',
//       '3,0,-3',
//       '3,1,-4',
//     ]);
//   });
// });
