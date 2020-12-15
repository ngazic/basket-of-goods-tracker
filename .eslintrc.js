module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": 1,
    quotes: [2, "double", { avoidEscape: true }],
  },
};
