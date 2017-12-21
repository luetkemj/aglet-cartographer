// @flow

import { each, merge } from 'lodash';
import { hexDistance } from '../../index.prod';

export default function growSeeds(
  hexes: { x: number, y: number, z: number },
  idMapDirt: Array<Object>,
  idMapSeeds: Array<Object>,
  idMapTerrainKeys: Array<Object>,
): Object {
  each(idMapDirt, (idDirt) => {
    const shortest = {};

    each(idMapSeeds, (idSeed) => {
      const distance = hexDistance(hexes[idDirt], hexes[idSeed]);

      if (!shortest.distance || distance < shortest.distance) {
        merge(shortest, {
          distance,
          idSeed,
        });
      }
    });

    // update idMapTerrainKeys
    idMapTerrainKeys[hexes[shortest.idSeed].terrainKey].push(idDirt);

    merge(hexes[idDirt].texture, {
      texture: hexes[shortest.idSeed].texture,
    });

    merge(hexes[idDirt], {
      texture: hexes[shortest.idSeed].texture,
      terrain: hexes[shortest.idSeed].terrain,
      terrainKey: hexes[shortest.idSeed].terrainKey,
    });
  });

  return hexes;
}
