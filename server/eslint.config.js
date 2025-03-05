import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { 
      globals: {
        ...globals.node 
      },
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      prettier
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

export default config;