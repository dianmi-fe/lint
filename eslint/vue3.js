const def = require('./vue')

module.exports = {
    ...def,
    extends: [
        // eslint-config-airbnb-base
        'airbnb-base',
        // eslint-plugin-vue
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-essential',
        // eslint-config-prettier
        'prettier',
    ],
}
