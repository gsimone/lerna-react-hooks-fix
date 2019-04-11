import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyComponent from '../src/MyComponent'

storiesOf('MyComponent', module)
  .add('with text', () => <MyComponent />)

