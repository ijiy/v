# 搭建cli工程

## 安装
```bash
cd /d D:\Project\aname-pro

npx degit dcloudio/uni-preset-vue#vite-ts aname-app

cd aname-app

npx @dcloudio/uvm

```

* 应用平台
	+ 部署到 [github-pages](../../git/github.md#github-pages)
	+ 安卓APP
	+ 苹果APP
	+ 微信小程序
	+ 支付宝小程序

如此, package.json 的 `dependencies`, `devDependencies` 只需保留如下

```json
{
	"dependencies": {
		"@dcloudio/uni-h5": "3.0.0-alpha-3061420221216001",
		"@dcloudio/uni-app": "3.0.0-alpha-3061420221216001",
		"@dcloudio/uni-app-plus": "3.0.0-alpha-3061420221216001",
		"@dcloudio/uni-mp-weixin": "3.0.0-alpha-3061420221216001",
        "@dcloudio/uni-mp-alipay": "3.0.0-alpha-3061420221216001",
		"@dcloudio/uni-components": "3.0.0-alpha-3061420221216001"
	},
	"devDependencies": {
		"@dcloudio/vite-plugin-uni": "3.0.0-alpha-3061420221216001"
	}
}
```

* 安装其它依赖

```bash
cd /d D:\Project\aname-pro\aname-app

:: base
pnpm add sass postcss vite -D & pnpm add vue pinia pinia-plugin-persist-uni @dcloudio/uni-ui

:: ts
pnpm add typescript @dcloudio/types -D

:: eslint
pnpm add eslint eslint-plugin-vue -D

:: eslin ts
pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

:: eslin jsDoc
pnpm add eslint-plugin-jsdoc -D

:: stylelint
pnpm add stylelint postcss-html stylelint-config-recess-order stylelint-config-recommended-vue stylelint-config-recommended-scss -D

```

## 升级
```bash
:: 升级所有依赖的版本号
pnpm up

cd /d D:\Project\aname-pro

:: 创建一个升级副本
npx degit dcloudio/uni-preset-vue#vite-ts aname-upp

cd aname-upp

npx @dcloudio/uvm

```

* 升级副本 -> package.json
	+ 复制`@dcloudio/uni-app`版本号, 替换项目对应的所有一样的版本号
	+ 复制`vite`版本号, 替换项目对应的版本号

```bash
cd /d D:\Project\aname-pro\aname-app

rd /s/q node_modules
:: 同时删除`pnpm-lock.yaml`

pnpm i

```

* HBuilderX 右下角, 点击`检查更新`的按钮

## 目录
```
┌─ src
│   ├─ components
│   ├─ pages
│   ├─ static
│   ├─ store
│   ├─ utils
│   ├─ api
│   ├─ main.ts                     // vue运行配置
│   ├─ App.vue                     // vue运行入口
│   ├─ env.d.ts                    // vue的TS配置
│   ├─ manifest.json               // 应用配置
│   ├─ pages.json                  // 页面配置
│   ├─ uni.scss                    // 样式静态变量
│   └─ androidPrivacy.json         // 服务协议和隐私政策 (安卓上架审核需要)
├─ .env                            // 环境变量
├─ unpackage                       // icons
├─ .editorconfig                   // IDE 规则
├─ .eslintrc.js                    // ESLint 规则
├─ .stylelintrc.js                 // Stylelint 规则
├─ .gitignore                      // Git 提交忽略配置
├─ tsconfig.json                   // TS 全局配置
├─ vite.config.ts                  // vite 配置
├─ index.html                      // 页面入口
└─ README.md                       // 项目文档
```
