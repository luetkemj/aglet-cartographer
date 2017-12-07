import { hexNeighbor } from '../../index.prod';

describe('hexNeighbor', () => {
  it('should exist', () => {
    expect(hexNeighbor).toBeDefined();
  });

  it('should work', () => {
    expect(hexNeighbor({ x: 0, y: 0, z: 0 }, 1))
      .toEqual({ x: 1, y: 0, z: -1 });
  });
});
