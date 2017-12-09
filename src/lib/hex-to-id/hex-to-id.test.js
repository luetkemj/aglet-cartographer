import { hexToId } from '../../index.prod';

describe('hexToId', () => {
  it('should exist', () => {
    expect(hexToId).toBeDefined();
  });

  it('should work', () => {
    expect(hexToId({ x: 0, y: 0, z: 0 })).toBe('0,0,0');
  });
});
