/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  workers: '100%',
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        isMobile: false,
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  retries: process.env.CI ? 2 : 0,
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  expect: {
    toMatchSnapshot: { maxDiffPixelRatio: 0.2 },
    // toHaveScreenshot: { maxDiffPixelRatio: 0.2 },
  },
};

export default config;
