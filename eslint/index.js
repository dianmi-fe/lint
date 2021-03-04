module.exports = {
    root: true,
    extends: [
        // eslint-config-airbnb-base
        'airbnb-base',
        // eslint-config-prettier
        'prettier',
    ],
    plugins: [
        // eslint-plugin-prettier
        'prettier',
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
        // eslint-plugin-prettier
        'prettier/prettier': 'error',

        'no-console': 'off',

        // https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
        // 'arrow-body-style': 'off',
        // 'prefer-arrow-callback': 'off',
    },
}
