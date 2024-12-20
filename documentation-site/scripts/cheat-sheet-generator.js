/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */

const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const fs = require('fs');
const globby = require('globby');
const path = require('path');

// returns TypeNode[]
// type TypeNode = {
//   name: string,
//   lineStart: number,
//   children?: TypeNode[],
// };

// --- input ---
// type PropsT = {
//   a: string,
//   b: number,
// }
//
// --- output ---
// [
//   {
//     name: 'PropsT',
//     lineStart: 2,
//     types: [
//       {
//         name: 'a',
//         lineStart: 3,
//         children: [],
//       },
//       {
//         name: 'b',
//         lineStart: 4,
//         children: [],
//       }
//     ],
//   }
// ]

function parseFileToOutline(code) {
  const types = [];
  const ast = parse(code, { sourceType: 'module', plugins: ['typescript'] });
  traverse(ast, {
    ExportNamedDeclaration(path) {
      if (t.isTSTypeAliasDeclaration(path.node.declaration)) {
        const typeNode = {
          name: path.node.declaration.id.name,
          lineStart: path.node.declaration.id.loc.start.line,
          children: [],
        };

        if (t.isTSTypeLiteral(path.node.declaration.typeAnnotation)) {
          typeNode.children = path.node.declaration.typeAnnotation.members.map((member) => {
            if (t.isTSPropertySignature(member)) {
              return {
                name: member.key.name,
                lineStart: member.key.loc.start.line,
              };
            } else if (t.isTSIndexSignature(member)) {
              return {
                name: 'index',
                lineStart: member.loc.start.line,
              };
            } else if (t.isTSMethodSignature(member)) {
              return {
                name: member.key.name,
                lineStart: member.key.loc.start.line,
              };
            }
            throw new Error(`Unknown member type: ${member.type}`);
          });
        }

        types.push(typeNode);
      }
    },
  });
  return types;
}

// type Outline = {file: string, definitions: TypeNode[]};
function generateCheatSheet() {
  const outlines = [];

  const filepaths = globby.sync(['src/**/types.ts']);
  filepaths.map((file) => {
    const from = path.join(__dirname, '../', file);
    const source = fs.readFileSync(from, 'utf-8');
    const definitions = parseFileToOutline(source);
    outlines.push({ file, definitions });
  });

  const content = `
    const outlines = ${JSON.stringify(outlines)};
    export default outlines;
  `;

  fs.writeFileSync(`${__dirname}/cheat-sheet.js`, content);
}

module.exports = {
  parseFileToOutline,
  generateCheatSheet,
};
