module.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'prettier', // 过滤与 prettier 冲突的规则
    ],
    plugins: [
        'prettier', // 用于 prettier 的错误提示
    ],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        mocha: true,
    },
    globals: {
        getApp: false,
        wx: false,
        Vue: false,
        VueRouter: false,
        PushStream: false,
        TIM: false,
        TcPlayer: false,
    },
    rules: {
        'prettier/prettier': 'error', // 用于 prettier 的错误提示
        'no-console': 'off',

        // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
        // 'arrow-body-style': 'off',
        // 'prefer-arrow-callback': 'off',
    },
}
