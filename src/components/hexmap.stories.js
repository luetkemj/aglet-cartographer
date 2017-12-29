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
          width: 32,
          height: 16,
          hexSize: 20,
          seedChance: 15,
          seedChanceRatios: [
            { coast: 0 },
            { desert: 2 },
            { forest: 2 },
            { hills: 2 },
            { mountains: 2 },
            { plains: 2 },
            { swamp: 2 },
            { lake: 0 },
            { ocean: 1 },
          ],
        },
      }}
    />
  )));
