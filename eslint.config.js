import js from "@eslint/js"
import vitest from "@vitest/eslint-plugin"
import eslintConfigPrettier from "eslint-config-prettier"
import jestDom from "eslint-plugin-jest-dom"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettier from "eslint-plugin-prettier/recommended"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import testingLibrary from "eslint-plugin-testing-library"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react.configs.flat.recommended,
    ...jestDom.configs["flat/recommended"],
    ...testingLibrary.configs["flat/react"],
    ...jsxA11y.flatConfigs.recommended,
    ...vitest.configs.recommended,
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  }
)
