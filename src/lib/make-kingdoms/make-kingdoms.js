// @flow
import {
  cloneDeep,
  each,
  filter,
  map,
  merge,
  sampleSize,
} from 'lodash';

import { hexDistance } from '../../index.prod';
import { constructedLocations } from '../../textures/terrains.textures';

export default function seedHexes(
  hexes: Object,
  kingdomCount: number,
) {
  const newHexes = cloneDeep(hexes);

  // @TODO support for oceanic kingdoms
  // make kingdom capital cities
  const dirtHexes = filter(newHexes, hex => hex.terrain !== 'ocean');
  const capitalCityHexes = sampleSize(dirtHexes, kingdomCount);
  const capitalCityIds = map(capitalCityHexes, hex => hex.id);
  const idMapKingdoms = {};

  each(capitalCityIds, (capitalCityId) => {
    idMapKingdoms[capitalCityId] = [capitalCityId];

    merge(newHexes[capitalCityId], {
      textures: [
        newHexes[capitalCityId].textures[0],
        constructedLocations.textures.capital,
      ],
      isCapital: true,
    });
  });

  // grow kingdoms
  each(dirtHexes, (hex) => {
    if (!hex.isCapital) {
      const shortest = {};

      each(capitalCityIds, (capitalCityId) => {
        const distance = hexDistance(newHexes[hex.id], newHexes[capitalCityId]);

        if (!shortest.distance || distance < shortest.distance) {
          merge(shortest, {
            distance,
            capitalCityId,
          });
        }
      });

      idMapKingdoms[shortest.capitalCityId].push(hex.id);

      merge(newHexes[hex.id], {
        kindomId: shortest.capitalCityId,
      });
    }
  });

  return {
    hexes: newHexes,
    capitalCityIds,
    idMapKingdoms,
  };
}
