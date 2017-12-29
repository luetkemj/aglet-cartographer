import { loader, Texture } from 'pixi.js';

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

// colors population density
import colorDense from '../assets/sprites/color-dense.png';
import colorScattered from '../assets/sprites/color-scattered.png';
import colorFrontier from '../assets/sprites/color-frontier.png';
import colorUnsettled from '../assets/sprites/color-unsettled.png';
import colorDesolate from '../assets/sprites/color-desolate.png';
import colorWildland from '../assets/sprites/color-wildland.png';

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

export const colors = {};
export const terrains = {};
export const constructedLocations = {};
export function loadTextures(handleOnComplete) {
  // http://pixijs.download/release/docs/PIXI.loaders.Loader.html
  loader
    // terrain
    .add('colorCoast', colorCoast)
    .add('colorDesert', colorDesert)
    .add('colorForest', colorForest)
    .add('colorHills', colorHills)
    .add('colorMountains', colorMountains)
    .add('colorPlains', colorPlains)
    .add('colorSwamp', colorSwamp)
    .add('colorLake', colorLake)
    .add('colorOcean', colorOcean)
    // population density
    .add('colorDense', colorDense)
    .add('colorScattered', colorScattered)
    .add('colorFrontier', colorFrontier)
    .add('colorUnsettled', colorUnsettled)
    .add('colorDesolate', colorDesolate)
    .add('colorWildland', colorWildland)
    // icons terrain
    .add('iconCoast', iconCoast)
    .add('iconDesert', iconDesert)
    .add('iconForest', iconForest)
    .add('iconHills', iconHills)
    .add('iconMountains', iconMountains)
    .add('iconPlains', iconPlains)
    .add('iconSwamp', iconSwamp)
    // icons constucted locations
    .add('iconCapital', iconCapital)
    .add('iconCity', iconCity)
    .add('iconTown', iconTown)
    .add('iconVillage', iconVillage)
    .add('iconHamlet', iconHamlet)
    .add('iconPalace', iconPalace)
    .add('iconCastle', iconCastle)
    .add('iconStronghold', iconStronghold)
    .add('iconFort', iconFort)
    .add('iconCamp', iconCamp)
    .add('iconMine', iconMine)
    .add('iconMountainStronghold', iconMountainStronghold)
    .add('iconTreeFortress', iconTreeFortress)
    .add('iconShire', iconShire)
    .add('iconFloatingStronghold', iconFloatingStronghold)
    .add('iconRuin', iconRuin)
    .add('iconTemple', iconTemple)
    .add('iconShrine', iconShrine)
    .add('iconLighthouse', iconLighthouse)
    .add('iconRockShelter', iconRockShelter);

  loader.load((l, resources) => {
    colors.keys = ['coast', 'desert', 'forest', 'hills', 'mountains', 'plains', 'swamp', 'lake', 'ocean'];
    colors.textures = {
      // terrains
      coast: new Texture.fromImage(resources.colorCoast.url),
      desert: new Texture.fromImage(resources.colorDesert.url),
      forest: new Texture.fromImage(resources.colorForest.url),
      hills: new Texture.fromImage(resources.colorHills.url),
      mountains: new Texture.fromImage(resources.colorMountains.url),
      plains: new Texture.fromImage(resources.colorPlains.url),
      swamp: new Texture.fromImage(resources.colorSwamp.url),
      lake: new Texture.fromImage(resources.colorLake.url),
      ocean: new Texture.fromImage(resources.colorOcean.url),
      // population density
      dense: new Texture.fromImage(resources.colorDense.url),
      scattered: new Texture.fromImage(resources.colorScattered.url),
      frontier: new Texture.fromImage(resources.colorFrontier.url),
      unsettled: new Texture.fromImage(resources.colorUnsettled.url),
      desolate: new Texture.fromImage(resources.colorDesolate.url),
      wildland: new Texture.fromImage(resources.colorWildland.url),
    };

    terrains.keys = ['coast', 'desert', 'forest', 'hills', 'mountains', 'plains', 'swamp'];
    terrains.textures = {
      coast: new Texture.fromImage(resources.iconCoast.url),
      desert: new Texture.fromImage(resources.iconDesert.url),
      forest: new Texture.fromImage(resources.iconForest.url),
      hills: new Texture.fromImage(resources.iconHills.url),
      mountains: new Texture.fromImage(resources.iconMountains.url),
      plains: new Texture.fromImage(resources.iconPlains.url),
      swamp: new Texture.fromImage(resources.iconSwamp.url),
    };

    constructedLocations.keys = [
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
    ];
    constructedLocations.textures = {
      capital: new Texture.fromImage(resources.iconCapital.url),
      city: new Texture.fromImage(resources.iconCity.url),
      town: new Texture.fromImage(resources.iconTown.url),
      village: new Texture.fromImage(resources.iconVillage.url),
      hamlet: new Texture.fromImage(resources.iconHamlet.url),
      palace: new Texture.fromImage(resources.iconPalace.url),
      castle: new Texture.fromImage(resources.iconCastle.url),
      stronghold: new Texture.fromImage(resources.iconStronghold.url),
      fort: new Texture.fromImage(resources.iconFort.url),
      camp: new Texture.fromImage(resources.iconCamp.url),
      mine: new Texture.fromImage(resources.iconMine.url),
      mountainStronghold: new Texture.fromImage(resources.iconMountainStronghold.url),
      treeFortress: new Texture.fromImage(resources.iconTreeFortress.url),
      shire: new Texture.fromImage(resources.iconShire.url),
      floatingStronghold: new Texture.fromImage(resources.iconFloatingStronghold.url),
      ruin: new Texture.fromImage(resources.iconRuin.url),
      temple: new Texture.fromImage(resources.iconTemple.url),
      shrine: new Texture.fromImage(resources.iconShrine.url),
      lighthouse: new Texture.fromImage(resources.iconLighthouse.url),
      rockShelter: new Texture.fromImage(resources.iconRockShelter.url),
    };
  });

  // throughout the process multiple signals can be dispatched.
  loader.onProgress.add(() => {}); // called once per loaded/errored file
  loader.onError.add(() => {}); // called once per errored file
  loader.onLoad.add(() => {}); // called once per loaded file
  loader.onComplete.add(() => handleOnComplete()); // called once when queued resources all load.
}

export default loader;
