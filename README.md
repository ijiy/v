# 使用

## 环境
```bash
node -v
:: 19.7.0

npm -v
:: 9.5.1

npm config get registry
:: https://registry.npm.taobao.org/
```

## 初始化
```bash
npm i
```

## 运行
```bash
:: 调试
npm run dev

:: 打包
npm run build
```

## 重构
```bash
cd /d D:\Project

mkdir qp-press && cd qp-press

npm init

npm i vitepress vue

mkdir docs && cd docs

:: add config
mkdir .vitepress && echo export default {} > .vitepress/config.js

:: add new md
echo # testTitle > test.md
```

package.json

```json
{
	"scripts": {
		"dev": "vitepress dev docs --host",
		"build": "vitepress build docs"
	}
}
```

## 部署
* 选择部署在 github-pages

* 自动构建只支持 `npm` 和 `yarn`, 故当前项目舍弃了 `pnpm`

## 注意
* config.js
	+ link路径前一定要有`/`, index.md页面直接用`/`结尾
		- `link: '/html-web/`

* 若使用 pnpm, package.json需要添加

```json
{
	"pnpm": {
		"peerDependencyRules": {
			"ignoreMissing": [
				"@algolia/client-search"
			]
		}
	}
}
```
