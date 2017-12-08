// @flow
// http://www.redblobgames.com/grids/hexagons/#basics
export default function hexHeight(size: number): number {
  return (Math.sqrt(3) / 2) * (size * 2);
}
