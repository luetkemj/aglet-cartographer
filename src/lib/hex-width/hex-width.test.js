import { hexWidth } from '../../index.prod';

describe('hexWidth', () => {
  it('should exist', () => {
    expect(hexWidth).toBeDefined();
  });

  it('should work', () => {
    expect(hexWidth(2)).toBe(4);
  });
});
