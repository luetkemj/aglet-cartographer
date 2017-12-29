import { cloneDeep, each, filter, merge, random } from 'lodash';
import { constructedLocations } from '../../textures/terrains.textures';

const settlementsByDensityMap = {
  dense: {
    23: null,
    24: 'city',
    26: 'castle',
    28: 'stronghold',
    29: 'shrine',
    30: 'temple',
  },
  scattered: {
    24: null,
    25: 'city',
    26: 'castle',
    27: 'shrine',
    28: 'temple',
    29: 'ruin',
    30: 'mine',
  },
  frontier: {
    27: null,
    28: 'shrine',
    29: 'ruin',
    30: 'mine',
  },
  unsettled: {
    29: null,
    30: 'ruin',
  },
  desolate: {
    27: null,
    30: null,
  },
  wildland: {
    29: null,
    30: null,
  },
};

export default function makeSettlements(hexes) {
  const newHexes = cloneDeep(hexes);
  const dirtHexes = filter(newHexes, hex => hex.terrain !== 'ocean');

  each(dirtHexes, (hex) => {
    if (!hex.isCapital) {
      const roll = random(1, 30);
      const settlementsMap = settlementsByDensityMap[hex.populationDensity];
      each(Object.keys(settlementsMap), (key) => {
        if (roll <= key) {
          const settlement = settlementsMap[key];
          if (settlement) {
            merge(newHexes[hex.id], {
              textures: [hex.textures[0], constructedLocations.textures[settlement]],
              dominantConstructedLocation: settlement,
            });
          }

          return false;
        }
        return true;
      });
    } else {
      merge(newHexes[hex.id], {
        dominantConstructedLocation: 'capital',
      });
    }
    // const chance = random(1, 100);
    //
    // if (chance < 10 && hex.terrain !== 'ocean') {
    //   const location = constructedLocations.keys[random(0, constructedLocations.keys.length)];
    //   merge(newHexes[hex.id], {
    //     textures: [hex.textures[0], constructedLocations.textures[location]],
    //   });
    // }
  });

  return newHexes;
}
