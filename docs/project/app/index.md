# APP开发

## 环境
* node -v `19.7.0`
	+ 建议 [nvm](../../node/nvm.md), 避免其它项目不兼容问题

* pnpm -v `7.28.0`
	+ 建议 `npm config set registry https://registry.npm.taobao.org`

## 工具
* 惯用 IDE (Webstorm, VSCode)
	+ 主要编译工具, 习惯 HBuilderX 可忽略

* HBuilderX
	+ 迎合插件市场, 以及`uniCloud`开发

## 结构
```
aname-pro           // 应用名A
    ├─ aname-sdk    // Android 离线SDK
    ├─ aname-app    // cli工程 (不需手动创建目录, cli)
    ├─ aname-upp    // 工程副本 (不需手动创建目录, 用于cli工程升级)
    └─ aname-cer    // 证书
```

## 开始
* [搭建cli工程](./app-cli.md)

* [在IDE中打开](./app-ide.md), 针对 Webstorm 和 HBuilderX

* [苹果APP开发](./ios/index.md)

## 其它
* [自定义调试基座](./debug.md)

* [安卓离线打包](./pack-offline.md)
	+ [自有证书](./own-certificate.md)
	+ [云打包](./pack-cloud.md)

## 示例
* [离线混合开发](./example/hybrid/hybrid-app.md)

* [关联微信开放平台](./example/third-wx.md)

* [强制竖屏](./example/portrait.md)

* [升级权限](./example/upgrade.md)

* [网页托管](./example/web-host.md)

* [云函数](./example/uni-cloud.md)

* [APP蓝牙支持](./example/bluetooth.md)

* [APP视频支持](./example/video.md)
