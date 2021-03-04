# @dianmi-fe/lint &middot; [![GitHub license](https://img.shields.io/npm/l/@dianmi-fe/lint)](https://github.com/dianmi-fe/lint/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@dianmi-fe/lint)](https://www.npmjs.com/package/@dianmi-fe/lint) [![GitHub Release](https://img.shields.io/github/v/release/dianmi-fe/lint)](https://github.com/dianmi-fe/lint/releases) [![GitHub Actions](https://img.shields.io/github/workflow/status/dianmi-fe/lint/Create%20Release?label=Create%20Release)](https://github.com/dianmi-fe/lint/actions/workflows/release-tag.yml)

## 快速开始

```
npm install --save-dev @dianmi-fe/lint
```

请根据你的项目使用的技术栈选择以下配置：

- [Vue](#Vue)
- [Vue3](#Vue3)
- [React](#React)

## 使用方式

### Vue

> Vue + TypeScript 待实现

```javascript
// 在你的项目的根目录下创建一个 .prettierrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/prettier')

// 在你的项目的根目录下创建一个 .stylelintrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/stylelint')

// 在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/eslint/vue')
```

### Vue3

> Vue3 + TypeScript 待实现

```javascript
// 在你的项目的根目录下创建一个 .prettierrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/prettier')

// 在你的项目的根目录下创建一个 .stylelintrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/stylelint')

// 在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/eslint/vue3')
```

### React

> React + TypeScript 待实现

```javascript
// 在你的项目的根目录下创建一个 .prettierrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/prettier')

// 在你的项目的根目录下创建一个 .stylelintrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/stylelint')

// 在你的项目的根目录下创建一个 .eslintrc.js 文件，并将以下内容复制进去：
module.exports = require('@dianmi-fe/lint/eslint/react')
```