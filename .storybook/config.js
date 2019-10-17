import path from 'path';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

import { VIEWPORTS } from './constants';

/**
 * Add Decorator and Parameter globally
 */

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(jsxDecorator);

addParameters({
  viewport: {
    viewports: VIEWPORTS,
    defaultViewport: 'responsive',
  },
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);