import { hexCorner } from '../../index.prod';

describe('hexCorner', () => {
  it('it should work', () => {
    expect(hexCorner({ x: 1, y: 1 }, 20, 1))
      .toEqual({ x: 11.000000000000002, y: 18.32050807568877 });
  });
});
