import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import HexmapTestContainer from './hexmap-test.container';

const basicInfo = '';

storiesOf('Hexmap Container', module)
  .addDecorator(StoryWrapper)
  .add('basic', withInfo(basicInfo)(() => (
    <HexmapTestContainer />
  )));
