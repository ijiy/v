# 在IDE中打开

## 打开 Webstorm
* 导入项目
	+ 文件 -> 打开 -> 选择项目根目录

* 设置 -> 语言和框架 -> JavaScript -> 代码质量工具 -> ESLint
	+ 勾选 `自动 ESLint 配置`
	+ 为文件运行 `src/**/*.{ts,vue,nvue} {ignore: **/*.d.ts}`
	
* 样式中根据实际警告提示, 添加 `swiper`, `uni-page-refresh` 等到html标签

## 打开 HBuilderX
* 导入项目
	+ 文件 -> 导入 -> 从本地目录导入
	
* 登录账号

* 打开 src/manifest.json
	+ 基础配置 -> uni-app应用标识 -> 重现获取 (查看: [开发者中心 -> 应用列表](https://dev.dcloud.net.cn/pages/app/list))

* 此时, 项目类型可能被当作`web`
	+ 右键项目 -> 重现识别项目类型 -> `UniApp_Vue` -> 重启

* 右键项目目录 -> 创建uniCloud云开发环境 -> 阿里云
	+ 右键uniCloud -> 关联云服务空间

## 应用图标
* 制作应用于桌面等图片 `icon.png` (1024 x 1024), 放在 `D:\Project\aname-pro\aname-app\unpackage\res`
	+ 可以做成透明背景, 但有效内容确保对角要贴边, 否则安装界面可能无法显示完整图片内容
	+ HBuilderX -> manifest.json -> App图标配置 -> 自动生成图标 -> 浏览`icon.png` -> 自动生成所有图标并替换

* 制作启动图 `splash.png` (1080 x 1882), 放在 `D:\Project\aname-pro\aname-app\unpackage\res`
	+ HBuilderX -> manifest.json -> App启动界面配置 -> App启动图片设置 -> 所有分辨率都浏览`splash.png`

## 注意
* 首次构建过程, 可能会编译出`.js`, `.map`文件, 先手动删除即可

* `nvue` 部分`ESLint`规范不支持
	+ 如`script-indent`缩进

* HBuilderX 运行错误: `Cannot start service: Host version "0.16.11" does not match binary version "0.15.18"`
	+ 原因: vite 版本不支持导致, 当前不支持 vite4
