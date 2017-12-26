// @flow
import { each, random } from 'lodash';
import { colors, terrains } from '../../textures/terrains.textures';

export default function buildTerrainSeed(
  index: number,
  ratioTable: Array<Object>,
) {
  const roll = random(0, ratioTable[ratioTable.length - 1].value);
  let terrain;

  each(ratioTable, (seed) => {
    if (roll <= seed.value) {
      terrain = seed.name;

      return false;
    }

    return true;
  });

  return {
    terrain,
    terrainKey: index,
    textures: [
      colors.textures[terrain],
      terrains.textures[terrain],
    ],
    isSeed: true,
  };
}
