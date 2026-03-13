import js from '@eslint/js';
import globals from 'globals';
import { configs } from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// Import json from "@eslint/json";
// Import css from "@eslint/css";
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['./dist/*', '**/node_modules/', 'webpack.config.js', 'postcss.config.js']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions,
      },
    },
  },
  configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-console': ['warn'],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowTernary: true, allowShortCircuit: true },
      ],
      'import/order': [
        'warn',
        {
          groups: ['external', 'builtin', 'parent', 'sibling', 'internal', 'index', 'object'],
          pathGroups: [
            {
              pattern: './*.module.css',
              group: 'object',
            },
            {
              pattern: '@**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@**/**',
              group: 'parent',
              position: 'before',
            },
          ],
        },
      ],
    },
    settings: {
      react: {
        version: '18',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },

  // { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  // { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
