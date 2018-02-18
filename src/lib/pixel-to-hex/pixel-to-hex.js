// @flow

function hexRound(hex) {
  let rx = Math.round(hex.x);
  let ry = Math.round(hex.y);
  let rz = Math.round(hex.z);

  const xDiff = Math.abs(rx - hex.x);
  const yDiff = Math.abs(ry - hex.y);
  const zDiff = Math.abs(rz - hex.z);

  if (xDiff > yDiff && xDiff > zDiff) {
    rx = -ry - rz;
  } else if (yDiff > zDiff) {
    ry = -rx - rz;
  } else {
    rz = -rx - ry;
  }

  return { x: rx, y: ry, z: rz };
}

// http://www.redblobgames.com/grids/hexagons/#coordinates
export function getThirdCoord(c1: number, c2: number) {
  return (-c1 - c2 === 0) ? 0 : -c1 - c2;
}

// http://www.redblobgames.com/grids/hexagons/#hex-to-pixel
export default function pixelToHex(
  pixel: { x: number, y: number },
  size: number,
):{ x: number, y: number, z: number} {
  const q = pixel.x * ((2 / 3) / size);
  // couldn't find the right place for parens that both worked and satisfied the linter
  // so the linter need to shush it's guffins for a bit here.
  // eslint-disable-next-line no-mixed-operators
  const r = (-pixel.x / 3 + Math.sqrt(3) / 3 * pixel.y) / size;
  const s = getThirdCoord(q, r);

  return hexRound({ x: q, y: r, z: s });
}
