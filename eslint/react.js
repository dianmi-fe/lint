const def = require('./index')

module.exports = {
    ...def,
    extends: [
        // eslint-config-airbnb
        'airbnb',
        'airbnb/hooks',
        // eslint-config-prettier
        'prettier',
    ],
}
