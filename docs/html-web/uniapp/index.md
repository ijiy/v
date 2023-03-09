# uniapp 【简介】

## nvue
* 只能使用 .class 或 组合选择器

* 很多css不能用, 或不能简写, 或不建议用, 不能使用百分比, 没有媒体查询

* view 的 display 默认 flex, 且 `flex-direction: column;`

* 自定义组件没办法通过 easycom 引入, 需要在页面的 components 中添加

* 确保 `*.nvue` 的 `<script setup lang="ts">` 要有 `setup`, 否则h5样式错乱, 二次进入不执行js

* nvue的web-view的h5页面不能运行plus
	+ 想要在h5中运行plus, 要改成vue页面

## vue2
* 只要是 .vue/.nvue 文件, 确保至少存在 `<template></template>`

* 不要在标签中做三元判断, 可能无法及时更新内容

* 组件没有 onShow, onHide 生命周期, 只能在页面唤起

* 在自定义组件标签上设置 class属性 无效

## vue3
* 自定义组件中要确保至少存在`<template/>`, 这样可以关闭警告

* 不要在 `<script>` 根下直接 await, 这样会阻止页面渲染, 导致白屏

* 相比vue2, 更合理的 promise 处理, 总得就是必须有catch捕获, 否则不会执行下一步

* 所有引入的vue或nvue文件, 都要有完整的后缀, 如 `./App.vue`

* 响应对象不要超过2层, 否则可能不会及时更新

* 短时间响应, 最终结果和响应前一样 (即最终结果没有变化), 则不会触发响应

* ::v-deep 当没有上一级 在app上不起作用

## 其它
* 状态栏高度
```vue
<view :style="{
	height: var(--status-bar-height)
}"></view>
```

* 获取状态栏高度
`uni.getSystemInfoSync().statusBarHeight`

* 默认使用 `rpx`; 1像素, 使用 `1px`

* `cancas` 要在 `onMounted` 中 createCanvasContext, 否则不会渲染, 组件中不用上下文做第二个参数

* `ref` 命名不能和组件名一样, 如 `<qp-abc ref="qpAbc"/>` 建议改成 `<qp-abc ref="ref_abc"/>`

* 没用到scss, style不要标记 `lang="scss"`, 因为这样会额外引入 uni.scss

* `movable-view`, 添加 `inertia`, 在app上会意外超出可视区

* 数组更新要先赋空值[], 再赋新值

* `template` 中有用到 `props` 的属性, 都要用 watch-immediate 监听

* root 不是1个, 作为组件 无法继承 class; 作为页面 获取链接参数会有警告提示

* `tabBar`页面始终在进程中, 切换页面没有 `onUnload` 的概念
	+ 谨慎 `watch`, 即使切换其它页面, 也会执行监听, 请求, 计算等
	+ 切换其它页面后, 计算的 `boundingClientRect` 是错误的 (比如 height 负数)

* 不要用 `xxx-loading` 命名组件, 会导致触发 uni.showLoading 的效果, 可以改成 `xxx-load`

* `picker`, `mode="date"`, `start="1990-01-01"`, 不能是"1990-1-1"

* `reLaunch` 后无法关闭 `subNVue`

* `restart` 后 `onNetworkStatusChange` 中的 `showToast` 会一直存在

* pages.json -> pages -> style -> app-plus -> "popGesture": "none", 在安卓上无效 (鸡肋的存在)

* `uni.$once` 要放在 onload 中, 建议放在 subNvue show 之后
```js
onload()

// 像这样, 返回再进入页面, 就无效了, 而且还会导致对应emit触发时报错
uni.$once()
```

* `uni.$once`, 虽然只是执行一次, 但方法还是存在的, 所以, 需要在 `onUnload` 中执行 `uni.$off`

* WKWebview, 资源跨域请求
	+ 等待开放 `allowFileAccessFromFileURLs`

## 离线配置
* app\libs, 基础配置
	+ uniapp-v8-release
	+ lib.5plus.base-release
	+ android-gif-drawable-release@1.2.23
	+ oaid_sdk_1.0.25

* debug
	+ debug-server-release.aar
	+ 需要 \app\src\main\assets\data\dcloud_control.xml, `<hbuilder>` 添加属性 `debug="true" syncDebug="true"`

## x5内核
* 云打包配置
	+ "app-plus" -> "modules" 添加 `"Webview-x5": {}`
	+ "app-plus" -> "distribute" -> "android" -> "abiFilters" 仅配置 `["armeabi-v7a"]`

* 离线打包
	+ \app\libs, 添加 `webview-x5-release.aar`, `weex_webview-x5-release.aar`
	+ \app\build.gradle -> android -> defaultConfig -> ndk 仅配置 `abiFilters 'armeabi-v7a'`

* 作用
	+ 仅适用于安卓的 vue 和 webview
	+ 可以使用 position: sticky; 实现吸顶效果
	+ 可以让安卓统一跟随系统字体
	+ 无法提交 Google Play

## 隐私政策
* 添加 src\androidPrivacy.json (存在即适用于云打包和离线打包)

## 重构项目
* 重命名文件
	+ aname-sdk (包名)
		- aname-sdk.iml
		- app -> app.iml
		- settings.gradle, 修改内容为 `include ':app'`

* \build.gradle -> defaultConfig
	+ applicationId 'aname.app'

* \src\main\res\values\strings.xml
	+ 修改 name="app_name" 的值 (手机上桌面显示的应用名称) (同步修改 manifest.json -> name)

* \src\main\assets\data\dcloud_control.xml
	+ 修改 `appid="__UNI__anameid"`

* \src\main\assets\apps\以`__UNI__anameid`命名的文件夹
	+ 将 `pnpm build` 的结果(dist\build\app) \dist\build\ 放在该目录下, 并重命名未 www

## manifest.json 部分配置 -> "app-plus"
```js
{
	"usingComponents": true,
	// nvue 的编译模式
	"nvueCompiler": "uni-app",
	// nvue 的样式编译模式
	"nvueStyleCompiler": "uni-app",
	// 编译器版本
	"compilerVersion": 3,
	// nvue 首页启动模式,
	"nvueLaunchMode": "fast",
	// 开屏动画
	"splashscreen": {
		"alwaysShowBeforeRender": false,
		"waiting": false,
		"autoclose": false,
		"delay": 0
	},
	// 分包优化
	"optimization": {
		"subPackages": true
	},
	// h5 和 as 版本不一提示紧急处理, 适用于调试, 上线需确保版本一致
	"compatible": {
		"ignoreVersion": true
	},
	//	iOS端软键盘上方横条去除方案
	"softinputNavBar": "none",
	// 使用的模块
	"modules": {
        "Share": {
	        "description": "分享, 打开小程序"
        },
		"Webview-x5": {
			"description": "x5内核, 仅安卓支持"
		},
		"VideoPlayer": {
			"description": "原生视频, hybrid不需要"
		},
		"Bluetooth": {
			"description": "经典蓝牙"
		}
    },
	// 云打包专用
	"distribute": {
		"android": {
			"permissions": [
                // 需要硬件 - 照相机, dcloud_properties.xml 中启用 <feature name="Camera"
                "<uses-feature android:name=\"android.hardware.camera\"/>",
                // 需要硬件 - 照相机 - 自动聚焦
                "<uses-feature android:name=\"android.hardware.camera.autofocus\"/>",
                // 权限 - 照相机
                "<uses-permission android:name=\"android.permission.CAMERA\"/>",
                // 权限 - 锁屏运行
                "<uses-permission android:name=\"android.permission.WAKE_LOCK\"/>",
				// 权限 - 振动
				"<uses-permission android:name=\"android.permission.VIBRATE\"/>"
            ],
			// 安卓CPU兼容 (打的包会更小)
			"abiFilters" : [ "armeabi-v7a", "arm64-v8a", "x86" ],
			// 当前支持版本号
			"targetSdkVersion": 32,
			// 最低支持版本号, 不能低于 21
			"minSdkVersion": 21,
			// 首次打开不显示 存储等权限
			"permissionExternalStorage": {
				"request": "none"
			},
			// 首次打开不显示 电话等权限
			"permissionPhoneState": {
				"request": "none"
			},
			// 插件自动配置权限
			"autoSdkPermissions": true
		}
	}
}
```

## page.json
* preloadRule, 只有微信有用
