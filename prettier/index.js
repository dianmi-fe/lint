// https://prettier.io/docs/en/options.html

module.exports = {
    printWidth: 80, // 一行最大字符数
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'as-needed', // 对象属性引号规则
    trailingComma: 'none', // 多行时尽可能打印尾随逗号
    proseWrap: 'never', // ???
    endOfLine: 'lf',

    bracketSpacing: true, // default
    arrowParens: 'avoid', // default
    jsxSingleQuote: false, // default
    jsxBracketSameLine: false // default
}
