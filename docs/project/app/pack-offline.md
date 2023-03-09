# 离线打包

## 环境
* 下载 [Java JRE](https://download.oracle.com/java/18/latest/jdk-18_windows-x64_bin.msi)
	+ 安装路径 `D:\Java\jdk-18`
	+ 用于 创建"自有证书"和"Android SDK"

* 下载 [Android Studio](https://developer.android.google.cn/studio/index.html)
	+ 勾选 `Android Virtual Device`
	+ 修改安装路径 `D:\Android\Android Studio`
	+ 首次启动前: D:\Android 新建文件夹 SDK
	+ 首次启动: 安装 "Android SDK"
		- Android SDK Location: `D:\Android\SDK`
		- Licenses -> 两个都要勾选 Accept -> Finish

## 配置
1. 创建[自有证书](own-certificate.md)

2. 获取 AppKey, 前往 [DCloud 开发者中心](https://dev.dcloud.net.cn)
	1. 创建应用 (HBuilderX工程会自动创建)
		+ 选择 `uni-app` -> 应用名称: 应用名A (生成 appid: `__UNI__anameid`)
	2. 点击创建的 `应用名称` -> 点击 `离线打包Key管理`
		+ Android 包名: aname.app
		+ Android 证书签名SHA1: 创建"自有证书"时复制的 SHA1
		+ iOS BundleId: aname.app
		+ 点击保存, 会在当前页显示 iOS和Android 的 AppKey
			- iOS: `9c503e3ab1b6115129901cae53503edf` (iOS离线打包配置需要)
			- Android: `d7b644da5a9a2a8052bbb145ad9b66af` (Android离线打包配置需要)
