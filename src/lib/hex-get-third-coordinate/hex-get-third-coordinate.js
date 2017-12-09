// @flow
// http://www.redblobgames.com/grids/hexagons/#coordinates
export default function getThirdCoord(c1: number, c2: number): number {
  return (-c1 - c2 === 0) ? 0 : -c1 - c2;
}
