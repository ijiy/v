# CSS 【IE等兼容】

## IE Hack
```css
{
	color: red\0;	/* 8, 9, 10, 11 */
	color: red\9;	/* 6, 7, 8, 9, 10 */
	color: red\9\0;	/* 9, 10 */
	*color: red;	/* 5.5, 6, 7 */
	+color: red;	/* 5.5, 6, 7 */
	*+color: red;	/* 5.5, 6, 7 */
	_color: red;	/* 5.5, 6 */
}
```

* 测试软件
	+ http://www.my-debugbar.com/wiki/IETester/HomePage
	+ http://www.debugbar.com/download.php

* 不同浏览器, img, video, 或有inline-block样式的元素下边存在不同高度空白
	+ `display: block;`
	+ 后面的元素浮动

* 行元素结束标签后有空白字符, 导致行元素右边存在不同宽度的空白
	+ 行元素浮动

* 父级没有明确高度, 子元素设置高度100%无效
	+ 如元素要满屏设置`height: 100%;` 则`body,html {height: 100%}`

* 子元素定位, 父级的overflow: hidden;失效
	+ 父级`position: relative;`

* 右浮元素放在文字后, 右浮元素换行
	+ 把文字写在浮动元素后面

* 图文并排垂直居中, 导致vertical-align和line-height不正常表现
	+ 都浮动, 然后对图片单独居中
	+ `<img src="1.png" alt="" align="absmiddle">`

## IE6 bug
* 行元素设置高度, 导致line-height失效, 其他行元素中的其中一个设置
	+ `_vertical-align: middle;`
	+ `_zoom: 1;`

	+ `display: inline-block;` IE6/7无效, IE7+, 有.2em的右外边距, Chrome等有.5em右外边距
	+ js/jQuery切换隐藏/显示的时会覆盖样式, 为兼容就用类名来替代hide()

```css
.parent {
	text-align: center;
	white-space: nowrap;
	font-size: 0;
}
.children {
	display: inline-block;
	*display: inline;
	*zoom: 1;

	font-size: 12px;
}
```

## IE6/7不支持display: table-cell;的垂直居中
```css
.table {
	display: table;
	height: 100px;
}
.tr {
	display: table-row;
}
.td {
	display: table-cell;
	*display: inline;
	*zoom: 1;
	*width: 100px;
	vertical-align: middle;
}
```

* 图片与父级结束标签存在空白字符, 图片下产生3px空白
	+ `display: block;`

* 图片添加链接, 图片产生2px紫色边框
	+ `border: none;`

* 贴着父级的浮动块设置水平与父级同向的外边距, 产生双倍外边距
	+ `display:inline;`

* 贴着父级底部的左浮元素, 设置margin-bottom无效
	+ 父级设 `padding-bottom`
	+ 最后一个浮动元素后添加空标签`{clear: both}`

* 浮动与非浮动元素并排, 之间产生3px空白
	+ `_margin-left: -3px;`
	+ `margin-left: 100px; _margin-left: 97px;`

* 浮动与浮动之间有注释, 其后无浮动, 且设置的宽度>父级宽度-3, 其内文本最后一个字符换行重复显示
	+ 删除注释
	+ `<!--[if !IE]>改用这种注释<![endif]-->`

* li设置width, height, zoom(或垂直边距仅IE7产生bug), 子元素设置浮动或display: block的li下产生4px空白
	+ li浮动
	+ li {vertical-align: middle/top/bottom}

* li没有设置width, height, zoom, 设置display: block的子行元素下产生19px空白
	+ 行元素设置宽或高
	+ 行元素 `zoom: 1;`

* 绝对定位的元素且父级设置relative, 其left受text样式影响, 如text-align等
	+ 父级设置宽高
	+ `zoom: 1;`

* 绝对或固定定位且设置top或bottom的元素, 默认left会受相邻元素的边距或文字的影响
	+ 设置 left

* 非w3c的合模型和margin: auto无法居中
	+ 文档声明 `<!DOCTYPE html>`

* 默认最小行高19px(受字体样式影响, 如宋体为16px, 微软雅黑为21px
	+ `overflow: hidden;`
	+ 设置 `line-height`

* 不支持border-radius
	+ `behavior: url(ie-css3.htc)`

* 不支持a标签外的伪类
	+ `body {behavior: url(csshover.htc)}`

* 不支持边框透明
```css
{
	background: #fff;
	border: 1px solid transparent;
	_border: #fff;
}
```

* 不支持opacity
```css
{
	opacity: .3;
	*background: #000;
	/* 需服务器环境 */
	*filter: alpha(opacity=30);
}
```

* 不支持png的Alpha透明
```html
<!--[if IE 6]>
	<script src="DD_belatedPNG.js"></script>
	<script>
		DD_belatedPNG.fix('.png') /* 导致no-repeat无效, 建议指定类名, 不要用* */,
	</script>
<![endif]-->
```

* 不支持after和before
```html
<script src="jquery-1.12.1.min.js"></script>
<script src="jquery.pseudo.js"></script>
<style>
	/* 只支持添加content内容, 无法改变伪元素的合模型 */
	div, div:after {
		width: 100px;
		background: #0F0;
		text-align: center;
		content: 'x';
		after: 'x';
	}
</style>
```

* 不支持cursor: pointer
	+ cursor: hand;

* 不支持子代选择器
	+ 用后代选择器

* 不支持min-height等
```css
{
	/* 不支持图片大小自适应, 可以用expression, 但影响性能 */
	height: auto!important;
	min-height: 20px;
	/* IE6无法获取important优先级, 从而覆盖前面height实现最小高度, IE6高度会被内容撑开, 从而实现自适应 */
	height: 20px;

	min-height: 20px;
	/* IE6实现最小高度 */
	_height: expression(this.scrollHeight<20?'20':'');

	/* 防止IE6高度被内容撑开和内容溢出 */
	overflow:hidden;
	max-height: 50px;
	/* IE6实现最大高度 */
	_height: expression(this.scrollHeight>50?'50':'');

	overflow: hidden;
	max-height: 50px;
	min-height: 20px;
	/* IE6实现最小和最大高度 */
	_height: expression(this.scrollHeight>50?'50':(this.scrollHeight<20?'20':'auto'));
}
```

* 不支持position: fixed;
```css
body {
	background: url();
	_backgournd: url(about: blank); // 没有上面的图片地址时, 用空白地址
	_background-attachment:fixed
}
.fixed {
	position: fixed;
	_position: absolute;
	top: 0;
	_top: expression(eval(document.documentElement.scrollTop));
	left: 0;
	width: 100%;
	height: 100%;
	_height: expression(eval(documentElement.clientHeight) + 'px');
}
```

* 子元素与父级宽度的奇偶性不同, 导致居中分配不均, IE6-8居中偏左
父级宽度为偶数时, 子元素可用定位居中

```html
<style>
	div {
		position: absolute;
		left: 50%;
		width: 99px;
		height: 100px;
		margin-left: -50px; /* 这里若要居中偏右, 可取-49px */
		background: #000;
	}
</style>
```

父级宽度为奇数时, IE6-8对50%取整方向不同, 导致与其他浏览器偏差1px
```html
<style>
	div {
		position: absolute;
		left: 50%;
		width: 100px;
		height: 100px;
		margin-left: -50px;
		background: #000;
	}
</style>
<!--[if lte IE 8]>
	<style>
		div {
			margin-left: -49px;
		}
	</style>
<![endif]-->
```
