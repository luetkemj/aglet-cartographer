// @flow

// http://www.redblobgames.com/grids/hexagons/#neighbors
// returns hex to use for calulating directions
//     5
//  4    0
//  3    1
//    2
export default function hexDirection(direction: number): {
  x: number,
  y: number,
  z: number,
} {
  const directions = [
    { x: 1, y: -1, z: 0 },
    { x: 1, y: 0, z: -1 },
    { x: 0, y: 1, z: -1 },
    { x: -1, y: 1, z: 0 },
    { x: -1, y: 0, z: 1 },
    { x: 0, y: -1, z: 1 },
  ];

  return directions[direction];
}
