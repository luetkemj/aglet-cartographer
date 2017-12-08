import { hexHeight } from '../../index.prod';

describe('hexHeight', () => {
  it('should exist', () => {
    expect(hexHeight).toBeDefined();
  });


  it('should work', () => {
    expect(hexHeight(20)).toBe(34.64101615137754);
  });
});
