# 微信小程序

## 使用
* 基于 `uni-app` 框架

* 使用 `HBuilderX`, 或 `cli` 工程

## HBuilderX工程首次运行
* 会自动安装`uni-app (Vue 3) 编译` (安装完成需要停止并重新运行), `scss/sass编译`
	+ 可提前安装:
		- 工具 -> 插件安装 -> 安装新插件 -> `uni-app (vue3)`
		- [scss/sass编译][scss](https://ext.dcloud.net.cn/plugin?id=2046)

* 提示指定小程序开发工具安装目录
	+ 可提前指定:
		- 设置 (`Ctrl + Alt + ,`) -> 运行配置 -> 微信开发者工具路径

## [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
* 登录微信账号需为该项目的开发者或体验者, 否则无法调试, 发布, 以及获取openId

* 调试导入文件
	+ `unpackage\dist\dev\mp-weixin`

* 运行自动打开微信开发者工具 (可不用配置, 手动打开微信开发者工具)
	+ 微信开发者工具 => 设置 => 安全 => 打开**服务端口**

* 非安全域名调试 (真机调试依然需要安全域名, 否则无法请求成功)
	+ manifest.json => "urlCheck": false

## 微信公众号
* 开发 -> 开发管理 -> 开发设置 -> 服务器域名

1. request合法域名
	+ 必须`https`协议, 可以有端口号

2. uploadFile合法域名
	+ `uni.uploadFile` -> url 对应的链接地址

* 设置 -> 基本设置 -> 功能设置
	+ 基础库最低版本设置, `2.1.0`
		- 2.1.0, getMenuButtonBoundingClientRect, 右上角胶囊位置信息

## 实时日志
* 微信公众平台 => 开发 => 开发管理 => 运维中心 => 实时日志

* 记录用户 访问页面, 请求数据
	+ 每个日志都默认有 openId (用户的唯一id), TraceId (小程序启动的唯一id), 页面路径, 时间, 系统, 客户端, 基础库

* 通过 时间段, 微信号 等, 可以快速查询相应日志

* 日志保存7天, 一条日志限制 7k (不固定), 超过不显示

```js
const log = wx.getRealtimeLogManager();

log.info('');
log.warn('');
log.error('');
```

## 分享
* 包括 分享朋友, 分享朋友圈
	+ 标题, 分享页面, 图片
	+ 分享朋友圈, 固定分享页面为启动页

* 图片宽高比为 5:4

## 路由
```html
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))" open-type="switchTab"></navigator>
```
open-type: navigate, redirect, switchTab, reLaunch, navigateBack, exit

```js
// 页面接受参数, 参数为数值会变为字符串
onLoad(option) {
	// 跳转前, 关闭当前页面
	uni.navigateTo({
		url: 'test?id=1&name=uniapp'
	});

	// 跳转前, 关闭当前页面 (无法返回被关闭的页面, export 外定义的变量不会被重置)
	uni.redirectTo({
		url: '/url',
	});

	// 跳转前, 关闭所有页面
	uni.reLaunch({
		url: '/url',
	});

	// 跳转 tabBar 前, 关闭所有非 tabBar 的页面
	// 附加参数无效
	uni.switchTab({
		url: '/url',
	});

	// 返回
	uni.navigateBack();

	/**
	 * 参数中包含中文
	 * @example
		onLoad(query) {
			this.a = JSON.parse(decodeURIComponent(query.paramA));
			this.b = query.paramB;
		},
	 */
	uni.navigateTo({
		url: `/url?paramA=${encodeURIComponent(JSON.stringify(this.a))}&paramB=${this.b}`,
	});
}
```

## 缓存
```js
uni.setStorageSync('key', 'val');

const value = uni.getStorageSync('key');

uni.removeStorageSync('key');
```

## 生命周期 - App.vue (小程序常用)
* onLaunch, 初始化完成时触发 (全局只触发一次)

* onShow, 启动, 或 后台进入前台

* onHide, 前台进入后台

## 生命周期 - 页面 (按触发时机排序)
* created, 数据构建期间, 参数无效

* onLoad, 页面加载完成, 参数为传递的数据

* onShow, 页面显示 (相当于 mounted), 频繁触发: 包括返回显示, 切回前台

* onReady, 页面渲染完成, 只执行一次, 区别于 onShow

* onHide, 与 onShow 对立

* onUnload, 页面卸载, 当跳转其它页面前会触发

* onPullDownRefresh, 下拉 (下拉刷新)

* onReachBottom, 滚到页底 (获取更多数据)

* onTabItemTap, 点 tab {index: "tabItem的序号, 从0开始", pagePath, text}

* onShareAppMessage, 分享朋友

* onShareTimeline, 分享朋友圈

* onAddToFavorites, 收藏

* onPageScroll, 页面滚动

* onBackPress, 监听页面返回来源 (左上角按钮返回, 或 navigateBack)

## 生命周期 - 组件
* 同 vue 的生命周期, 如 created, mounted, destroyed

## HBuilderX配置
* Keybindings.json (工具 => 自定义快捷键)
	+ `ctrl+shift+f` 默认格式化代码, 改成全局搜索

```json
[
	{"key":"ctrl+shift+f","command":"workbench.action.findInFiles","override":true}
]
```

* Settings.json (设置 `ctrl+alt+,` => 源码视图)
	+ 分别为: 忽略文件显示, 忽略被搜索 (重启生效)

```json
{
	"files.exclude": ".*,node_modules,dist,unpackage,project.config.json",
	"dir.exclude" : ".*,node_modules,unpackage,dist,uni_modules,static,project.config.json,*.md"
}
```

## 注意
* 与 vue 差异
	+ `computed` 只能 `get`, `set`无效, 可以用 `watch` 代替
	+ :style="`width: ${x}px;`", _错误_
		- :style="{width: x + 'px'}" _正确_
	+ @click="() => x(y)" _错误_
		- @click="x(y)" _正确_ (不会被提前执行)

* 样式
	+ 不要滥用 `box-sizing`, `* 选择器`
	+ 不要随便设置 `z-index`
	+ flex, grid, 在很多地方可以替代浮动, 定位, 以达到更合理的布局
	+ flex 居中文字, 需要设置同 `font-size` 一样的 `line-height` 值
	+ 组件中不要用标签作为选择器, 页面中也尽量避免使用标签作为选择器
	+ button 宽高大于 `41px` 会比计算更大 `1px`, 且内容不会自动居中, 需要设置对应高度的行高
	+ button 为了不默认使用背景色, 不要设置 `type`

* 标签
	+ 所有标签都不能简写, 如 `<slot>`, 正确是 `<slot></slot>` 或 `<slot/>`
	+ `scroll-view` 要添加 `scroll-x="true"` 符合横向滚动规范, 便于样式自动化处理
	+ 部分 v-if 的判断要用 `true` or `false`, 不能只是 Boolean 类型, 否则被认作 `false`
	+ 常规元素统一使用 `view` 或 `text`, 不要用 `div`, `span` 等
	+ 作为没有阅读意义, 只是按钮, 图标 等, 应使用背景图, 而不是一味的 `image`
	+ 除了 App.vue, 其它页面至少存在一个 `template` 标签, 否则无法解析出 `wxml` 文件

* 组件
	+ 无法继承标签属性, 可以使用 `/deep/` 处理组件样式
	+ 自定义组件, 默认为`行标签`

* 工具 (HBuilderX)
	+ todo, fixme 无高亮
	+ 不会自动保存, `ctrl + s` 只会保存当前文件, 未保存的内容不会被搜索到
	+ 同一文件分屏处理 `ctrl + alt + 2` 要小心, 发生冲突, 不是 merge, 而是覆盖
	+ 默认转换 rpx, 实际开发用 px, 标签的 style 要用 rpx
		- Settings.json 编译器配置 关闭 `启用px转rpx/upx提示`

* 接口
	+ navigateTo 等路由跳转, url 地址前要有一个 `/`, 如 '/pages/index/index', 否则不跳转
	+ 非强调异步的接口, 避免使用 `then` 去获取回调
	+ `getSystemInfoSync` 要在页面的 `onLoad() {}` 或 `onReady() {}` 中获取正确的 `windowHeight`
	+ `boundingClientRect` 会多次触发回调, 应在回调中做唯一性处理; 而且多次的最终结果可能依然是个负值

* 性能优化
	+ 突破体积上限: 使用分包模式(包括静态资源), 加快启动速度
	+ 突破调试体积: 运行 -> 运行到小程序模拟器 -> 运行时是否压缩代码
	+ 调用地图等API, 非常消耗电量和内存, 对设备性能要求较高
		- 尽量避免频繁调用, 公用初始化, 缓存相关变量
	+ 非渲染数据, 不要定义在 `data() {}` 中, 可以放在 export 外
		- export 外的变量不随页面销毁, 要在 `onLoad() {}` 或 `onUnload() {}` 中重置

* 不要直接绝对定位页面顶部, 可以做吸顶效果, 避免下拉刷新时, 绝对定位的部分没下拉

* 一像素的边框, 依旧用"1px", 而不用"1rpx"或".01rem"等转换单位

* 分页模块高度应大于分页触发高度, 默认50

* scroll-view要有一个view包裹, 要设置高度或view设置高度

* 避免采用 mode="widthFix" 自适应图片高度

* 服务端图片资源要开启HTTP缓存机制

* 全部采用系统确认框, 不要自定义的, 以保持一致的确认框风格
	+ 位置授权必须先使用系统确认框询问
	+ 页面返回询问对话框, 也是系统确认框 (wx.enableAlertBeforeUnload)

* 没有体验者权限或开发者权限, 在开发工具中无法获取到`openId`

## 文献 🎨
* [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework)
