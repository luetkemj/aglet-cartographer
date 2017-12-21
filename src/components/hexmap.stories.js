import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../storybook-decorators/story-wrapper';

import Hexmap from './hexmap.component';

const basicInfo = '';

storiesOf('Hexmap', module)
  .addDecorator(StoryWrapper)
  .add('basic', withInfo(basicInfo)(() => (
    <Hexmap
      config={{
        map: {
          width: 100,
          height: 100,
          hexSize: 20,
          seedChance: 15,
          seedChanceRatios: [
            { coast: 1 },
            { desert: 2 },
            { forest: 3 },
            { hills: 4 },
            { mountains: 5 },
            { plains: 6 },
            { swamp: 7 },
            { water: 8 },
          ],
        },
      }}
    />
  )));
