import { buildTerrainSeed } from '../../index.prod';

const { Texture } = require('pixi.js');
const lodash = require('lodash');

const ratioTable = [
  { name: 'water', value: 5 },
  { name: 'swamp', value: 10 },
];

const expectedTerrainSeed = {
  terrain: 'swamp',
  terrainKey: 1,
  isSeed: true,
};

describe('buildTerrainSeed', () => {
  it('should exist', () => {
    expect(buildTerrainSeed).toBeDefined();
  });

  lodash.random = () => 8;
  const terrainSeed = buildTerrainSeed(1, ratioTable);

  it('should match the expectedTerrainSeed Object', () => {
    expect(terrainSeed).toMatchObject(expectedTerrainSeed);
  });

  it('should have an array of Texture instaces at key textures', () => {
    expect(terrainSeed.textures[0]).toBeInstanceOf(Texture);
  });

  it('should contain the correct number of keys', () => {
    expect(Object.keys(terrainSeed).length).toBe(4);
  });
});
