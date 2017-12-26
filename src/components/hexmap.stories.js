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
            { desert: 1 },
            { forest: 1 },
            { hills: 1 },
            { mountains: 1 },
            { plains: 1 },
            { swamp: 1 },
            { lake: 0 },
            { ocean: 1 },
          ],
        },
      }}
    />
  )));
