import _ from 'lodash';

import {
  hexGetThirdCoordinate,
} from '../../index.prod';

// returns an array of hex ids compromising a rectangle of a given width and height from a specified
// origin hex
export default function hexRectangle(
  gridColumns,
  gridRows,
  hex,
) {
  const hexIds = [];
  // the top left hex
  const originHex = hex || { x: 0, y: 0, z: 0 };
  const startHex = _.cloneDeep(originHex);
  const initial = startHex.x;

  for (let i = initial; i < initial + gridColumns; i += 1) {
    startHex.x = i;
    startHex.y = Math.ceil((i * -1) / 2);

    for (let j = 0; j < gridRows; j += 1) {
      const { x } = startHex;
      // const y = startHex.y + j;
      let y;
      if (i === 0 && j === 0) {
        y = startHex.y = originHex.y; // eslint-disable-line
      } else {
        y = startHex.y + j;
      }
      // const y = (i === 0 && j === 0 ? startHex.y = originHex.y : originHex.y + j);
      const z = hexGetThirdCoordinate(x, y);
      const hexId = `${x},${y},${z}`;

      hexIds.push(hexId);
    }
  }

  return hexIds;
}
