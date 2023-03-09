# CSS 【未分类混合】

> Cascading Style Sheets(层叠样式表). 用来控制网页布局, 颜色, 效果等

## 定位 `position`
* 脱离文档流的定位应同时指定横纵值, 避免在部分设备上渲染异常

* 相对定位(relative), 相对自身位置定位, 自身位置依赖存在

* 绝对定位(absolute), 相对外面除static属性外的容器定位, 脱离文档流自身位置不存

## 字体
```css
/* 简写, 不建议 */
{
	/* 缩写必须有 size 和 family */
	font: italic small-caps bold 12px/26px Arial;
}

{
	font-size: 12px;
	font-family: "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
}
```

* 用Unicode编码写字体避免文件编码(UTF-8等)不匹配而产生乱码
	+ `font-family: \5FAE\8F6F\96C5\9ED1;`, 微软雅黑 (`\5B8B\4F53`, 宋体, [参考](http://code.ciaoca.com/style/cssfont2unicode))

## 背景
```css
/* 简写, 不建议 */
{
	/*
	 * 分别对应
		background-color
		background-image
		background-repeat
		background-attachment
		background-position
	 * background-size 参与缩写在部分设备不兼容, 需单独处理
	 */
	background: #000 url(1.png) repeat fixed left top;
	background-size: contain;
}
```

## 强制换行
```css
{
	word-break: break-all;
}
```

## 阻止换行
```css
{
	word-break: keep-all;
}
```

## 隐藏
隐藏元素, 无法点击

```css
{
	/* 不占空间, 子元素无法显示, 显示产生回流 */
	display: none;
}
```

```css
{
	/* 占空间, 子元素可以通过 visible 显示, 显示不产生回流 */
	visibility: hidden;
}
```

```css
{
	/* 占空间, 显示不产生回流, 效果同 visibility, 不过可做 opacity 渐变处理 */
	opacity: 0;
	pointer-events: none;
}
```

## 单位
* `px`, 相对设备分辨率, 基本单位

* `em`, 相对父元素, 常用于字体

* `rem`, 相对根元素, 常用于移动端
	+ 在安卓上圆变椭圆, 由于横纵不同小数点换算导致的
		+ 可以结合媒体查询, 根据不同分辨率设置 `px` 大小

## 属性顺序
* 位置(display, opacity, position, z-index, float)

* 大小(width, height, padding, margin)

* 文本(line-height, font, color)

* 背景(background, border)

* 其他(animation, transform)

## 浏览器内核
* WebKit
	+ css前缀 `-webkit`
	+ 主要浏览器: Safari, Opera

* Blink
	+ css前缀 `-webkit`
	+ 主要浏览器: Chrome

* Trident
	+ css前缀 `-ms`
	+ 主要浏览器: IE

* Gecko
	+ css前缀 `-moz`
	+ 主要浏览器: Firefox

## 引入样式
* 标签中写入样式
	+ 优先级最高, 适用动态改变样式

```html
<div style="top: 0;"></div>
```

* head 中插入 link
	+ 结构与样式分类, 便于维护管理

```html
<link rel="stylesheet" href="xx.css">
```

* head 中插入 style
```html
<style>
	div {
		width: 0;
	}
</style>
```

* body 中插入 style
	+ 快速渲染页面, 适用存在优先展示的模块, 如加载动画
	+ 会污染全局

```html
<body>
	<style>
		div {
			width: 0;
		}
	</style>
	<div></div>
</body>
```

* link 对比 `@import url("xx.css");`
	+ link 随页面加载引用; 兼容性更好
	+ import 页面加载后加载引用; 可在css中继续引用 (在@charset后, 其它css规则前引入)

## 异常解决
* 容器设置超出隐藏和圆角, img等元素依然溢出
	+ 容器设置 transform: translateZ(1px); 值要高于内容层级
	+ img本身设置 超出隐藏和圆角

* IOS 11, 输入框失焦后, 相关input错位
	+ 输入框绑定 @blur="onblur"

```js
onblur () {
	window.scrollBy(0, 1);
	requestAnimationFrame(() => window.scrollBy(0, -1));
}
```

* input, select等文本元素, 聚焦会放大webview
	+ 默认最小16px字体, 不用转rem

* iOS不响应active
	+ `<body ontouchend=''>`

* 渐变不能用 linear-gradient(top, #fff, transparent); 会产生灰半透明效果
	+ 要用 linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
