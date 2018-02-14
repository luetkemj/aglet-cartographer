// @flow
import {
  growSeeds,
  boundaries,
  hexesBootstrap,
  hexRectangle,
  makeKingdoms,
  makeSettlements,
  makeOceans,
  markBoundaries,
  seedHexes,
} from '../../index.prod';

// create a rectangular hexmap with as much inital data in one pass as possible
export default function generateHexmap({
  hex,
  gridColumns,
  gridRows,
  hexSize,
  seedChance,
  seedChanceRatios,
  hasOcean,
  kingdomsCount,
}: {
  hex: { x: number, y: number, z: number },
  gridColumns: number,
  gridRows: number,
  hexSize: number,
  seedChance: number,
  seedChanceRatios: number,
  hasOcean: boolean,
  kingdomsCount: number,
}) {
  // array for storing an ordered array of ids to use as a lookup for our hexes object
  const idMap = hexRectangle(gridColumns, gridRows);
  const idMapDirt = [];
  const idMapBoundaries = boundaries(hex || { x: 0, y: 0, z: 0 }, gridColumns, gridRows);

  let hexes;

  // bootstrap the inital hexes object with some basic metadata
  hexes = hexesBootstrap(idMap, hexSize);

  // mark boundary hexes
  hexes = markBoundaries(hexes, idMapBoundaries);

  const seededHexes = seedHexes(hexes, seedChance, seedChanceRatios);
  const { idMapTerrainKeys, seedIds } = seededHexes;
  // seed the map with terrain
  hexes = seededHexes.hexes; // eslint-disable-line prefer-destructuring
  hexes = growSeeds(hexes, seedIds, idMapTerrainKeys);

  if (hasOcean) {
    hexes = makeOceans(hexes, idMapTerrainKeys, idMapBoundaries);
  }

  const { hexes: hexesWithKingdoms, capitalCityIds, idMapKingdoms } =
    makeKingdoms(hexes, kingdomsCount);
  hexes = hexesWithKingdoms;
  hexes = makeSettlements(hexes);

  const hexMap = {
    capitalCityIds,
    hexes,
    idMap,
    idMapDirt,
    idMapBoundaries,
    idMapKingdoms,
    idMapTerrainKeys,
    seedIds,
  };

  // console.log(hexMap);

  return hexMap;
}
