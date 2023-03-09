# Android Studio

## 设置`ctrl+alt+s`
* 不用汉化, 可在 webstorm 中打开对照

* Keymap -> Sublime Text
	+ 导入webstorm的键盘设置
	+ `Generate Signed Bundle / APK` -> `ctrl+alt+q`

* Plugins -> 取消勾选: (其它不要取消勾选, 尤其会弹出确认框的)
	+ Code Coverage for Java
	+ Git 相关
	+ Settings Respository
	+ TestNG
	+ Firebase 相关
	+ Google 相关
	+ Java Bytecode Decompiler 包括后面4个

* Editor -> General -> Editor Tabs
	+ 勾选 `Mark modified (*)`

## 注意
* build.gradle -> buildTypes, minifyEnabled 不要设置成true, 否则弹出UI模块缺失

* 启动 弹出 `Unable to access Android SDK add-on list`
	+ Cancel

* 启动 弹出 `Missing essential plugin...`, 误取消勾选有关联依赖的Plugins导致的
	+ 删除 `C:\Users\xxx\AppData\Roaming\Google`

* 如果 Android Studio 启动时没有安装 SDK, 或 SDK 的其它问题
	+ ctrl+alt+s -> Appearance & Behavior -> System Settings -> Android SDK -> Edit

* Gradle 更新失败 (Connection timed out: ...)
	+ \build.gradle (不是 \app\build.gradle)
		- classpath, 改回之前版本号

* Android 离线SDK, 更新
	+ 替换 app\libs 下的相关文件

## 设置
* Editor -> Inspections
	+ 去除勾选`Incompatible screenOrientation manifest value`, 解决 不建议设置固定方向 的警告
