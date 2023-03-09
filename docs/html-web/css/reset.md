# CSS 【默认样式】

```css
@charset "UTF-8";

section, article, aside, header, footer, nav, figure, figcaption, canvas, img {
	display: block;
}
body, dl, dd, p, form, input, ol, ul, h1, h2, h3, h4, h5, h6, pre, figure, fieldset {
	margin: 0;
}
ol, ul, td, input, fieldset {
	padding: 0;
}
h1, h2, h3, h4, h5, h6, strong, b, label, table {
	font-size: inherit;
}
button, input, textarea, select {
	font-size: inherit;
	border-radius: 0;
	color: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	border: none;
	outline: none;
}
input[type=button], input[type=submit], input[type=reset], input[type=file] {
	-webkit-appearance: none;
	appearance: none;
	cursor: pointer;
	line-height: initial;
}
input[type=checkbox], input[type=radio] {
	vertical-align: sub;
	border: none;
}
input[type=color]::-webkit-color-swatch-wrapper {
	padding: 0;
}
table {
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
}
em, i {
	font-style: normal;
	font-size: inherit;
}
pre {
	white-space: pre-wrap;
}
dialog, img {
	border: none;
}
a, img {
	-webkit-touch-callout: none; /*禁止长按响应系统菜单*/
}
img {
	width: 100%;

	-webkit-user-drag: none; /*禁止拖动*/
}
ul {
	list-style: none;
}
a {
	text-decoration: none;
	color: inherit;
}
a {
	cursor: pointer;

	touch-action: manipulation; /*去除300ms点击响应延迟*/
	-webkit-tap-highlight-color: transparent; /*去除模块点击高亮*/
}
mark {
	/*有默认 background*/
	color: inherit;
}
body {
	line-height: 1;
	font-family: "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;

	-webkit-font-smoothing: antialiased; /*抗锯齿*/
	-moz-osx-font-smoothing: grayscale;
}

/*浮动与清浮动*/
.fl {
	float: left;
}
.fr {
	float: right;
}
.clearfix {
	*zoom: 1;
}
.clearfix:after {
	display: block;
	content: '\200B';
	height: 0;
	clear: both;
}

/*单行超出省略*/
.elps {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 1.3;
}
/*双行超出省略 -webkit-box-orient: vertical; 要写在标签的style里*/
.clamp {
	overflow: hidden;
	display: -webkit-box;
	white-space: initial;
	word-break: break-all;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-height: 1.3;
}

/*常用的 flex*/
.flex {
	display: flex;
	box-sizing: border-box;
}
.iflex {
	display: inline-flex;
}
.dc {
	flex-direction: column;
}
.fw {
	flex-wrap: wrap;
}

.jc {
	justify-content: center;
}
.je {
	justify-content: flex-end;
}
.jb {
	justify-content: space-between;
}
.ja {
	justify-content: space-around;
}
.fe {
	align-self: flex-end;
}

.ac {
	align-items: center;
}
.ae {
	align-items: flex-end;
}

.fg {
	flex-grow: 1;
}
.fn {
	flex: none;
}
```
