module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
  },
  "rules": {
    "spaced-comment": 0,
    "no-console": 0,
    "import/no-extraneous-dependencies": 0,
    "comma-dangle": ["error", "always-multiline"]
  },
  "plugins": [
    "import"
  ],
  "parser": "babel-eslint",
};
