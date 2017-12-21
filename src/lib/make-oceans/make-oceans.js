// @flow
import { each, merge } from 'lodash';
import { terrains } from '../../textures/terrains.textures';


// @TODO should this be a pure function? yeah probably
export default function makeOceans(
  hexes: { x: number, y: number, z: number },
  idMapTerrainKeys: Array<Object>,
  idMapBoundaries: Array<Object>,
) {
  const blackList = {};

  each(idMapBoundaries, (boundaryId) => {
    if (hexes[boundaryId]) {
      const { terrainKey } = hexes[boundaryId];

      // build black list
      if (!blackList[terrainKey]) {
        blackList[terrainKey] = terrainKey;
      }
    }

    // use blacklist to change terrain blobs to water
    each(blackList, (terrainKey) => {
      each(idMapTerrainKeys[terrainKey], (hexId) => {
        merge(hexes[hexId], {
          texture: terrains.textures.water,
          terrain: 'water',
        });
      });
    });
  });
}
