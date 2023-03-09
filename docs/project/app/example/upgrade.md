# 应用升级 权限配置

## 云打包
* manifest.json -> app-plus -> distribute -> android -> permissions
	+ `"<uses-permission android:name=\"android.permission.INSTALL_PACKAGES\"/>"`
	+ `"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"`

## 安卓离线打包
* app -> src -> main -> AndroidManifest.xml
	+ `<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>`
