// @flow
import { merge } from 'lodash';
import { hexToId, hexNeighbor } from '../../index.prod';


// This function creates a single boundary from left to right or top to bottom from a starting hex
// for a given length
export default function markBoundary(
  startingHex: { x: number, y: number, z: number },
  length: number,
  isColumn: boolean,
  odd: boolean,
  hexes: Array<Object>,
): Array<Object> {
  const idMapBoundary = [hexToId(startingHex)];
  if (hexes) {
    // set isBoundary to true on each boundary hex in hexes
    merge(hexes[hexToId(startingHex)], { isBoundary: true });
  }

  let counter = 1;
  let currentHex = startingHex;
  while (counter < length) {
    let rowDirection;
    if (odd) {
      rowDirection = (counter % 2) ? 0 : 1;
    } else {
      rowDirection = (counter % 2) ? 1 : 0;
    }
    const direction = (isColumn) ? 2 : rowDirection;
    const nextHex = hexNeighbor(currentHex, direction);

    idMapBoundary.push(hexToId(nextHex));
    if (hexes) {
      merge(hexes[hexToId(nextHex)], { isBoundary: true });
    }
    currentHex = nextHex;
    counter += 1;
  }

  return idMapBoundary;
}
