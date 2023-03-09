# CSS 伪元素 【after, before】

> `::before`, 在元素内的前面加入内容;

> `::after`, 在元素内的后面加入内容;

* 常用应用, 添加文本内容, 作为模块, [排序](#排序)

* `::after`, `::before` 也可以用旧的语法 `:after`, `:before`

## 排序
```css
div::before {
	content: '¥';
}

/* 元素属性 */
div::before {
	content: attr(data-order);
}

/* 自动排序 */
div {
	/* 4, 5, 6... */
	counter-reset: order 3;
}
div p::before {
	counter-increment: order;
	content: counter(order)'.';
}
```

## 其它
```css
/* 匹配选中的文本, 只可改变文本背景或字体颜色 */
p::selection {
	background: #000;
	color: #fff;
}

/* 匹配文本第一行 */
p::first-line {
	font-weight: bold;
}

/* 匹配文本首字符 */
p::first-letter {
	color: #f00;
}

/* 改变placeholder颜色 */
input::-webkit-input-placeholder {
	color: #666;
}
```
