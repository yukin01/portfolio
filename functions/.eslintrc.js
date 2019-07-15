module.exports = {
  env: { 
    browser: true
  },
  extends: [
    "eslint:recommended", // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    "plugin:@typescript-eslint/recommended", // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/base.json
    "plugin:prettier/recommended", // https://github.com/prettier/eslint-plugin-prettier
    "plugin:react/recommended", // https://github.com/yannickcr/eslint-plugin-react
    "prettier/@typescript-eslint", // https://github.com/prettier/eslint-config-prettier
    "prettier/react"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {}
}