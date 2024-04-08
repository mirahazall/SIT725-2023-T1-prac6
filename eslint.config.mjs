import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  // Configuration for JavaScript files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser // Define global variables
    },
    plugins: {
      "@eslint/js": pluginJs
    },
    rules: {
      'no-unused-vars': 'off', // Ignore unused variables
      'no-undef': 'off', // Ignore undefined variables
      '@typescript-eslint/no-var-requires': 'off', // Ignore require statements
      '@typescript-eslint/no-unused-vars': 'off' // Ignore unused variables in TypeScript code
      // Add other JavaScript-specific rules here if needed
    }
  },
  // Configuration for TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "typescript-eslint": tseslint
    },
    rules: {
      // TypeScript-specific rules
      // Add other TypeScript-specific rules here if needed
    }
  }
];




