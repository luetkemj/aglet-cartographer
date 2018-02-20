// @flow
import { cloneDeep, each, merge } from 'lodash';
// import { colors } from '../../textures/terrains.textures';


// @TODO should this be a pure function? yeah probably
export default function makeOceans(
  hexes: Object,
  idMapTerrainKeys: Array<Object>,
  idMapBoundaries: Array<String>,
) {
  const newHexes = cloneDeep(hexes);
  const blackList = {};

  each(idMapBoundaries, (boundaryId) => {
    if (newHexes[boundaryId]) {
      const { terrainKey } = newHexes[boundaryId];

      // build black list
      if (!blackList[terrainKey]) {
        blackList[terrainKey] = terrainKey;
      }
    }

    // use blacklist to change terrain blobs to water
    each(blackList, (terrainKey) => {
      each(idMapTerrainKeys[terrainKey], (hexId) => {
        merge(newHexes[hexId], {
          // textures: [colors.textures.ocean, null],
          terrain: 'ocean',
        });
      });
    });
  });

  return newHexes;
}
