module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "max-len": ["error", { ignoreComments: true, code: 120 }],
    "no-console": "off",
    "no-plusplus": "off",
    "no-use-before-define": "off",
    "consistent-return": "off",
    "no-alert": "off",
  },
  plugins: ["jest"],
};
