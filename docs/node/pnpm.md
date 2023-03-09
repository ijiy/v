:: pnpm

## 常用命令
```bash
:: 安装
npm i pnpm -g

:: 安装 package.json 的所有依赖. (i, 即 install 的别名)
pnpm i

:: 添加
pnpm add xx

:: 移除 (rm, 即 remove 的别名)
pnpm rm xx

:: 当前项目安装的所有依赖 (ls, 即 list 的别名)
pnpm ls
pnpm ls -g

:: 运行
pnpm run xx

:: 更新
npm i pnpm -g
:: 不要使用 pnpm 更新

:: 更新所有到最新版本 (latest)
pnpm up --latest

:: 更新xx到最新版本
pnpm up xx

:: 检查 (异常, 更新)
pnpm audit

:: 指定缓存路径
pnpm config set store-dir D:/Project/.pnpm-store
```

## 说明
* .npmrc, 所有配置命令, 保存在用户目录中 (C:\Users\Administrator\)
