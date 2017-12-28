// @flow
import {
  generateSettlement,
  growSeeds,
  boundaries,
  hexesBootstrap,
  hexRectangle,
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
}: {
  hex: { x: number, y: number, z: number },
  gridColumns: number,
  gridRows: number,
  hexSize: number,
  seedChance: number,
  seedChanceRatios: number,
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
  hexes = makeOceans(hexes, idMapTerrainKeys, idMapBoundaries);
  hexes = generateSettlement(hexes);

  const hexMap = {
    idMap,
    idMapDirt,
    idMapBoundaries,
    seedIds,
    idMapTerrainKeys,
    hexes,
  };

  return hexMap;
}
