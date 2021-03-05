# @dianmi-fe/lint &middot; [![GitHub license](https://img.shields.io/npm/l/@dianmi-fe/lint)](https://github.com/dianmi-fe/lint/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@dianmi-fe/lint)](https://www.npmjs.com/package/@dianmi-fe/lint) [![GitHub Release](https://img.shields.io/github/v/release/dianmi-fe/lint)](https://github.com/dianmi-fe/lint/releases) [![GitHub Actions](https://img.shields.io/github/workflow/status/dianmi-fe/lint/Create%20Release?label=Create%20Release)](https://github.com/dianmi-fe/lint/actions/workflows/release-tag.yml)


```
npm install --save-dev @dianmi-fe/lint
```


## 使用方式

### 在你的项目的根目录下
```javascript
// 创建一个 .prettierrc.js 文件, 并将以下内容复制进去:
module.exports = require('@dianmi-fe/lint/prettier')

// 创建一个 .stylelintrc.js 文件, 并将以下内容复制进去:
module.exports = require('@dianmi-fe/lint/stylelint')
```

### Vue
> Vue + TypeScript 待实现

```javascript
// 在你的 Vue 项目的根目录下创建一个 .eslintrc.js 文件, 并将以下内容复制进去:
module.exports = require('@dianmi-fe/lint/eslint/vue')
```

### Vue3
> Vue3 + TypeScript 待实现

```javascript
// 在你的 Vue3 项目的根目录下创建一个 .eslintrc.js 文件, 并将以下内容复制进去:
module.exports = require('@dianmi-fe/lint/eslint/vue3')
```

### React
> React + TypeScript 待实现

```javascript
// 在你的 React 项目的根目录下创建一个 .eslintrc.js 文件, 并将以下内容复制进去:
module.exports = require('@dianmi-fe/lint/eslint/react')
```


## 为了增加更好的开发体验

### 必不可少的 vscode 插件
> 点击图标进入插件详情页

<p>
    <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
        <img src="https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/5.9.2/1613061160143/Microsoft.VisualStudio.Services.Icons.Default" alt="prettier" width="128">
    <a>
    <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
        <img src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.1.14/1607941542177/Microsoft.VisualStudio.Services.Icons.Default" alt="elsint" width="128">
    <a>
    <a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">
        <img src="https://stylelint.gallerycdn.vsassets.io/extensions/stylelint/vscode-stylelint/0.86.0/1612657921309/Microsoft.VisualStudio.Services.Icons.Default" alt="stylelint" width="128">
    <a>
    <a href="https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command">
        <img src="https://vsassetscdn.azure.cn/v/M182_20210218.1/_content/Header/default_icon_128.png" alt="multi-command" width="128">
    <a>
</p>

### 必不可少的 vscode 配置

##### 1. 项目根目录创建 .vscode/settings.json, 粘贴以下 json
```json
{
    "files.eol": "\n",
    "editor.tabSize": 4,
    // "editor.formatOnSave": true,
    // "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": { // 保存时的代码操作
        "source.fixAll": true
        // or(或者)
        // "source.fixAll.eslint": true,
        // "source.fixAll.stylelint": true
    },
    // multi-command 插件配置项, 用于一键执行 eslint/stylelint 格式化
    "multiCommand.commands": [ 
        {
            "command": "multiCommand.fixAll",
            "sequence": [
                "eslint.executeAutofix",
                "stylelint.executeAutofix"
            ]
        },
    ]
}
```

##### 2. 根据下面的视频打开文件位置, 粘贴以下 json
```json
[
    {
        "key": "ctrl+f", // 可修改为自己的快捷键
        "command": "multiCommand.fixAll"
    }
]
```

<img src="https://user-images.githubusercontent.com/37133629/110074512-4cc16b00-7dbc-11eb-8d1a-30791f7eb21e.gif">
