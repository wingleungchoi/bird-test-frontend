module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
    },
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["src"]
        }
      }
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-underscore-dangle": [2, { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
      "react/prefer-stateless-function": [0],
      "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "always",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }],
    }
};
