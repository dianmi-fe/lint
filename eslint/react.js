const { rules } = require('./index')

module.exports = {
    extends: [
        'airbnb', // 推荐规则
        'airbnb/hooks',
        'prettier',
    ],
    rules: {
        ...rules,
    },
}
