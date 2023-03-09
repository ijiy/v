# 强制竖屏 【portrait】

## 云打包
* manifest.json -> app-plus
	+ `"screenOrientation" : [ "portrait-primary" ]`

## 安卓离线打包
* app -> src -> main -> AndroidManifest.xml
	+ `<activity>` 修改 `android:screenOrientation="portrait"`
