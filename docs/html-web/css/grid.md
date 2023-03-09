# CSS 网格布局 【grid】

> 布局方向, 可以同时针对横向和纵向

## 容器
* 行与块
```css
div {
	/* 容器作为块, 独占一行 */
	display: grid;
}

div {
	/* 容器可与其它行模块, 同行并存 */
	display: inline-grid;
}
```

* 按比例分配大小 关键词 `fr`
	+ `1fr` 1倍比例
	+ `2fr` 2倍比例

* 相同大小重复分配 关键词 `repeat`
	+ `repeat(3, 1fr)` 等同于 `1fr 1fr 1fr`

* 单元格大小自适应 `auto-fill`
	+ `repeat(auto-fill, 1fr)`

* 均分
```css
div {
	/* 均分3行 */
	grid-template-rows: repeat(3, 1fr);

	/* 均分2列 */
	grid-template-columns: repeat(2, 1fr);

	/* 均分3行2列 */
	grid-template: repeat(3, 1fr) / repeat(2, 1fr);
}
```

* 3列中间1个自适应宽度
```css
div {
	grid-template-columns: 100px auto 100px;
}
```

* 3列最后1个设置区间宽度
```css
div {
	grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
```

* 外边距
	+ 格式同 margin

```css
div {
	grid-gap: 20px 20px;
}
```

* 位置
	+ justify-items: 水平位置方式
	+ align-items: 垂直位置方式
	+ place-items: 垂直位置方式 水平位置方式
	+ 值: start 起始边缘, end 结束边缘, center 居中, stretch 拉伸

```css
div {
	/* 水平居中 */
	justify-items: center;

	/* 垂直居中 */
	align-items: center;

	/* 垂直居中 水平居中 */
	place-items: center center;
}
```
