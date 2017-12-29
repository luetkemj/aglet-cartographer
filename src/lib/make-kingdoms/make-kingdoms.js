// @flow
import {
  cloneDeep,
  each,
  filter,
  map,
  merge,
  reduce,
  sampleSize,
} from 'lodash';

import { hexDistance } from '../../index.prod';
import { constructedLocations } from '../../textures/terrains.textures';

export function densityMap(density: number = 1) {
  const densities = ['scattered', 'frontier', 'unsettled', 'desolate', 'wildland'];

  return reduce(
    densities,
    (result = {}, value, index) => merge(result, { [Math.floor((index + 1) * density)]: value }),
    {},
  );
}

export function takeCensus(distanceFromCapital: number, densityMapper: Object) {
  const densities = Object.keys(densityMapper);
  let populationDensity;
  each(densities, (key) => {
    if (distanceFromCapital <= key) {
      populationDensity = densityMapper[key];
      return false;
    }
    populationDensity = densityMapper[densities[densities.length - 1]];
    return true;
  });
  return populationDensity;
}

export default function seedHexes(
  hexes: Object,
  kingdomCount: number,
) {
  const newHexes = cloneDeep(hexes);
  const dirtHexes = filter(newHexes, hex => hex.terrain !== 'ocean');
  const capitalCityHexes = sampleSize(dirtHexes, kingdomCount);
  const capitalCityIds = map(capitalCityHexes, hex => hex.id);
  const idMapKingdoms = {};

  each(capitalCityIds, (capitalCityId) => {
    idMapKingdoms[capitalCityId] = [capitalCityId];

    merge(newHexes[capitalCityId], {
      textures: [
        newHexes[capitalCityId].textures[0],
        // colors.textures.dense,
        constructedLocations.textures.capital,
      ],
      isCapital: true,
      distanceFromCapital: 0,
      populationDensity: 'dense',
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

      const populationDensity = takeCensus(shortest.distance, densityMap(1));
      merge(newHexes[hex.id], {
        kindomId: shortest.capitalCityId,
        distanceFromCapital: shortest.distance,
        populationDensity,
        // textures: [
        //   colors.textures[populationDensity],
        //   newHexes[hex.id].textures[1],
        // ],
      });
    }
  });

  return {
    hexes: newHexes,
    capitalCityIds,
    idMapKingdoms,
  };
}
