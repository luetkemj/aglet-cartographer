import { hexToPixel } from '../../index.prod';

describe('hexToPixel', () => {
  it('should exist', () => {
    expect(hexToPixel).toBeDefined();
  });

  it('should work', () => {
    expect(hexToPixel({ x: 3, y: 1, z: -4 }, 20)).toEqual({ x: 90, y: 86.60254037844385 });
  });
});
