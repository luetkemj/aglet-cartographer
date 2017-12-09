import { idToHex } from '../../index.prod';

describe('idToHex', () => {
  it('should exist', () => {
    expect(idToHex).toBeDefined();
  });

  it('should work', () => {
    expect(idToHex('0,0,0')).toEqual({ x: 0, y: 0, z: 0 });
  });
});
