// @flow
import { cloneDeep, each, merge } from 'lodash';
import {
  buildRatioTable,
  buildTerrainSeed,
  isSeed,
} from '../../index.prod';

export default function seedHexes(
  hexes: Object,
  seedChance: number,
  seedChanceRatios: Object,
) {
  const newHexes = cloneDeep(hexes);
  const hexIds = Object.keys(newHexes);
  const ratioTable = buildRatioTable(seedChanceRatios);
  const seedIds = [];
  const idMapTerrainKeys = {};

  each(hexIds, (hexId, index) => {
    if (isSeed(seedChance)) {
      const seed = buildTerrainSeed(index, ratioTable);
      merge(newHexes[hexId], seed);
      idMapTerrainKeys[seed.terrainKey] = [hexId];
      seedIds.push(hexId);
    }
  });

  return {
    hexes: newHexes,
    idMapTerrainKeys,
    seedIds,
  };
}
