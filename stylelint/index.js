module.exports = {
    extends: [
        'stylelint-config-standard', // stylelint 推荐默认规则
        'stylelint-config-rational-order', // 用于检测属性顺序
        'stylelint-config-prettier', // 过滤与 prettier 冲突的规则
    ],
    plugins: [
        'stylelint-prettier', // 用于 prettier 的错误提示
        'stylelint-order', // 用于检测属性顺序
        'stylelint-scss',
    ],
    rules: {
        'prettier/prettier': true, // 用于 prettier 的错误提示
        'order/order': [
            // 用于检测属性顺序
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules',
        ],
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },
}
