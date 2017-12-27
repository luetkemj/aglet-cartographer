// @flow

import { cloneDeep, each, merge, without } from 'lodash';
import { hexDistance } from '../../index.prod';

export default function growSeeds(
  hexes: Object,
  seedIds: Array<String>,
  idMapTerrainKeys: Array<Object>,
): Object {
  const newHexes = cloneDeep(hexes);
  const hexIds = Object.keys(newHexes);
  const hexIdsWithoutSeeds = without(hexIds, ...seedIds);

  each(hexIdsWithoutSeeds, (hexId) => {
    const shortest = {};

    each(seedIds, (seedId) => {
      const distance = hexDistance(newHexes[hexId], newHexes[seedId]);

      if (!shortest.distance || distance < shortest.distance) {
        merge(shortest, {
          distance,
          seedId,
        });
      }
    });

    // update idMapTerrainKeys
    idMapTerrainKeys[newHexes[shortest.seedId].terrainKey].push(hexId);

    merge(newHexes[hexId].texture, {
      texture: newHexes[shortest.seedId].texture,
    });

    merge(newHexes[hexId], {
      textures: newHexes[shortest.seedId].textures,
      terrain: newHexes[shortest.seedId].terrain,
      terrainKey: newHexes[shortest.seedId].terrainKey,
    });
  });

  return newHexes;
}
