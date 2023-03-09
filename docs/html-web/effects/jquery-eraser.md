# 刮刮卡 【jQuery】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		img {
			display: block;
			width: 100%;
		}
		div {
			width: 200px;
			height: 200px;
			background: red;
		}
	</style>
</head>
<body>
	<div>
		<img src="i/1.jpg" id="test_eraser">
	</div>

	<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
	<script src="../../assets/jquery.eraser.js"></script>
	<script>
		$('img').eraser({
			size: 10, // 橡皮擦直径, 越小擦拭进度越精准
			opacity: 1, // 擦拭力度 (0, 1], 默认1
			width: 0, // 刮刮图层大小, !1默认填充画布
			height: 0,
			completeRatio: .5, // 擦拭完成比例 (0, 1], 默认1
			completeFunction: function () { // 擦拭完成
				// $(test_eraser).eraser('clear'); // 需要用对象id
				$(test_eraser).eraser('reset');
			},
			progressFunction: function (e) { // 擦拭进度 (0 ,1)
				console.log(e);
			}
		});
	</script>
</body>
</html>
```
