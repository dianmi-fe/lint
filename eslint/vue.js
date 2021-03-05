const def = require('./index')

module.exports = {
    ...def,
    extends: [
        // eslint-config-airbnb-base
        'airbnb-base',
        // eslint-plugin-vue
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
        'plugin:vue/essential',
        // eslint-plugin-import
        'plugin:import/errors',
        'plugin:import/warnings',
        // eslint-config-prettier
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    rules: {
        ...def.rules,

        // eslint-plugin-import
        'import/prefer-default-export': 'off',

        // eslint-plugin-vue
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any'
                }
            }
        ]
    }
}
