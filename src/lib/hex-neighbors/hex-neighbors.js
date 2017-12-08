// @flow
import addHexes from '../add-hexes';
import hexDirection from '../hex-direction';

// http://www.redblobgames.com/grids/hexagons/#neighbors
// returns all neighbors of a given hex
//     5
//  4    0
//  3    1
//    2
export default function hexNeighbors(hex: {x: number, y: number, x: number}) {
  const neighbors = [];
  for (let i = 0; i < 6; i += 1) {
    neighbors.push(addHexes(hex, hexDirection(i)));
  }

  return neighbors;
}
