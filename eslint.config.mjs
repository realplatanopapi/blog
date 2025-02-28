import { FlatCompat } from '@eslint/eslintrc'
import pluginNoRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import pluginSort from 'eslint-plugin-simple-import-sort'
import pluginUnicorn from 'eslint-plugin-unicorn'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/**
 * @type {import('eslint').Linter.Config[]}
 */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/', 'node_modules/'],
  },
  {
    plugins: {
      'simple-import-sort': pluginSort,
      unicorn: pluginUnicorn,
      'no-relative-import-paths': pluginNoRelativeImportPaths,
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: true,
          rootDir: 'src',
          prefix: '@',
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
  {
    ignores: ['src/app/**/*', '*.config.*'],
    rules: {
      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            direct: true,
          },
        },
      ],
    },
  },
  {
    ignores: ['src/components/**/*', 'src/theme/**/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@chakra-ui/react', 'next/link', 'next/image'],
              message: 'Import from @/components instead.',
            },
          ],
        },
      ],
    },
  },
]

export default eslintConfig
