import { hexNeighbors } from '../../index.prod';

describe('hexNeighbors', () => {
  it('should exist', () => {
    expect(hexNeighbors).toBeDefined();
  });

  it('should work', () => {
    expect(hexNeighbors({ x: 0, y: 0, z: 0 }, 1))
      .toEqual([
        { x: 1, y: -1, z: 0 },
        { x: 1, y: 0, z: -1 },
        { x: 0, y: 1, z: -1 },
        { x: -1, y: 1, z: 0 },
        { x: -1, y: 0, z: 1 },
        { x: 0, y: -1, z: 1 },
      ]);
  });
});
