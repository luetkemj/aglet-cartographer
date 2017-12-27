// @flow
import { cloneDeep, each } from 'lodash';

// from a startHex get all boundary hexes for a rectangle with n columns and rows
export default function markBoundaries(
  hexes: Object,
  idMapBoundaries: Array<String>,
): Object {
  const newHexes = cloneDeep(hexes);

  each(idMapBoundaries, (id) => {
    newHexes[id].isBoundary = true;
  });

  return newHexes;
}
