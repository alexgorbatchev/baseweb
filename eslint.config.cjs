/* eslint-disable @typescript-eslint/no-require-imports */

const reactPlugin = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierPluginRecommended = require('eslint-plugin-prettier/recommended');
const jestPlugin = require('eslint-plugin-jest');
const typeScriptPlugin = require('typescript-eslint');

// const headers = require('eslint-plugin-headers');
const globals = require('globals');

const logger = {
  rules: {
    progress: {
      meta: {
        docs: { description: 'Prints file names to console to indicate progress.' },
      },
      create(context) {
        console.log(context.filename.replace(__dirname, '.'));
        return {};
      },
    },
  },
};

module.exports = typeScriptPlugin.config(
  { name: 'eslint-plugin-react/recommended', ...reactPlugin.configs.flat.recommended },
  { name: 'eslint-plugin-prettier/recommended', ...prettierPluginRecommended },
  importPlugin.flatConfigs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  ...typeScriptPlugin.configs.recommended,
  ...[
    {
      name: 'eslint.config.cjs/logger',
      plugins: { logger },
      rules: { 'logger/progress': 'error' },
    },

    {
      name: 'baseweb/ignore',
      ignores: [
        '.ladle/',
        'coverage/',
        'build-ladle/',
        'dist/',
        'public/',
        'playwright-report/',
        'packages/',
        '__artifacts__/',

        'documentation-site/.next/',
        'documentation-site/examples/',
        'documentation-site/posts.js',
        'documentation-site/cheat-sheet.js',
        'documentation-site/next-env.d.ts',
        'documentation-site/scripts/cheat-sheet.js',
      ],
    },

    {
      name: 'baseweb/common',

      plugins: {
        // agorbatchev: disabled as it currently doesn't allow to match existing headers
        // https://github.com/robmisasi/eslint-plugin-headers/issues/5
        //
        // headers,
        react: reactPlugin,
        prettier: prettierPlugin,
        jest: jestPlugin,
        reactHooks: reactHooksPlugin,
      },

      settings: {
        react: {
          version: 'detect',
        },

        'import/extensions': ['.ts', '.tsx'],
        'import/resolver': {
          typescript: true,
          node: true,
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },

      languageOptions: {
        globals: {
          ...globals.jest,
          page: true,
          browser: true,
          context: true,
        },
      },

      rules: {
        'dot-notation': 'error',
        'prefer-rest-params': 'off',
        'prefer-const': 'off',
        'no-var': 'off',

        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',

        'prettier/prettier': 'error',

        //   'headers/header-format': [
        //     'error',
        //     {
        //       //   source: 'file',
        //       //   path: './LICENSE-HEAD',
        //       source: 'string',
        //       content:
        //         'Copyright (c) Uber Technologies, Inc.\n\nThis source code is licensed under the MIT license found in the\rLICENSE file in the root directory of this source tree.',
        //       linePrefix: '-',
        //     },
        //   ],

        'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

        'import/prefer-default-export': 'off',
        'import/no-duplicates': 'error',
        'import/newline-after-import': 'error',
        'import/first': 'error',
        // agorbatchev: Disable this because `React...` imports are common in this codebase
        'import/no-named-as-default-member': 'off',

        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',

        // agorbatchev: Upgrading to ESLint 9
        // Set these rules to warn for to avoid making changes to existing code
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/no-empty-object-type': 'warn',
        '@typescript-eslint/no-unsafe-function-type': 'warn',
        '@typescript-eslint/no-require-imports': 'warn',
      },
    },

    {
      name: 'eslint/defaults/files',
      ignores: ['**/_next/**', '**/.wireit/**'],
    },

    {
      name: 'baseweb/js',
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },

    {
      name: 'baseweb/documentation-site',

      files: [
        'documentation-site/**/*.jsx',
        'documentation-site/**/*.ts',
        'documentation-site/**/*.tsx',
        'documentation-site/**/*.d.ts',
      ],

      settings: {
        'import/resolver': {
          typescript: {
            project: 'documentation-site/tsconfig.json',
          },
        },
      },

      rules: {
        'react/display-name': 'off',

        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: ['documentation-site/', __dirname],
            // agorbatchev: additionally, in the root `package.json` we have `bundledDependencies` to get
            // import form 'baseui/...' to work.
          },
        ],
      },
    },
  ]
);
