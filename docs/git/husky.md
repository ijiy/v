# husky 【Git hooks】

## 安装
```bash
pnpm add husky@4 lint-staged -D
```

## 配置
* package.json

```json
{
	"license": "MIT",
	"scripts": {
		"lint": "pnpm lint:es & pnpm lint:style",
		"lint:es": "eslint *.{js,ts,html} src/**/*.{ts,vue} --fix",
		"lint:style": "stylelint src/**/*.{less,vue} --fix"
	},

	"husky": {
		"hooks": {
			"pre-commit": "lint-staged"
		}
	},
	"lint-staged": {
		"src/**/*.{ts,vue}": "pnpm lint:es",
		"src/**/*.{less,vue}": "pnpm lint:style"
	}
}
```
