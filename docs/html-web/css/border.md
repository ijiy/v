# CSS 形状 [border]

## 边框
```css
div {
	border-width: 1px;
	border-style: solid;
	border-color: #000;
}
```

## 简写
```css
div {
	border: 1px solid #000;
}
```

## 四角
```css
div {
	border-left-width: 1px;
	border-left-style: solid;
	border-left-color: #000;
}
```

## 圆角
```css
div {
	border-radius: 100%;
	border-radius: 3px 3px 0 0;
	border-top-right-radius: 3px;
}
```

## 三角形
```css
div {
	width: 0;
	border: 100px solid #f0f;
	border-left-color: #f00;
	border-right-color: #00f;
	border-top-color: #0f0;
}
```

## 太极 [after,border]
::: details 示例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		div {
			position: relative;
			width: 190px;
			height: 380px;
			border-right: 190px solid #FFF;
			background: #000;
			border-radius: 100%;
			box-shadow: 0 0 1px #000;

			animation: x 10s linear infinite;
		}
		@keyframes x {
			100% {
				transform: rotateZ(360deg);
			}
		}
		div:after, div:before {
			position: absolute;
			right: -95px;
			content: '';
			width: 30px;
			height: 30px;
			border: 80px solid #000;
			border-radius: 100%;
			background: #FFF;
		}
		div:after {
			top: 0;
			background: #000;
			border-color: #FFF;
		}
		div:before {
			bottom: 0;
		}
	</style>
</head>
<body>
	<div></div>
</body>
</html>
```
:::
