module.exports = {
    sourceType: "module", // Specify source type as module
    parserOptions: {
      ecmaVersion: 2022, // Specify ECMAScript version
    },
    rules: {
      'no-unused-vars': 'off', // Ignore unused variables
      'no-undef': 'off', // Ignore undefined variables
      '@typescript-eslint/no-var-requires': 'off', // Ignore require statements
      '@typescript-eslint/no-unused-vars': 'off' // Ignore unused variables in TypeScript code
      // Add other rules here if needed
    }
  };
  



  