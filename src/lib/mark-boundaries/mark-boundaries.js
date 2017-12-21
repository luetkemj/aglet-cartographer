// @flow

import { hexNeighbor, idToHex, markBoundary } from '../../index.prod';

// from a startHex get all boundary hexes for a rectangle with n columns and rows
export default function markBoundaries(
  hex: { x: number, y: number, z: number },
  columns: number,
  rows: number,
  hexes: Array<Object>,
): Array<Object> {
  let idMapBoundaries = [];
  let startHex = hex;

  // north boundary
  idMapBoundaries =
    idMapBoundaries.concat(markBoundary(startHex, columns, false, false, hexes));

  // east boundary
  startHex = hexNeighbor(idToHex(idMapBoundaries[idMapBoundaries.length - 1]), 2);
  idMapBoundaries =
    idMapBoundaries.concat(markBoundary(startHex, rows - 1, true, false, hexes));

  // west boundary
  startHex = hexNeighbor(hex, 2);
  idMapBoundaries =
    idMapBoundaries.concat(markBoundary(startHex, rows - 1, true, false, hexes));

  // southern boundary
  startHex = hexNeighbor(idToHex(idMapBoundaries[idMapBoundaries.length - 1]), 1);
  idMapBoundaries =
    idMapBoundaries.concat(markBoundary(startHex, columns - 2, false, true, hexes));

  return idMapBoundaries;
}
