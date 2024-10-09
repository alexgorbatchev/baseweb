/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import type { BlockComponentType } from '../block';
import { Block } from '../block';

export const AspectRatioBoxBody: BlockComponentType<'div'> = ({
  position,
  top,
  bottom,
  width,
  ...restProps
}) => (
  <Block
    data-baseweb="aspect-ratio-box-body"
    position={position || 'absolute'}
    top={top || 0}
    bottom={bottom || 0}
    width={width || '100%'}
    {...restProps}
  />
);

export default AspectRatioBoxBody;
