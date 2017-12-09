// @flow

// returns a hex for given id
export default function idToHex(id: string): { x: number, y: number, z: number} {
  const array = id.split(',');

  return {
    x: parseInt(array[0], 10),
    y: parseInt(array[1], 10),
    z: parseInt(array[2], 10),
  };
}
