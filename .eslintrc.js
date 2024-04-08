import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.js"],
    parserOptions: { sourceType: "commonjs" },
    globals: {
      browser: true,
      ...globals.browser
    },
    plugins: ["@eslint/js", "typescript-eslint"],
    extends: ["plugin:@eslint/js/recommended", "plugin:typescript-eslint/recommended"],
    rules: {
      'no-unused-vars': 'off', // Ignore unused variables
      'no-undef': 'off', // Ignore undefined variables
      '@typescript-eslint/no-var-requires': 'off', // Ignore require statements
      '@typescript-eslint/no-unused-vars': 'off' // Ignore unused variables in TypeScript code
      // Add other rules here if needed
    }
  }
];
  