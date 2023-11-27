/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    "browser": true,
    "node": true
  }
}
