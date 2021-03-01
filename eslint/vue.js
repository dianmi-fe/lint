const { rules } = require('./index')

module.exports = {
    extends: [
        'airbnb-base',
        'plugin:vue/recommended', // vue 推荐规则
        'plugin:vue/strongly-recommended', // vue 推荐规则
        'plugin:vue/essential', // vue 推荐规则
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        ...rules,
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    normal: 'always',
                    void: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
}
