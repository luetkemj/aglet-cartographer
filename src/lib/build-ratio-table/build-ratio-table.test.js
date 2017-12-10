import { shuffle } from 'lodash';
import { buildRatioTable } from '../../index.prod';

const seedChanceRatios = [
  { coast: 1 },
  { desert: 2 },
  { forest: 3 },
  { hills: 4 },
  { mountains: 5 },
  { plains: 6 },
  { swamp: 7 },
  { water: 8 },
];

describe('buildRatioTable', () => {
  it('should exist', () => {
    expect(buildRatioTable).toBeDefined();
  });

  it('should work with ratios in any order', () => {
    expect(buildRatioTable(shuffle(seedChanceRatios)))
      .toEqual([
        { name: 'water', value: 8 },
        { name: 'swamp', value: 15 },
        { name: 'plains', value: 21 },
        { name: 'mountains', value: 26 },
        { name: 'hills', value: 30 },
        { name: 'forest', value: 33 },
        { name: 'desert', value: 35 },
        { name: 'coast', value: 36 },
      ]);
  });
});
