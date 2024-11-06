/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import { useRouter } from 'next/router';
import { Block } from 'baseui/block';
import { Button, KIND, SIZE } from 'baseui/button';
import TableOfContents from './table-of-contents';
import { themedStyled } from '../pages/_app';
import MarkdownElements from './markdown-elements';
import Sidebar from './sidebar';
import HeaderNavigation from './header-navigation';
import Footer from './footer';
import PencilIcon from './pencil-icon';
import Routes from '../routes';
import DirectionContext from '../components/direction-context';
import SkipToContent from './skip-to-content';

const GH_URL = 'https://github.com/uber/baseweb/edit/master/documentation-site/pages';

function findByPath(o, path) {
  if (!path) return;
  if (o.itemId === path) {
    return o;
  }
  var result, p;
  for (p in o) {
    if (o[p] && typeof o[p] === 'object') {
      result = findByPath(o[p], path);
      if (result) {
        return result;
      }
    }
  }
  return result;
}

const TOCWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'none',
  '@media screen and (min-width: 1340px)': {
    display: 'block',
    maxWidth: '16em',
  },
}));

const SidebarWrapper = themedStyled('nav', ({ $theme, $isOpen, $hideSideNavigation }) => ({
  display: $isOpen ? 'block' : 'none',
  paddingTop: $theme.sizing.scale700,
  marginLeft: $theme.sizing.scale800,
  marginRight: $theme.sizing.scale800,
  [$theme.mediaQuery.medium]: {
    display: $hideSideNavigation ? 'none' : 'block',
    maxWidth: '16em',
  },
}));

const ContentWrapper = themedStyled('main', ({ $theme, $isSidebarOpen, $maxWidth }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: $isSidebarOpen ? 'none' : 'block',
  paddingLeft: $theme.sizing.scale800,
  paddingRight: $theme.sizing.scale800,
  width: '100%',
  outline: 'none',
  maxWidth: $maxWidth ? $maxWidth : '40em',
  [$theme.mediaQuery.medium]: {
    display: 'block',
    maxWidth: $maxWidth ? $maxWidth : '40em',
  },
}));

export default function Layout({
  toggleTheme,
  toggleDirection,
  children,
  hideSideNavigation,
  maxContentWidth,
}) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const path = router.pathname;

  // strip the query string
  let cleanPath = path.split('?')[0];

  if (cleanPath && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const route = findByPath(Routes, cleanPath);
  let isGitHubEditDisabled;
  let githubUrl;
  if (!cleanPath || !route) {
    isGitHubEditDisabled = true;
  } else {
    isGitHubEditDisabled = route.isGitHubEditDisabled;
    if (route.components) {
      githubUrl = `${GH_URL}${cleanPath}/index.mdx`;
    } else {
      githubUrl = `${GH_URL}${cleanPath}.mdx`;
    }
  }

  return (
    <DirectionContext.Consumer>
      {(direction) => (
        <React.Fragment>
          <SkipToContent />
          <HeaderNavigation
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            toggleTheme={toggleTheme}
            toggleDirection={toggleDirection}
          />
          <Block
            backgroundColor="backgroundPrimary"
            color="contentPrimary"
            marginTop="scale300"
            display="flex"
            paddingTop="scale400"
            justifyContent="center"
          >
            <SidebarWrapper
              aria-label="primary"
              $isOpen={sidebarOpen}
              $hideSideNavigation={!!hideSideNavigation}
              onClick={() => sidebarOpen && setSidebarOpen(false)}
            >
              <Sidebar path={cleanPath} />
            </SidebarWrapper>
            <ContentWrapper
              id="docSearch-content"
              role="main"
              tabIndex="-1"
              $isSidebarOpen={sidebarOpen}
              $maxWidth={maxContentWidth}
            >
              {isGitHubEditDisabled ? null : (
                <Block
                  display={['none', 'block']}
                  position="absolute"
                  top="-10px"
                  overrides={{
                    Block: {
                      style: {
                        [direction === 'rtl' ? 'left' : 'right']: 0,
                        [direction === 'rtl' ? 'right' : 'left']: 'auto',
                      },
                    },
                  }}
                >
                  <Button
                    startEnhancer={() => <PencilIcon size={16} color="#666666" />}
                    $as="a"
                    href={githubUrl}
                    target="_blank"
                    size={SIZE.compact}
                    kind={KIND.tertiary}
                  >
                    Edit this page
                  </Button>
                </Block>
              )}
              <MDXProvider components={MarkdownElements}>{children}</MDXProvider>
            </ContentWrapper>
            <TOCWrapper>
              <TableOfContents content={React.Children.toArray(children)} />
            </TOCWrapper>
          </Block>
          <Footer />
        </React.Fragment>
      )}
    </DirectionContext.Consumer>
  );
}
