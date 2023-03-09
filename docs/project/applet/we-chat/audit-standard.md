# 审核规范

## 获取当前的地理位置
* 规范原因: 使用`wx.getLocation`接口
	+ 使用第三方获取地理位置的插件, 如百度地图, 高德地图, 腾讯地图等

* 需要配置
	+ uni-app -> manifest.json -> mp-weixin -> `"requiredPrivateInfos" : [ "getLocation" ]`
	+ 微信公众平台 -> 开发 -> 开发管理 -> 接口设置 -> 获取当前的地理位置、速度 -> 开通

## 启动首屏规范
* 建议不要触发授权
	+ 非要授权, 授权失败也要可以下一步
