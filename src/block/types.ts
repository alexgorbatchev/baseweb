/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type * as React from 'react';
import type { StyleObject } from 'styletron-standard';
import type { Override } from '../helpers/overrides';

export type BlockOverrides = {
  Block?: Override;
};

export type Responsive<T> = T | Array<T>;

type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type AlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type AlignSelf =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'inherit'
  | 'initial'
  | 'unset';
type Flex = number | string;
type Display =
  | 'block'
  | 'inline'
  | 'run-in'
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
  | 'block flow'
  | 'inline table'
  | 'flex run-in'
  | 'list-item'
  | 'list-item block'
  | 'list-item inline'
  | 'list-item flow'
  | 'list-item flow-root'
  | 'list-item block flow'
  | 'list-item block flow-root'
  | 'flow list-item block'
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'
  | 'contents'
  | 'none'
  | 'inline-block'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'
  | 'inherit'
  | 'initial'
  | 'unset';
type GridAutoFlow =
  | 'row'
  | 'column'
  | 'dense'
  | 'row dense'
  | 'column dense'
  | 'inherit'
  | 'initial'
  | 'unset';
type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

type JustifyItems =
  /* Basic keywords */
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'
  | 'inherit'
  | 'initial'
  | 'unset';

type JustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
type Position = 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
type Overflow =
  | 'visible'
  | 'hidden'
  | 'scroll'
  | 'scrollX'
  | 'scrollY'
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'unset';

export type Scale = 0 | string;

export type WhiteSpace =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'break-spaces'
  | 'inherit'
  | 'initial'
  | 'unset';

export type BlockProps<T extends React.ElementType = React.ElementType> = {
  children?: React.ReactNode;
  /** Modifies the base element used to render the block. */
  as?: T;
  overrides?: BlockOverrides;
  /** Accepts all themeable color properties (`primary200`, etc.). */
  color?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment */
  backgroundAttachment?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip */
  backgroundClip?: Responsive<string>;
  /** Accepts all themeable color properties (`primary200`, etc.). */
  backgroundColor?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-image */
  backgroundImage?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin */
  backgroundOrigin?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position */
  backgroundPosition?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat */
  backgroundRepeat?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/background-size */
  backgroundSize?: Responsive<string>;
  /** Accepts all themeable font properties (`font200`, etc.). */
  font?: string | Array<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content */
  alignContent?: Responsive<AlignContent>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items */
  alignItems?: Responsive<AlignItems>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: Responsive<AlignSelf>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  flexDirection?: Responsive<FlexDirection>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/display */
  display?: Responsive<Display>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex */
  flex?: Responsive<Flex>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid */
  grid?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area */
  gridArea?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns */
  gridAutoColumns?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow */
  gridAutoFlow?: Responsive<GridAutoFlow>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows */
  gridAutoRows?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column */
  gridColumn?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end */
  gridColumnEnd?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap */
  gridColumnGap?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start */
  gridColumnStart?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap */
  gridGap?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row */
  gridRow?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end */
  gridRowEnd?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap */
  gridRowGap?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start */
  gridRowStart?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template */
  gridTemplate?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas */
  gridTemplateAreas?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns */
  gridTemplateColumns?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows */
  gridTemplateRows?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content */
  justifyContent?: Responsive<JustifyContent>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items */
  justifyItems?: Responsive<JustifyItems>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self */
  justifySelf?: Responsive<JustifySelf>;
  position?: Responsive<Position>;
  width?: Responsive<Scale>;
  minWidth?: Responsive<Scale>;
  maxWidth?: Responsive<Scale>;
  height?: Responsive<Scale>;
  minHeight?: Responsive<Scale>;
  maxHeight?: Responsive<Scale>;
  overflow?: Responsive<Overflow>;
  margin?: Responsive<Scale>;
  marginTop?: Responsive<Scale>;
  marginRight?: Responsive<Scale>;
  marginBottom?: Responsive<Scale>;
  marginLeft?: Responsive<Scale>;
  padding?: Responsive<Scale>;
  paddingTop?: Responsive<Scale>;
  paddingRight?: Responsive<Scale>;
  paddingBottom?: Responsive<Scale>;
  paddingLeft?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-content */
  placeContent?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-items */
  placeItems?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/place-self */
  placeSelf?: Responsive<string>;
  flexWrap?: Responsive<boolean>;
  left?: Responsive<Scale>;
  top?: Responsive<Scale>;
  right?: Responsive<Scale>;
  bottom?: Responsive<Scale>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow */
  textOverflow?: Responsive<string>;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space */
  whiteSpace?: Responsive<WhiteSpace>;
};

export type StyledBlockProps = {
  $color?: Responsive<string>;
  $backgroundAttachment?: Responsive<string>;
  $backgroundClip?: Responsive<string>;
  $backgroundColor?: Responsive<string>;
  $backgroundImage?: Responsive<string>;
  $backgroundOrigin?: Responsive<string>;
  $backgroundPosition?: Responsive<string>;
  $backgroundRepeat?: Responsive<string>;
  $backgroundSize?: Responsive<string>;
  $font?: Responsive<string>;
  $alignContent?: Responsive<AlignContent>;
  $alignItems?: Responsive<AlignItems>;
  $alignSelf?: Responsive<AlignSelf>;
  $flexDirection?: Responsive<FlexDirection>;
  $display?: Responsive<Display>;
  $flex?: Responsive<Flex>;
  $grid?: Responsive<string>;
  $gridArea?: Responsive<string>;
  $gridAutoColumns?: Responsive<string>;
  $gridAutoFlow?: Responsive<GridAutoFlow>;
  $gridAutoRows?: Responsive<string>;
  $gridColumn?: Responsive<string>;
  $gridColumnEnd?: Responsive<string>;
  $gridColumnGap?: Responsive<Scale>;
  $gridColumnStart?: Responsive<string>;
  $gridGap?: Responsive<Scale>;
  $gridRow?: Responsive<string>;
  $gridRowEnd?: Responsive<string>;
  $gridRowGap?: Responsive<Scale>;
  $gridRowStart?: Responsive<string>;
  $gridTemplate?: Responsive<string>;
  $gridTemplateAreas?: Responsive<string>;
  $gridTemplateColumns?: Responsive<string>;
  $gridTemplateRows?: Responsive<string>;
  $justifyContent?: Responsive<JustifyContent>;
  $justifyItems?: Responsive<JustifyItems>;
  $justifySelf?: Responsive<JustifySelf>;
  $position?: Responsive<Position>;
  $width?: Responsive<Scale>;
  $minWidth?: Responsive<Scale>;
  $maxWidth?: Responsive<Scale>;
  $height?: Responsive<Scale>;
  $minHeight?: Responsive<Scale>;
  $maxHeight?: Responsive<Scale>;
  $overflow?: Responsive<Overflow>;
  $margin?: Responsive<Scale>;
  $marginTop?: Responsive<Scale>;
  $marginRight?: Responsive<Scale>;
  $marginBottom?: Responsive<Scale>;
  $marginLeft?: Responsive<Scale>;
  $padding?: Responsive<Scale>;
  $paddingTop?: Responsive<Scale>;
  $paddingRight?: Responsive<Scale>;
  $paddingBottom?: Responsive<Scale>;
  $paddingLeft?: Responsive<Scale>;
  $placeContent?: Responsive<string>;
  $placeItems?: Responsive<string>;
  $placeSelf?: Responsive<string>;
  $flexWrap?: Responsive<boolean>;
  $left?: Responsive<Scale>;
  $top?: Responsive<Scale>;
  $right?: Responsive<Scale>;
  $bottom?: Responsive<Scale>;
  $textOverflow?: Responsive<string>;
  $whiteSpace?: Responsive<WhiteSpace>;
};

/**
 * Allows for arbitrary `$...` props to be passed to the `<Block />` component.
 */
export type StyledUserProps = Record<`$${string}`, unknown>;

type BaseProps<P extends object> = StyledUserProps &
  P & {
    $style?: StyleObject | ((props: P) => StyleObject);
    className?: string;
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AddStyletronRef<P extends { ref: any }> = P extends { ref: infer R } ? P & { $ref?: R } : P;

export type OverrideProps<D extends React.ElementType, P extends object> = BaseProps<P> &
  Omit<AddStyletronRef<React.ComponentProps<D>>, keyof BaseProps<P>>;

export interface BlockComponentType<D extends React.ElementType> {
  <C extends React.ElementType = D>(props: OverrideProps<C, BlockProps<C>>): JSX.Element;
  displayName?: string;
}

/**
 * Helper type to create a strongly typed components derived from `<Block />` and wrapped with `React.forwardRef()`
 * Features like `as={...}` don't get strong typing with components created with `forwardRef()` otherwise.
 *
 * @example
 * const FlexGridComponent: BlockWithForwardRef<'div', FlexGridProps> = React.forwardRef(
 *   <TElement extends React.ElementType = 'div'>(
 *     props: OverrideProps<TElement, BlockProps<TElement> & FlexGridProps>,
 *     ref
 *   ) => <FlexGrid {...props} forwardedRef={ref} />
 * );
 */
export type BlockWithForwardRef<
  TDefaultElement extends React.ElementType,
  TExtraProps extends object = object,
> = {
  <TElement extends React.ElementType = TDefaultElement>(
    props: OverrideProps<TElement, BlockProps<TElement> & StyledUserProps & TExtraProps> & {
      ref?: React.LegacyRef<unknown>;
    }
  ): React.ReactNode;
  displayName?: string;
};
