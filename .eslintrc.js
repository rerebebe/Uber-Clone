module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        '@frontend/eslint-config'
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-underscore-dangle': 'off',
        complexity: 'off',
        'max-classes-per-file': 'off',
        'max-lines-per-function': 'off',
        'react-native/no-inline-styles': 'off',
        'no-nested-ternary': 'off'
    }
}
