import { configure, addParameters } from '@storybook/react';

import { VIEWPORTS } from './constants';

addParameters({
  viewport: {
    viewports: VIEWPORTS,
    defaultViewport: 'responsive',
  },
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);