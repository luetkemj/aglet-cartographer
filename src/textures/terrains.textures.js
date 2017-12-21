import { Texture } from 'pixi.js';

// terrains
import coastTerrain from '../assets/sprites/hexes/terrains/coast.png';
import desertTerrain from '../assets/sprites/hexes/terrains/desert.png';
import forestTerrain from '../assets/sprites/hexes/terrains/forest.png';
import hillsTerrain from '../assets/sprites/hexes/terrains/hills.png';
import mountainsTerrain from '../assets/sprites/hexes/terrains/mountains.png';
import plainsTerrain from '../assets/sprites/hexes/terrains/plains.png';
import swampTerrain from '../assets/sprites/hexes/terrains/swamp.png';
import waterTerrain from '../assets/sprites/hexes/terrains/water.png';

// hex colors
import coastColor from '../assets/sprites/hexes/colors/coast.png';
import desertColor from '../assets/sprites/hexes/colors/desert.png';
import forestColor from '../assets/sprites/hexes/colors/forest.png';
import hillsColor from '../assets/sprites/hexes/colors/hills.png';
import mountainsColor from '../assets/sprites/hexes/colors/mountains.png';
import plainsColor from '../assets/sprites/hexes/colors/plains.png';
import swampColor from '../assets/sprites/hexes/colors/swamp.png';

// constructed locations
import capitalTexture from '../assets/sprites/hexes/constructed_locations/capital.png';

export const colors = {
  keys: ['coast', 'desert', 'forest', 'hills', 'mountains', 'plains', 'swamp', 'water'],
  textures: {
    coast: new Texture.fromImage(coastColor),
    desert: new Texture.fromImage(desertColor),
    forest: new Texture.fromImage(forestColor),
    hills: new Texture.fromImage(hillsColor),
    mountains: new Texture.fromImage(mountainsColor),
    plains: new Texture.fromImage(plainsColor),
    swamp: new Texture.fromImage(swampColor),
  },
};

export const terrains = {
  keys: ['coast', 'desert', 'forest', 'hills', 'mountains', 'plains', 'swamp', 'water'],
  textures: {
    coast: new Texture.fromImage(coastTerrain),
    desert: new Texture.fromImage(desertTerrain),
    forest: new Texture.fromImage(forestTerrain),
    hills: new Texture.fromImage(hillsTerrain),
    mountains: new Texture.fromImage(mountainsTerrain),
    plains: new Texture.fromImage(plainsTerrain),
    swamp: new Texture.fromImage(swampTerrain),
    water: new Texture.fromImage(waterTerrain),
  },
};

export const constructedLocations = {
  keys: ['capital'],
  textures: {
    capital: new Texture.fromImage(capitalTexture),
  },
};
