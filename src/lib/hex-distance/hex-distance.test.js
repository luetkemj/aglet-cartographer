import { hexDistance } from '../../index.prod';

describe('hexDistance', () => {
  it('should exist', () => {
    expect(hexDistance).toBeDefined();
  });

  it('should work', () => {
    expect(hexDistance({ x: 0, y: 0, z: 0 }, { x: 10, y: 10, z: -20 })).toBe(20);
  });
});
