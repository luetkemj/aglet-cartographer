import { Texture } from 'pixi.js';

// colors
import colorCoast from '../assets/sprites/color-coast.png';
import colorDesert from '../assets/sprites/color-desert.png';
import colorForest from '../assets/sprites/color-forest.png';
import colorHills from '../assets/sprites/color-hills.png';
import colorMountains from '../assets/sprites/color-mountains.png';
import colorPlains from '../assets/sprites/color-plains.png';
import colorSwamp from '../assets/sprites/color-swamp.png';
import colorLake from '../assets/sprites/color-ocean.png';
import colorOcean from '../assets/sprites/color-deep-ocean.png';

// icons terrain
import iconCoast from '../assets/sprites/icon-coast.png';
import iconDesert from '../assets/sprites/icon-desert.png';
import iconForest from '../assets/sprites/icon-forest.png';
import iconHills from '../assets/sprites/icon-hills.png';
import iconMountains from '../assets/sprites/icon-mountains.png';
import iconPlains from '../assets/sprites/icon-plains.png';
import iconSwamp from '../assets/sprites/icon-swamp.png';

// icons constructed locations
import iconCapital from '../assets/sprites/icon-capital.png';
import iconCity from '../assets/sprites/icon-city.png';
import iconTown from '../assets/sprites/icon-town.png';
import iconVillage from '../assets/sprites/icon-village.png';
import iconHamlet from '../assets/sprites/icon-hamlet.png';
import iconPalace from '../assets/sprites/icon-palace.png';
import iconCastle from '../assets/sprites/icon-castle.png';
import iconStronghold from '../assets/sprites/icon-stronghold.png';
import iconFort from '../assets/sprites/icon-fort.png';
import iconCamp from '../assets/sprites/icon-camp.png';
import iconMine from '../assets/sprites/icon-mine.png';
import iconMountainStronghold from '../assets/sprites/icon-mountain-stronghold.png';
import iconTreeFortress from '../assets/sprites/icon-tree-fortress.png';
import iconShire from '../assets/sprites/icon-shire.png';
import iconFloatingStronghold from '../assets/sprites/icon-floating-stronghold.png';
import iconRuin from '../assets/sprites/icon-ruin.png';
import iconTemple from '../assets/sprites/icon-temple.png';
import iconShrine from '../assets/sprites/icon-shrine.png';
import iconLighthouse from '../assets/sprites/icon-lighthouse.png';
import iconRockShelter from '../assets/sprites/icon-rock-shelter.png';

export const colors = {
  keys: ['coast', 'desert', 'forest', 'hills', 'mountains', 'plains', 'swamp', 'lake', 'ocean'],
  textures: {
    coast: new Texture.fromImage(colorCoast),
    desert: new Texture.fromImage(colorDesert),
    forest: new Texture.fromImage(colorForest),
    hills: new Texture.fromImage(colorHills),
    mountains: new Texture.fromImage(colorMountains),
    plains: new Texture.fromImage(colorPlains),
    swamp: new Texture.fromImage(colorSwamp),
    lake: new Texture.fromImage(colorLake),
    ocean: new Texture.fromImage(colorOcean),
  },
};

export const terrains = {
  keys: ['coast', 'desert', 'forest', 'hills', 'mountains', 'plains', 'swamp'],
  textures: {
    coast: new Texture.fromImage(iconCoast),
    desert: new Texture.fromImage(iconDesert),
    forest: new Texture.fromImage(iconForest),
    hills: new Texture.fromImage(iconHills),
    mountains: new Texture.fromImage(iconMountains),
    plains: new Texture.fromImage(iconPlains),
    swamp: new Texture.fromImage(iconSwamp),
  },
};

export const constructedLocations = {
  keys: [
    'capital',
    'city',
    'town',
    'village',
    'hamlet',
    'palace',
    'castle',
    'stronghold',
    'fort',
    'camp',
    'mine',
    'mountainStronghold',
    'treeFortress',
    'shire',
    'floatingStronghold',
    'ruin',
    'temple',
    'shrine',
    'lighthouse',
    'rockShelter',
  ],
  textures: {
    capital: new Texture.fromImage(iconCapital),
    city: new Texture.fromImage(iconCity),
    town: new Texture.fromImage(iconTown),
    village: new Texture.fromImage(iconVillage),
    hamlet: new Texture.fromImage(iconHamlet),
    palace: new Texture.fromImage(iconPalace),
    castle: new Texture.fromImage(iconCastle),
    stronghold: new Texture.fromImage(iconStronghold),
    fort: new Texture.fromImage(iconFort),
    camp: new Texture.fromImage(iconCamp),
    mine: new Texture.fromImage(iconMine),
    mountainStronghold: new Texture.fromImage(iconMountainStronghold),
    treeFortress: new Texture.fromImage(iconTreeFortress),
    shire: new Texture.fromImage(iconShire),
    floatingStronghold: new Texture.fromImage(iconFloatingStronghold),
    ruin: new Texture.fromImage(iconRuin),
    temple: new Texture.fromImage(iconTemple),
    shrine: new Texture.fromImage(iconShrine),
    lighthouse: new Texture.fromImage(iconLighthouse),
    rockShelter: new Texture.fromImage(iconRockShelter),
  },
};
