// @flow
import _ from 'lodash';
import {
  boundary,
  hexGetThirdCoordinate,
  idToHex,
} from '../../index.prod';

// returns an array of hex ids compromising a rectangle of a given width and height from a specified
// origin hex
// export default function hexRectangle(
//   gridColumns: number,
//   gridRows: number,
//   hex: { x: number, y: number, z: number },
// ) {
//   const hexIds = [];
//   // the top left hex
//   const originHex = hex || { x: 0, y: 0, z: 0 };
//   const startHex = originHex;
//   const initial = startHex.x;
//
//   for (let i = initial; i < initial + gridColumns; i += 1) {
//     startHex.x = i;
//     startHex.y = Math.ceil((i * -1) / 2);
//
//     for (let j = 0; j < gridRows; j += 1) {
//       const { x } = startHex;
//       const y = startHex.y + j;
//       const z = hexGetThirdCoordinate(x, y);
//       const hexId = `${x},${y},${z}`;
//
//       hexIds.push(hexId);
//     }
//   }
//
//   return hexIds;
// }

export function isOdd(n: number) {
  return n % 2 === 0 ? false : true;
}

export default function hexRectangle(
  gridColumns: number,
  gridRows: number,
  hex: { x: number, y: number, z: number },
) {
  const originHex = hex || { x: 0, y: 0, z: 0 };
  const hexIds = [];
  const topRow = [];
  topRow.push(...boundary(originHex, gridColumns, false, isOdd(originHex.x)));
  // hexIds.push(...topRow);
  _.each(
    topRow,
    hexId => hexIds.push(...boundary(idToHex(hexId), gridRows, true, isOdd(idToHex(hexId).y))),
  );

  return hexIds;
}
