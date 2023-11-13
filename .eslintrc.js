module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    'vue/no-unused-components': 'warn',
    'vue/valid-template-root': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/require-v-for-key': 'error',
    'vue/no-unused-vars': 'error',
  },
};
