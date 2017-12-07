import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../src/', true, /\.stories\.js$/)

// add-options:
// https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
  name: 'Aglet Cartographer',
  url: 'https://github.com/luetkemj/aglet-cartographer',
  sidebarAnimations: false,
  downPanelInRight: true,
});

// addon-info:
// https://github.com/storybooks/storybook/tree/master/addons/info
setDefaults({
  header: false,
  inline: true, // Displays info inline vs click button to view
  styles: { // not working due to bug in addon-info https://github.com/storybooks/storybook/issues/2358
    header: {
      body: {
        marginBottom: '100px',
      },
    },
    infoBody: {
      marginTop: '0px',
    },
  },
});

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
