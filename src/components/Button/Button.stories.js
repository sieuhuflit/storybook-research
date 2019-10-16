import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import Button from './Button';
import { TYPE } from './Button.constants';
import styles from './Button.scss';

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: B U T T O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const wrapperDecor = (storyFn) => (
  <div className={styles.wrapper}>
    {storyFn()}
  </div>
);

const buttonStories = {
  title: 'Component/Button',
  decorators: [
    // apply for all stories
    wrapperDecor,
    withKnobs,
    jsxDecorator,
  ],
};

//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: B U T T O N   S T O R I E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//

/**
 * Normal Button Story
 */

const normalButtonStory = () => (
  <Button onClick={() => { alert('Normal clicked'); }}>
    Normal
  </Button>
);

normalButtonStory.story = {
  name: TYPE.NORMAL,
  parameters: {
    notes: 'This is a normal. No need parameters',
  },
  decorators: [
    // apply decorator to normal button
  ],
};

/**
 * Warning Button Story
 */

const warningButtonStory = () => (
  <Button
    type={text('Type', TYPE.WARNING)}
    onClick={action('Warning clicked')}
  >
    Warning
  </Button>
);

warningButtonStory.story = {
  name: TYPE.WARNING,
  parameters: {
    notes: 'This is a warning with type is warning',
  },
};

/**
 * Danger Button Story
 */

const dangerButtonStory = () => (
  <Button
    type={text('Type', TYPE.DANGER)}
    onClick={action('Danger clicked')}
  >
    Danger
  </Button>
);

dangerButtonStory.story = {
  name: TYPE.DANGER,
  parameters: {
    notes: 'This is a danger with type is danger',
  },
};

export {
  buttonStories as default,
  normalButtonStory,
  warningButtonStory,
  dangerButtonStory,
};
