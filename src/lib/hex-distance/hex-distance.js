// @flow
// http://www.redblobgames.com/grids/hexagons/#distances
export default function distance(
  hex1:{x: number, y: number, z: number},
  hex2:{x: number, y: number, z: number},
): number {
  return (Math.abs(hex1.x - hex2.x) + Math.abs(hex1.y - hex2.y) + Math.abs(hex1.z - hex2.z)) / 2;
}
