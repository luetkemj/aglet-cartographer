import { hexGetThirdCoordinate } from '../../index.prod';

describe('hexGetThirdCoordinate', () => {
  it('should exist', () => {
    expect(hexGetThirdCoordinate).toBeDefined();
  });

  it('should work with (1, 1)', () => {
    expect(hexGetThirdCoordinate(1, 1)).toBe(-2);
  });

  it('should work with (-1, 1)', () => {
    expect(hexGetThirdCoordinate(-1, 1)).toBe(0);
  });

  it('should work with (1, -1)', () => {
    expect(hexGetThirdCoordinate(1, -1)).toBe(0);
  });
});
