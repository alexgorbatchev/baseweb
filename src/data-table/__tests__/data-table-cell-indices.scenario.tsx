/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import RowIndexColumn from '../column-row-index';
import { CustomColumn, StatefulDataTable } from '..';

const rows = new Array(100).fill(undefined).map((_, index) => ({ id: index, data: null }));

const columns = new Array(30).fill(undefined).map((_, index) =>
  CustomColumn({
    title: `column ${index}`,
    mapDataToValue: () => null,
    renderCell: ({ x, y }) => `${x}, ${y}`,
  })
);

export function Scenario() {
  return (
    <div style={{ height: '500px', width: '800px' }}>
      <StatefulDataTable columns={[RowIndexColumn(), ...columns]} rows={rows} />
    </div>
  );
}
