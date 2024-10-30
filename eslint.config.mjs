import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'

const flatcompat = new FlatCompat()

export default tseslint.config(
  {
    ignores: ['.next', 'out']
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  reactPlugin.configs.flat.recommended,
  ...fixupConfigRules(flatcompat.extends('plugin:@next/next/recommended'))
)
