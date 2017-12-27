// @flow
import { cloneDeep, each, merge, random } from 'lodash';
import { constructedLocations } from '../../textures/terrains.textures';

export default function generateSettlement(hexes: Object) {
  const newHexes = cloneDeep(hexes);
  each(newHexes, (hex) => {
    const chance = random(1, 100);

    if (chance < 10 && hex.terrain !== 'ocean') {
      const location = constructedLocations.keys[random(0, constructedLocations.keys.length)];
      merge(newHexes[hex.id], {
        textures: [hex.textures[0], constructedLocations.textures[location]],
      });
    }
  });

  return newHexes;
}
