import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

// import hexRectangle from '../../lib/hex-rectangle';
import generateHexmap from '../../lib/generate-hexmap';
import HexmapD3 from './hexmap-d3.component';


const HEX = { x: 0, y: 0, z: 0 };
const COLUMNS = 10;
const ROWS = 10;
const SIZE = 20;
const SEED_CHANCE = 10;
const HAS_OCEAN = true;
const KINDOM_COUNT = 10;
const SEED_CHANCE_RATIOS = [
  { coast: 0 },
  { desert: 2 },
  { forest: 2 },
  { hills: 2 },
  { mountains: 2 },
  { plains: 2 },
  { swamp: 2 },
  { lake: 0 },
  { ocean: 1 },
];

const data = generateHexmap({
  hex: HEX,
  gridColumns: COLUMNS,
  gridRows: ROWS,
  hexSize: SIZE,
  seedChance: SEED_CHANCE,
  seedChanceRatios: SEED_CHANCE_RATIOS,
  hasOcean: HAS_OCEAN,
  kingdomsCount: KINDOM_COUNT,
});

storiesOf('HexmapD3', module)
  .addDecorator(StoryWrapper)
  .add('basic', withInfo(`
    defaults
  `)(() => (
    <HexmapD3
      world={data}
      columns={COLUMNS}
      rows={ROWS}
      size={SIZE}
    />
  )));
