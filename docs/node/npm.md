# npm

## 常用命令
```bash
:: 官方镜像
npm config set registry https://registry.npmjs.org

:: 淘宝镜像
npm config set registry https://registry.npm.taobao.org
:: 在 C 盘 -> 用户 中会多出 .npmrc 配置文件

:: 验证镜像
npm config get registry

:: 初始化
npm i

:: 添加
npm i vue
:: 添加到项目依赖

npm i pnpm -g
:: 添加到全局

npm i sass -D
:: 添加到开发依赖

:: 移除
npm uninstall vue

npm uninstall pnpm -g

:: 查看版本列表
npm view vue versions
:: version 则查看 @latest 版本

:: 查看可更新模块
npm outdated -g --depth=0

:: 查看全局安装的模块
npm list -g --depth=0
:: 去掉 -g, 查看当前目录

:: 更新
npm update

npm i vue

npm i -g pnpm

npm i npm@6.14.4 -g

:: 清除缓存
npm cache clean --force

:: 初始化 package.json
npm init
:: 可直接回车, 即取默认值或为空. -y 生成默认文件

:: 查看 npm 的安装路径 (node的安装路径)
npm config get prefix
```

## 发包
* [注册账号](https://www.npmjs.com)

```bash
cd 包

:: 登陆
npm login

Username: natashahqp
Password: 十位九数
Email: (this IS public) 807551004@qq.com
Enter one-time password from your authenticator app: 邮箱收到的验证码

:: 发布
npm publish

:: 删除
npm unpublish revert-echo --force
npm unpublish xxx@1.0.0
```

## 其它
* nodejs 被 nvm 托管时, 无法用npm自我更新, 可以用cnpm来更新
	+ `cnpm i -g npm`

* -S, 即 --save, 项目依赖 (dependencies), 缺省默认项, pnpm, tyarn, cnpm 也是如此

* -D, 即 --save-dev, 开发依赖 (devDependencies)

## 异常
* npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
	+ 麻烦, 意义不大, 只是为了去掉一条警告
	+ 修改 node.js 安装目录下的 npm, npm.cmd (若是用 npx 提示该问题, 则修改 npx.cmd 文件)
		+ `prefix -g` 改成 `prefix --location=global`
