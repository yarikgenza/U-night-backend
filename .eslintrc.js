module.exports = {
  "extends": "airbnb-base",
  "plugins": [
      "import"
  ],
  "rules": {
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    "no-console": 0,
    "import/first": 0
  },
  "settings": {
  "import/resolver": {
    "node": {
      "moduleDirectory": [
        "node_modules",
        __dirname
      ]
    }
  }
}
};