import { hexDirection } from '../../index.prod';

describe('hexDirection', () => {
  it('should exist', () => {
    expect(hexDirection).toBeDefined();
  });

  it('should return the correct coords for direction 0', () => {
    expect(hexDirection(0)).toEqual({ x: 1, y: -1, z: 0 });
  });

  it('should return the correct coords for direction 1', () => {
    expect(hexDirection(1)).toEqual({ x: 1, y: 0, z: -1 });
  });

  it('should return the correct coords for direction 2', () => {
    expect(hexDirection(2)).toEqual({ x: 0, y: 1, z: -1 });
  });

  it('should return the correct coords for direction 3', () => {
    expect(hexDirection(3)).toEqual({ x: -1, y: 1, z: 0 });
  });

  it('should return the correct coords for direction 4', () => {
    expect(hexDirection(4)).toEqual({ x: -1, y: 0, z: 1 });
  });

  it('should return the correct coords for direction 5', () => {
    expect(hexDirection(5)).toEqual({ x: 0, y: -1, z: 1 });
  });
});
