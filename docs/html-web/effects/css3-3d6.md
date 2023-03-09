# 六面体 [CSS3]

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		body, li {
			margin: 0;
		}
 
		ul {
			position:relative;
			width: 200px;
			height: 200px;
			padding: 0;
			margin: 200px auto 0;
			-webkit-transform-style: preserve-3d;
			-webkit-animation: t 10s infinite linear;
			-webkit-transform-origin: 50% 50% 100px;
		}
		li {
			position: absolute;
			list-style: none;
			width: 100%;
			height: 100%;
			background: royalblue;
		}
 
		li:nth-child(2) {
			-webkit-transform-origin: 0 100%;
			-webkit-transform: rotateY(-90deg);
			background: indigo;
		}
		li:nth-child(3) {
			-webkit-transform-origin: 100% 100%;
			-webkit-transform: rotateY(90deg);
			background: turquoise;
		}
		li:nth-child(4) {
			-webkit-transform: translateZ(200px);
			background: gold;
		}
		li:nth-child(5) {
			-webkit-transform-origin: 0 top;
			-webkit-transform: rotateX(90deg);
			background: darkorange;
		}
		li:last-child {
			-webkit-transform-origin: 0 bottom;
			-webkit-transform: rotateX(-90deg);
			background: purple;
		}
 
		@-webkit-keyframes t {
			100% {-webkit-transform: rotate3d(1,1,1, 360deg)}
		}
	</style>
</head>
<body>
	<ul>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</body>
</html>
```
