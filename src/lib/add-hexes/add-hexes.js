// @flow

// Adds the coords of two hexes together and returns a new hex
export default function addHexes(
  hex1:{x: number, y:number, z: number},
  hex2:{x: number, y:number, z: number},
):{x: number, y:number, z: number} {
  const x = hex1.x + hex2.x;
  const y = hex1.y + hex2.y;
  const z = hex1.z + hex2.z;

  return { x, y, z };
}
