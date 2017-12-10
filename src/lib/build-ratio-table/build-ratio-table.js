// @flow

// takes an array of objects { key: value }
// and transforms it into a properly weighted probability table
//
// [
//   { coast: 1 },
//   { desert: 2 },
// ]
//
// becomes
//
// [
//   {
//     name: desert,
//     value: 2
//   },
//   {
//     name: coast,
//     value: 3,
//   },
// ]
//
// we can then walk the array with a random value min: 1, max: 3
// grabbing name of the first object value is >= to.

import { each, map, sortBy, reverse } from 'lodash';

export default function buildRatioTable(rawRatios: []): [] {
  let ratioTable = [];

  each(rawRatios, (t) => {
    ratioTable = ratioTable.concat(map(t, (value, key) => ({
      name: key,
      value,
    })));
  });

  ratioTable = sortBy(ratioTable, ['value']);
  reverse(ratioTable);

  ratioTable.reduce((acc, ratio, index) => {
    ratioTable[index].value = (index > 0) ? ratio.value + ratioTable[index - 1].value : ratio.value;
    return ratioTable[index].value;
  }, 0);

  return ratioTable;
}
