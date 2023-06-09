module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": 0,
    "no-alert": 0,
    "linebreak-style": ["off", "windows"],
    "operator-linebreak": 0,
  },
};
