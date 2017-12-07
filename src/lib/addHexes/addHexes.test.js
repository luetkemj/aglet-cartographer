import { addHexes } from '../../index.prod';

describe('addHexes', () => {
  it('should exist', () => {
    expect(addHexes).toBeDefined();
  });

  it('should work', () => {
    expect(addHexes({ x: -1, y: 1, z: 0 }, { x: -1, y: 1, z: 0 }))
      .toEqual({ x: -2, y: 2, z: 0 });
  });
});
