/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Block } from '../block';

describe('Block', () => {
  it('renders themed backgroundColor if provided', () => {
    const { container } = render(<Block backgroundColor="primary200">test</Block>);
    const testStyle = container.querySelector('div')?.getAttribute('test-style');
    const style = JSON.parse(testStyle || '');
    expect(style.backgroundColor).toBe('$theme.colors.primary200');
  });

  it('renders themed color if provided', () => {
    const { container } = render(<Block color="primary200">test</Block>);
    const testStyle = container.querySelector('div')?.getAttribute('test-style');
    const style = JSON.parse(testStyle || '');
    expect(style.color).toBe('$theme.colors.primary200');
  });

  describe('Overflow', () => {
    it('renders overflowX styling if provided with scrollX value', () => {
      const { container } = render(<Block overflow="scrollX">test</Block>);
      const testStyle = container.querySelector('div')?.getAttribute('test-style');
      const style = JSON.parse(testStyle || '');
      expect(style.overflowX).toBe('scroll');
      expect(style.overflowY).toBe(null);
      expect(style.overflow).toBe(null);
    });

    it('renders overflowY styling if provided with scrollY value', () => {
      const { container } = render(<Block overflow="scrollY">test</Block>);
      const testStyle = container.querySelector('div')?.getAttribute('test-style');
      const style = JSON.parse(testStyle || '');
      expect(style.overflowX).toBe(null);
      expect(style.overflowY).toBe('scroll');
      expect(style.overflow).toBe(null);
    });

    it('renders overflow styling if provided any other value', () => {
      const { container } = render(<Block overflow="auto">test</Block>);
      const testStyle = container.querySelector('div')?.getAttribute('test-style');
      const style = JSON.parse(testStyle || '');
      expect(style.overflowX).toBe(null);
      expect(style.overflowY).toBe(null);
      expect(style.overflow).toBe('auto');
    });
  });

  describe('FlexWrap', () => {
    it('renders flexWrap styling as expected', () => {
      const { container } = render(<Block flexWrap>test</Block>);
      const testStyle = container.querySelector('div')?.getAttribute('test-style');
      const style = JSON.parse(testStyle || '');
      expect(style.flexWrap).toBe('wrap');
    });
  });

  it('applies event handlers', () => {
    const onClick = jest.fn();
    const { container } = render(<Block onClick={onClick}>test</Block>);
    const div = container.querySelector('div');
    if (div) fireEvent.click(div);
    expect(onClick).toHaveBeenCalled();
  });

  describe('Responsive', () => {
    it('applies expected styles if responsive array is provided', () => {
      const { container } = render(
        <Block marginLeft={['scale100', 'scale200', 'scale300', 'scale400']}>test</Block>
      );
      const testStyle = container.querySelector('div')?.getAttribute('test-style');
      const style = JSON.parse(testStyle || '');
      expect(style).toMatchInlineSnapshot(`
        {
          "@media screen and (min-width: $theme.breakpoints.largepx)": {
            "marginLeft": "$theme.sizing.scale400",
          },
          "@media screen and (min-width: $theme.breakpoints.mediumpx)": {
            "marginLeft": "$theme.sizing.scale300",
          },
          "@media screen and (min-width: $theme.breakpoints.smallpx)": {
            "marginLeft": "$theme.sizing.scale200",
          },
          "marginLeft": "$theme.sizing.scale100",
        }
      `);
    });

    it('applies expected styles if responsive array has less than number of breakpoints', () => {
      const { container } = render(<Block marginLeft={['scale100', 'scale200']}>test</Block>);
      const testStyle = container.querySelector('div')?.getAttribute('test-style');
      const style = JSON.parse(testStyle || '');
      expect(style).toMatchInlineSnapshot(`
        {
          "@media screen and (min-width: $theme.breakpoints.smallpx)": {
            "marginLeft": "$theme.sizing.scale200",
          },
          "marginLeft": "$theme.sizing.scale100",
        }
      `);
    });
  });

  it('renders themed font if provided', () => {
    const { container } = render(<Block font="font200">test</Block>);
    const testStyle = container.querySelector('div')?.getAttribute('test-style');
    const style = JSON.parse(testStyle || '');
    expect(style).toMatchInlineSnapshot(`
      {
        "fontFamily": "$theme.typography.font200.fontFamily",
        "fontSize": "$theme.typography.font200.fontSize",
        "fontWeight": "$theme.typography.font200.fontWeight",
        "lineHeight": "$theme.typography.font200.lineHeight",
      }
    `);
  });

  it('does not throw if provided unknown font prop', () => {
    const { container } = render(<Block font="not-a-real-font">test</Block>);
    const testStyle = container.querySelector('div')?.getAttribute('test-style');
    const style = JSON.parse(testStyle || '');
    expect(style).toMatchInlineSnapshot(`
      {
        "fontFamily": null,
        "fontSize": null,
        "fontWeight": null,
        "lineHeight": null,
      }
    `);
  });
});
