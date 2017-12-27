// @flow
import { each } from 'lodash';
import {
  idToHex,
  hexHeight,
  hexWidth,
  hexToPixel,
} from '../../index.prod';

export default function hexesBootstrap(
  idMap: Array<String>,
  hexSize: number,
) {
  const hexes = {};

  each(idMap, (hexId) => {
    hexes[hexId] = {
      id: hexId,
      ...idToHex(hexId),
      width: hexWidth(hexSize),
      height: hexHeight(hexSize),
      point: hexToPixel(idToHex(hexId), hexSize),
    };
  });

  return hexes;
}
