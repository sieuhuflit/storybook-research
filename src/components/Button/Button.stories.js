import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Button from './Button';
import { TYPE } from './Button.constants';
import styles from './Button.scss';

//
// ────────────────────────────────────────────────────────────── I ──────────
//   :::::: B U T T O N   B O O K : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
//


const wrapperDecorator = (storyFn) => (
  <div className={styles.wrapper}>
    {storyFn()}
  </div>
);

const buttonBook = {
  title: 'Component/Button',
  decorators: [
    wrapperDecorator,
    // apply for all stories
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
  name: 'Normal',
  parameters: {
    notes: 'This is a normal button',
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
  name: 'Warning',
  parameters: {
    notes: 'This is a warning button with type is warning',
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
  name: 'Danger',
  parameters: {
    notes: 'This is a danger button with type is danger',
  },
};

export {
  buttonBook as default,
  normalButtonStory,
  warningButtonStory,
  dangerButtonStory,
};
