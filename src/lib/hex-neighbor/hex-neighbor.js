// @flow
import addHexes from '../add-hexes';
import hexDirection from '../hex-direction';

// http://www.redblobgames.com/grids/hexagons/#neighbors
// returns neighbor hex coords based on direction provided
//     5
//  4    0
//  3    1
//    2
export default function hexNeighbor(
  hex: {x: number, y: number, z: number},
  direction: number,
): {x: number, y: number, z: number} {
  return addHexes(hex, hexDirection(direction));
}
