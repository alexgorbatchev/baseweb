/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//
/* global process */
import * as React from 'react';

import Head from 'next/head';
import Img from 'next/legacy/image';
import { Block } from 'baseui/block';
import { StyledLink } from 'baseui/link';
import { withWrapper } from 'baseui/styles';
import Code from './code';
import { themedStyled } from '../pages/_app';
import Link from 'next/link';
import Anchor from './anchor';
import slugify from '../helpers/slugify';
import { useHover } from './hooks';

const getText = (children) => {
  let label = '';
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
    if (child.props && child.props.children) {
      label += getText(child.props.children);
    }
  });
  return label;
};

export const cleanAnchor = (anchor) => slugify(getText(anchor));

export const Heading = ({ element, fontType, children }) => {
  const [hoverRef, isHovered] = useHover();
  const slug = cleanAnchor(children);
  return (
    <Block
      as={element}
      marginBottom="8px"
      font={fontType}
      ref={hoverRef}
      id={slug}
      color="contentPrimary"
    >
      <React.Fragment>
        {children} <Anchor isVisible={isHovered} slug={slug} element={element} />
      </React.Fragment>
    </Block>
  );
};

export const ListItem = (props) => (
  <Block as="li" font="font300">
    {props.children}
  </Block>
);

export const Paragraph = (props) => (
  <Block as="p" font="font300">
    {props.children}
  </Block>
);

export const UnorderedList = (props) => <ul>{props.children}</ul>;

export const InlineCode = themedStyled('code', ({ $theme }) => {
  return {
    ...$theme.typography.MonoParagraphMedium,
    backgroundColor: 'rgba(27, 31, 35, 0.05)',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
    fontSize: '85%',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: '0.2em 0.4em',
  };
});

const Blockquote = themedStyled('blockquote', {
  backgroundColor: 'rgba(27, 31, 35, 0.03)',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  borderBottomRightRadius: '3px',
  borderBottomLeftRadius: '3px',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  padding: '1em 3em',
});

export const DocLink = ({ children, href }) => {
  const parts = href.split('#');
  const internal = (parts[0] === '' && parts[1] !== '') || !href.includes('http');
  if (internal) {
    return (
      <Link href={href}>
        <StyledLink $as="div">{children}</StyledLink>
      </Link>
    );
  }
  return (
    <StyledLink href={href} target="_blank">
      {children}
    </StyledLink>
  );
};

export const H1 = ({ children }) => (
  <React.Fragment>
    <Head>
      <title key="title">
        {process.env.NODE_ENV !== 'production' ? '[DEV] ' : ''}
        Base Web - {children}
      </title>
    </Head>
    <Heading element="h1" fontType="font750">
      {children}
    </Heading>
  </React.Fragment>
);

export const H2 = ({ children }) => (
  <Heading element="h2" fontType="font650" marginTop="scale1000">
    {children}
  </Heading>
);

export const H3 = ({ children }) => (
  <Heading element="h3" fontType="font550">
    {children}
  </Heading>
);

export const H4 = ({ children }) => (
  <Heading element="h4" fontType="font400">
    {children}
  </Heading>
);

export const H5 = ({ children }) => (
  <Heading element="h5" fontType="font350">
    {children}
  </Heading>
);

export const H6 = ({ children }) => (
  <Heading element="h6" fontType="font250">
    {children}
  </Heading>
);

export const Image = ({ alt, src, height, width }) => {
  if (height || width) {
    return <Img src={src} alt={alt} height={height} width={width} />;
  } else {
    return <Img src={src} alt={alt} layout="fill" />;
  }
};

export default {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: Image,
  li: ListItem,
  p: Paragraph,
  ul: UnorderedList,
  inlineCode: ({ children }) => <InlineCode>{children}</InlineCode>,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  a: DocLink,
};
