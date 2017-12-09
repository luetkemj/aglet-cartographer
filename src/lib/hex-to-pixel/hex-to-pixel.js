// @flow

// http://www.redblobgames.com/grids/hexagons/#hex-to-pixel
export default function hexToPixel(
  hex: { x: number, y: number, z: number },
  size: number,
): { x: number, y: number } {
  const x = size * (3 / 2) * hex.x;
  const y = size * Math.sqrt(3) * (hex.y + (hex.x / 2));
  return { x, y };
}
