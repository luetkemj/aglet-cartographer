// @flow

import {
  buildRatioTable,
  buildTerrainSeed,
  generateSettlement,
  growSeeds,
  hexGetThirdCoordinate,
  hexHeight,
  hexToPixel,
  hexWidth,
  isSeed,
  makeOceans,
  markBoundaries,
} from '../../index.prod';

// create a rectangular hexmap with as much inital data in one pass as possible
export default function rectangle({
  hex,
  gridColumns,
  gridRows,
  hexSize,
  seedChance,
  seedChanceRatios,
}: {
  hex: { x: number, y: number, z: number },
  gridColumns: number,
  gridRows: number,
  hexSize: number,
  seedChance: number,
  seedChanceRatios: number,
}) {
  // array for storing an ordered array of ids to use as a lookup for our hexes object
  const idMap = [];
  const idMapSeeds = [];
  const idMapDirt = [];
  const idMapTerrainKeys = {};

  // object containing all hexes keyed by ids stored in order within idMap
  const hexes = {};
  const seedRatios = buildRatioTable(seedChanceRatios);

  // the top left hex
  const originHex = hex || { x: 0, y: 0, z: 0 };
  const startHex = originHex;
  const initial = startHex.x;

  for (let i = initial; i < initial + gridColumns; i += 1) {
    startHex.x = i;
    startHex.y = Math.ceil((i * -1) / 2);

    for (let j = 0; j < gridRows; j += 1) {
      const { x } = startHex;
      const y = startHex.y + j;
      const z = hexGetThirdCoordinate(x, y);
      const hexId = `${x},${y},${z}`;
      let seed = {};

      if (isSeed(seedChance)) {
        seed = buildTerrainSeed(idMap.length + 1, seedRatios);

        if (idMapTerrainKeys[seed.terrainKey]) {
          idMapTerrainKeys[seed.terrainKey].push(hexId);
        } else {
          idMapTerrainKeys[seed.terrainKey] = [hexId];
        }

        idMapSeeds.push(hexId);
      } else {
        idMapDirt.push(hexId);
      }

      idMap.push(hexId);

      hexes[hexId] = {
        id: hexId,
        x,
        y,
        z,
        width: hexWidth(hexSize),
        height: hexHeight(hexSize),
        point: hexToPixel({ x, y, z }, hexSize),
        ...seed,
      };
    }
  }

  const idMapBoundaries = markBoundaries(hex || { x: 0, y: 0, z: 0 }, gridColumns, gridRows, hexes);

  growSeeds(hexes, idMapDirt, idMapSeeds, idMapTerrainKeys);
  makeOceans(hexes, idMapTerrainKeys, idMapBoundaries);
  generateSettlement(hexes);

  return {
    idMap,
    idMapDirt,
    idMapBoundaries,
    idMapSeeds,
    idMapTerrainKeys,
    hexes,
  };
}
