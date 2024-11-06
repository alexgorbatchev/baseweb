/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import React from 'react';
import { Notification, KIND } from 'baseui/notification';
import { StyledLink } from 'baseui/link';
import Link from 'next/link';

export default function UnstableWarning() {
  return (
    <Notification overrides={{ Body: { style: { width: 'auto' } } }} kind={KIND.positive}>
      <>
        View the{' '}
        <StyledLink $as="div">
          <Link href="/guides/tables">table guide</Link>
        </StyledLink>{' '}
        to see which Base Web table is best suited for your application.
      </>
    </Notification>
  );
}
