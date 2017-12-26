// @flow
import { each, merge, random } from 'lodash';
import { constructedLocations } from '../../textures/terrains.textures';

export default function generateSettlement(hexes: { x: number, y: number, z: number }) {
  each(hexes, (hex) => {
    const chance = random(1, 100);

    if (chance < 10 && hex.terrain !== 'ocean') {
      const location = constructedLocations.keys[random(0, constructedLocations.keys.length)];
      merge(hexes[hex.id], {
        textures: [hex.textures[0], constructedLocations.textures[location]],
      });
    }
  });
}
