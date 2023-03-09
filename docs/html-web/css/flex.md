# CSS 弹性布局 【flex】

> 布局方向, 要么针对纵向, 要么针对横向

## 容器
* 行与块
```css
div {
	/* 容器作为块, 独占一行 */
	display: flex;
}

div {
	/* 容器可与其它行模块, 同行并存 */
	display: inline-flex;
}
```

* 方向
	+ 默认横向

```css
div {
	/* 内容纵向布局 */
	flex-direction: column;
}
```

* 换行
	+ 默认不换行

```css
div {
	/* 内容超出容器自动换行 */
	flex-wrap: wrap;
}
```

* 位置
	+ 当纵向布局, 以下位置方式相反 (即 justify-content 变为垂直布局)

```css
div {
	/* 水平居中 */
	justify-content: center;

	/* 垂直居中 */
	align-items: center;
}
```

```css
div {
	/* 水平左右分开 */
	justify-content: space-between;

	/* 垂直居底 */
	align-items: flex-end;
}
```

## 单元模块
* 禁止弹性
```css
div {
	/* 尺寸固定, 不受周边单元模块的挤压 */
	flex: none;
}
```

* 自动伸缩
```css
div {
	/* 占据剩余空间 */
	flex: 1;
}
```
