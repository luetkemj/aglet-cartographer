import { hexToPixel, pixelToHex } from '../../index.prod';
import { getThirdCoord } from './pixel-to-hex';

describe('pixelToHex', () => {
  it('should exist', () => {
    expect(pixelToHex).toBeDefined();
  });

  it('should work', () => {
    expect(getThirdCoord(1, 1)).toBe(-2);
    expect(getThirdCoord(1, -1)).toBe(0);
    expect(getThirdCoord(-1, 1)).toBe(0);
    expect(getThirdCoord(-1, -10)).toBe(11);
    expect(getThirdCoord(1, -11)).toBe(10);
  });

  it('should work', () => {
    const x = 239828;
    const y = -29889;
    const hex = {
      x,
      y,
      z: getThirdCoord(x, y),
    };
    expect(pixelToHex(hexToPixel(hex, 20), 20)).toEqual(hex);
    expect(pixelToHex({ x: 90, y: 86.60254037844385 }, 20)).toEqual({ x: 3, y: 1, z: -4 });
  });
});
