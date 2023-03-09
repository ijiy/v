# CSS3 【未分类混合】

## calc
```css
{
	/* +和-左右都要空格, 且都要有单位; /前和*后要有单位 */
	width: calc(100% + 20px);
	height: calc(100px / 20);
	padding-top: calc(50 * 20px);
}
```

## transition
* 逗号隔开不同属性的过度
```css
{
	transition: width .5s linear 100ms,
		height .5s linear 100ms;
}
```

* 简写属性
	+ `property`, 过度属性, all
	+ `duration`, 过度时间
	+ `timing-function`, 过度函数
	+ `delay`, 延迟时间

* `transition-timing-function`, 过度函数
	+ 线性函数 linear 匀速; ease 慢-快-慢; ease-in 加速; ease-out 减速; ease-in-out 慢>快>慢;
	+ 曲线函数 cubic-bezier(0, 0, 0, 1);
	+ 迈步函数 step-start | step-end | `steps(<integer>[, <step-position>]?)`
		- integer, 大于 0 的正整数
		- step-position: `jump-start`, `jump-end`, `jump-none` (integer > 1), `jump-both`, 'start', 'end'

## transform
```css
{
	/* 偏移 旋转 缩放 扭曲 */
	transform: translate(1px, 0) rotate(360deg, 0) scale(.5, .5) skew(1deg, 1deg);

	/*
		transform: translateX(1px) rotateY(360deg) scale(.5) skew(1deg);

	 * 3d偏移
		transform: translate3d(1px, 0, 0);

	 * 在父级添加可 修复部分设备图片溢出, 修复其它transform层级覆盖
		transform: translateZ(1px);
	*/


	/* 旋转中心 */
	transform-origin: 0 50%;

	/* 缩放, 会改变DOM */
	zoom: 1.5;
}
```

## animation
```css
{
	animation: a_id 10s linear 1s infinite alternate forwards;
}

@keyframes a_id {
	30% {
		/* 3s放大 */
		transform: scale(2);
	}
	70%, 90% {
		/* 4s向下, 2s停留 */
		transform: translate3d(0, 10px, 0) scale(2);
	}
	100% {
		/* 1s缩小 */
		transform: translate3d(0, 10px, 0) scale(1);
	}
}
```

* 简写属性
	+ `name`,
	+ `duration`, 过度时间
	+ `timing-function`, 过度函数
	+ `delay`, 延迟时间
	+ `iteration-count`, 播放次数, infinite
	+ `direction`, 运动方向, alternate
	+ `fill-mode`, 最后状态, forwards
	+ `play-state`, 开始/暂停, running;

## box-shadow
```css
{
	/*
		box-shadow: inset 0 0 1px #f00;
	*/

	/* 字 */
	text-shadow: 1px 2px 3px #f00;

	/* 多阴影 (多重边框) */
	height: 100px;
	width: 100px;
	margin: calc(50vh - 50px) auto;
	box-shadow: 0 0 0 10px #f00, 0 0 0 20px #0f0, 0 0 0 30px #00f;
}
```

* 简写属性
	+ inset, 内测阴影
	+ x
	+ y
	+ 模糊距离
	+ 阴影大小
	+ 阴影颜色

## gradient
```css
{
	/*
		background: linear-gradient(to left, red, blue);
	*/

	/* 部分iOS的transparent会半透明, 改用 rgba(0, 0, 0, 0) */
	background: linear-gradient(to left, red 20%, blue, rgba(0, 0, 0, 0) 40%);
}
```
* 径向渐变
```css
{
	background: radial-gradient(center, #f00, #00f);
}
```


## reflect
```css
{
	/* 倒影: 方向 偏移 [倒影渐变] (Firefox和IE不支持) */
	-webkit-box-reflect: below 0 -webkit-linear-gradient(to bottom, #000, transparent 20px);
}
```

## object-fit
```css
img {
	/* 拉伸居中 */
	object-fit: cover;
}
```

## box-sizing
```css
{
	/* 使padding和border不占空间, 默认值: content-box; */
	box-sizing: border-box;
}
```

## 文字两端对齐
```css
{
	text-align-last: justify;
}
```

## 其它
```css
{
	/* 转大大写; lowercase, 小写; capitalize, 首字母大写 */
	text-transform: uppercase;
}

/* 自定义字体 */
@font-face {
	font-family: 'myFont';
	src: url('font/myFont.eot');
	src: url('font/myFont.woff') format('woff'),
		 url('font/myFont.woff.ttf') format('truetype');

	font-style: normal;
	font-weight: normal;
}

/* 改变placeholder颜色 */
input::-webkit-input-placeholder {
	color: gray;
}

/* 文字渐变 */
/* 移动设备仅支持"display: block;"属性的元素. 如设置"display: flex;", 可能显示空白 */
{
	width: 100px;
	background: -webkit-linear-gradient(to left, red, blue);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* 文字镂空 */
{
	font-size: 2em;
	font-weight: bold;
	-webkit-text-stroke: 1px #000;
	color: transparent;
}
```

## 蒙版
```css
{
	height: 100px;
	background: url(a.jpg);
	background-size: 100% auto;

	/* 渐变做蒙版 */
	-webkit-mask: -webkit-linear-gradient(to left, #000, transparent 20%, transparent 80%, #000);

	/* 图片做蒙版 */
	-webkit-mask-image: url(1.png);

	/* 定位蒙版 */
	-webkit-mask-position: left top;

	/* 从包括border的位置开始定位 */
	-webkit-mask-origin: padding;

	/* 拉伸蒙版 */
	-webkit-mask-size: cover;

	/* 蒙版不重复 */
	-webkit-mask-repeat: no-repeat;

	/* 蒙版延伸到包括border的区域 */
	-webkit-mask-clip: padding;

	/* 多张蒙版的重叠顺序 */
	-webkit-mask-composite: xor;
}
```

## 滤镜
```css
{
	height: 100px;
	background: url(1.jpg);

	/* 变暗 (0, 1), 高亮 (1, ) */
	-webkit-filter: brightness(1);

	/*
	 * 模糊 (0, )
	 	-webkit-filter: blur(1px);

	 * 对比度小于原图 (0, 1), 对比度大于原图 (1, )
	 	-webkit-filter: contrast(2);

	 * 饱和度小于原图 (0, 1), 饱和度大于原图 (1, )
	 	-webkit-filter: saturate(2);

	 * 反色 (0, 1)
	 	-webkit-filter: invert(1);

	 * 叠加褐色 (0, 1)
	 	-webkit-filter: sepia(1);

	 * 叠加色环中指定颜色 (0deg, 360deg)
	 	-webkit-filter: hue-rotate(180deg);
	*/
}
```
