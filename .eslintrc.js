require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"]
  },
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    'react/jsx-props-no-spreading': 'off'
  }
}
