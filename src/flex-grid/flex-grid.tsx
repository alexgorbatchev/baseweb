/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  Block,
  type BlockProps,
  type BlockWithForwardRef,
  type OverrideProps,
} from '../block/index';
import { flattenFragments } from '../helpers/react-helpers';
import { getOverrides } from '../helpers/overrides';
import type { FlexGridProps } from './types';

export const BaseFlexGrid: BlockWithForwardRef<'div'> = React.forwardRef(
  ({ display, flexWrap, ...restProps }: OverrideProps<'div', BlockProps>, ref) => (
    <Block
      display={display || 'flex'}
      flexWrap={flexWrap || flexWrap === false ? flexWrap : true}
      data-baseweb="flex-grid"
      {...restProps}
      ref={ref}
    />
  )
);
BaseFlexGrid.displayName = 'BaseFlexGrid';

const FlexGrid: React.FC<
  React.ComponentPropsWithoutRef<typeof BaseFlexGrid> &
    FlexGridProps & { forwardedRef: React.Ref<HTMLDivElement> }
> = ({
  forwardedRef,
  children,
  as,
  overrides,
  flexGridColumnCount,
  flexGridColumnGap,
  flexGridRowGap,
  ...restProps
}) => {
  const [FlexGrid, flexGridProps] = getOverrides(overrides && overrides.Block, BaseFlexGrid);
  return (
    <FlexGrid
      // coerced to any because of how react components are typed.
      // cannot guarantee an html element
      ref={forwardedRef}
      as={as}
      {...restProps}
      {...flexGridProps}
    >
      {
        // flatten fragments so FlexGrid correctly iterates over fragments’ children
        flattenFragments(children).map(
          // @ts-ignore
          (
            // TODO (flow->ts) incorrect component typings - children should be strictly ReactElement[] or implementation below needs to be updated to handle other things that can be in ReactNode
            child: React.ReactElement,
            flexGridItemIndex: number,
            { length: flexGridItemCount }: React.ReactNode[]
          ) => {
            return React.cloneElement(child, {
              flexGridColumnCount,
              flexGridColumnGap,
              flexGridRowGap,
              flexGridItemIndex,
              flexGridItemCount,
            });
          }
        )
      }
    </FlexGrid>
  );
};

const FlexGridComponent: BlockWithForwardRef<'div', FlexGridProps> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement> & FlexGridProps>,
    ref
  ) => <FlexGrid {...props} forwardedRef={ref} />
);

FlexGridComponent.displayName = 'FlexGrid';
export default FlexGridComponent;
