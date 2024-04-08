import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        browser: true // Define your global variables here
      }
    },
    plugins: {
      "@eslint/js": pluginJs,
      "typescript-eslint": tseslint
    },
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



  