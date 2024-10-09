/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StyledDay, StatefulDatepicker, type SharedStyleProps } from '..';

export function Scenario() {
  return (
    <StatefulDatepicker
      aria-label="Select a date"
      clearable={true}
      initialState={{ value: [] }}
      highlightedDate={new Date('March 10, 2019')}
      range
      timeSelectEnd
      timeSelectStart
      overrides={{
        Day: {
          // eslint-disable-next-line react/display-name
          component: React.forwardRef<typeof StyledDay, SharedStyleProps>((props, ref) => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <StyledDay data-highlighted={props.$isHighlighted} {...props} ref={ref as any} />
          )),
        },

        MonthYearSelectButton: { props: { 'data-id': 'monthYearSelectButton' } },
        MonthYearSelectStatefulMenu: {
          props: {
            overrides: { List: { props: { 'data-id': 'monthYearSelectMenu' } } },
          },
        },

        TimeSelect: {
          props: {
            overrides: {
              Select: {
                props: {
                  overrides: {
                    Root: { props: { 'data-id': 'time-select' } },
                    ValueContainer: { props: { 'data-id': 'selected' } },
                  },
                },
              },
            },
          },
        },
      }}
    />
  );
}
