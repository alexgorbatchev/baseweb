/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Block, type BlockProps, type BlockWithForwardRef, type OverrideProps } from '../block';

export const DisplayLarge: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-displaylarge"
      {...props}
      font={props.font || 'DisplayLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplayLarge.displayName = 'DisplayLarge';

export const DisplayMedium: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-displaymedium"
      {...props}
      font={props.font || 'DisplayMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplayMedium.displayName = 'DisplayMedium';

export const DisplaySmall: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-displaysmall"
      {...props}
      font={props.font || 'DisplaySmall'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplaySmall.displayName = 'DisplaySmall';

export const DisplayXSmall: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-displayxsmall"
      {...props}
      font={props.font || 'DisplayXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplayXSmall.displayName = 'DisplayXSmall';

export const HeadingXXLarge: BlockWithForwardRef<'h1'> = React.forwardRef(
  <TElement extends React.ElementType = 'h1'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-headingxxlarge"
      as={props.as || 'h1'}
      {...props}
      font={props.font || 'HeadingXXLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
HeadingXXLarge.displayName = 'HeadingXXLarge';

export const HeadingXLarge: BlockWithForwardRef<'h2'> = React.forwardRef(
  <TElement extends React.ElementType = 'h2'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-headingxlarge"
      as={props.as || 'h2'}
      {...props}
      font={props.font || 'HeadingXLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
HeadingXLarge.displayName = 'HeadingXLarge';

export const HeadingLarge: BlockWithForwardRef<'h3'> = React.forwardRef(
  <TElement extends React.ElementType = 'h3'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-headinglarge"
      as={props.as || 'h3'}
      {...props}
      font={props.font || 'HeadingLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
HeadingLarge.displayName = 'HeadingLarge';

export const HeadingMedium: BlockWithForwardRef<'h4'> = React.forwardRef(
  <TElement extends React.ElementType = 'h4'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-headingmedium"
      as={props.as || 'h4'}
      {...props}
      font={props.font || 'HeadingMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
HeadingMedium.displayName = 'HeadingMedium';

export const HeadingSmall: BlockWithForwardRef<'h5'> = React.forwardRef(
  <TElement extends React.ElementType = 'h5'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-headingsmall"
      as={props.as || 'h5'}
      {...props}
      font={props.font || 'HeadingSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
HeadingSmall.displayName = 'HeadingSmall';

export const HeadingXSmall: BlockWithForwardRef<'h6'> = React.forwardRef(
  <TElement extends React.ElementType = 'h6'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-headingxsmall"
      as={props.as || 'h6'}
      {...props}
      font={props.font || 'HeadingXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
HeadingXSmall.displayName = 'HeadingXSmall';

export const LabelLarge: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-labellarge"
      as="label"
      {...props}
      font={props.font || 'LabelLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
LabelLarge.displayName = 'LabelLarge';

export const LabelMedium: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-labelmedium"
      {...props}
      font={props.font || 'LabelMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
LabelMedium.displayName = 'LabelMedium';

export const LabelSmall: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-labelsmall"
      {...props}
      font={props.font || 'LabelSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
LabelSmall.displayName = 'LabelSmall';

export const LabelXSmall: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-labelxsmall"
      {...props}
      font={props.font || 'LabelXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
LabelXSmall.displayName = 'LabelXSmall';

export const ParagraphLarge: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-paragraphlarge"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'ParagraphLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
ParagraphLarge.displayName = 'ParagraphLarge';

export const ParagraphMedium: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-paragraphmedium"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'ParagraphMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
ParagraphMedium.displayName = 'ParagraphMedium';

export const ParagraphSmall: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-paragraphsmall"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'ParagraphSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
ParagraphSmall.displayName = 'ParagraphSmall';

export const ParagraphXSmall: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-paragraphxsmall"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'ParagraphXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
ParagraphXSmall.displayName = 'ParagraphXSmall';

export const MonoDisplayLarge: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monodisplaylarge"
      {...props}
      font={props.font || 'MonoDisplayLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplayLarge.displayName = 'MonoDisplayLarge';

export const MonoDisplayMedium: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monodisplaymedium"
      {...props}
      font={props.font || 'MonoDisplayMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplayMedium.displayName = 'MonoDisplayMedium';

export const MonoDisplaySmall: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monodisplaysmall"
      {...props}
      font={props.font || 'MonoDisplaySmall'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplaySmall.displayName = 'MonoDisplaySmall';

export const MonoDisplayXSmall: BlockWithForwardRef<'div'> = React.forwardRef(
  <TElement extends React.ElementType = 'div'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monodisplayxsmall"
      {...props}
      font={props.font || 'MonoDisplayXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplayXSmall.displayName = 'MonoDisplayXSmall';

export const MonoHeadingXXLarge: BlockWithForwardRef<'h1'> = React.forwardRef(
  <TElement extends React.ElementType = 'h1'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoheadingxxlarge"
      as={props.as || 'h1'}
      {...props}
      font={props.font || 'MonoHeadingXXLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoHeadingXXLarge.displayName = 'MonoHeadingXXLarge';

export const MonoHeadingXLarge: BlockWithForwardRef<'h2'> = React.forwardRef(
  <TElement extends React.ElementType = 'h2'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoheadingxlarge"
      as={props.as || 'h2'}
      {...props}
      font={props.font || 'MonoHeadingXLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoHeadingXLarge.displayName = 'MonoHeadingXLarge';

export const MonoHeadingLarge: BlockWithForwardRef<'h3'> = React.forwardRef(
  <TElement extends React.ElementType = 'h3'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoheadinglarge"
      as={props.as || 'h3'}
      {...props}
      font={props.font || 'MonoHeadingLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoHeadingLarge.displayName = 'MonoHeadingLarge';

export const MonoHeadingMedium: BlockWithForwardRef<'h4'> = React.forwardRef(
  <TElement extends React.ElementType = 'h4'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoheadingmedium"
      as={props.as || 'h4'}
      {...props}
      font={props.font || 'MonoHeadingMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoHeadingMedium.displayName = 'MonoHeadingMedium';

export const MonoHeadingSmall: BlockWithForwardRef<'h5'> = React.forwardRef(
  <TElement extends React.ElementType = 'h5'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoheadingsmall"
      as={props.as || 'h5'}
      {...props}
      font={props.font || 'MonoHeadingSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoHeadingSmall.displayName = 'MonoHeadingSmall';

export const MonoHeadingXSmall: BlockWithForwardRef<'h6'> = React.forwardRef(
  <TElement extends React.ElementType = 'h6'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoheadingxsmall"
      as={props.as || 'h6'}
      {...props}
      font={props.font || 'MonoHeadingXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoHeadingXSmall.displayName = 'MonoHeadingXSmall';

export const MonoLabelLarge: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monolabellarge"
      {...props}
      font={props.font || 'MonoLabelLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoLabelLarge.displayName = 'MonoLabelLarge';

export const MonoLabelMedium: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monolabelmedium"
      {...props}
      font={props.font || 'MonoLabelMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoLabelMedium.displayName = 'MonoLabelMedium';

export const MonoLabelSmall: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monolabelsmall"
      {...props}
      font={props.font || 'MonoLabelSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoLabelSmall.displayName = 'MonoLabelSmall';

export const MonoLabelXSmall: BlockWithForwardRef<'label'> = React.forwardRef(
  <TElement extends React.ElementType = 'label'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monolabelxsmall"
      {...props}
      font={props.font || 'MonoLabelXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoLabelXSmall.displayName = 'MonoLabelXSmall';

export const MonoParagraphLarge: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoparagraphlarge"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'MonoParagraphLarge'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoParagraphLarge.displayName = 'MonoParagraphLarge';

export const MonoParagraphMedium: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoparagraphmedium"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'MonoParagraphMedium'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoParagraphMedium.displayName = 'MonoParagraphMedium';

export const MonoParagraphSmall: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoparagraphsmall"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'MonoParagraphSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoParagraphSmall.displayName = 'MonoParagraphSmall';

export const MonoParagraphXSmall: BlockWithForwardRef<'p'> = React.forwardRef(
  <TElement extends React.ElementType = 'p'>(
    props: OverrideProps<TElement, BlockProps<TElement>>,
    ref
  ) => (
    <Block
      data-baseweb="typo-monoparagraphxsmall"
      as={props.as || 'p'}
      {...props}
      font={props.font || 'MonoParagraphXSmall'}
      color={props.color || 'contentPrimary'}
      ref={ref as any}
    />
  )
);
MonoParagraphXSmall.displayName = 'MonoParagraphXSmall';
