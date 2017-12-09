// @flow

// returns string id for given hex
export default function hexToId(hex: { x: number, y: number, z: number}): string {
  return `${hex.x},${hex.y},${hex.z}`;
}
