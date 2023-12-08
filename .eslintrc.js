// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  ignorePatterns: ["dist", "docs", "node_modules"],
  overrides: [
    {
      files: ["src/**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        quotes: "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "no-underscore-dangle": "off",
      },
      env: {
        browser: true,
        es2023: true,
      },
      extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
    },
    {
      env: {
        node: true,
        es2023: true,
      },
      extends: ["eslint:recommended", "prettier"],
      files: ["*.{js,cjs}", "src/**/*.js"],
    },
  ],
});
