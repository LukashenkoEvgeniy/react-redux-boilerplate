/**
 * @module index
 * @description Root of app
 */

import React from 'react';
import { render } from 'react-dom';

import Root from '@/containers/Root';

const MOUNT_NODE = document.getElementById('root');

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Root />,
  MOUNT_NODE,
);
