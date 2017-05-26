module.exports = {
  env: {
    node: true,
    es6: true
  },
  rules: {
    quotes: [2, 'single'],
    semi: 2,
    'arrow-body-style': [1, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'consistent-return': 1,
    'max-len': [1, 150, 2],
    'no-console': 1,
    "no-mixed-operators": [2, {
      "groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]],
      "allowSamePrecedence": true
    }],
    'no-param-reassign': [1, { props: false }],
    'no-underscore-dangle': [2, { allowAfterThis: true, allowAfterSuper: false }],
    'object-curly-spacing': 0
  },
  extends: 'airbnb-base'
};
