# live2d 【二次元看板娘】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script src="https://l2dwidget.js.org/lib/L2Dwidget.min.js"></script>

	<script>
		L2Dwidget.on('*', name => {
			console.log(name);
		}).init({
			dialog: {
				enable: true, 							// 是否对话
				script: {
					'every idle 10s': '$hitokoto$', 	// 自动对话
					'tap body': '用户点击人物的身体',
					'tap face': '用户点击人物的脸'
				}
			}
		});
	</script>
</body>
</html>
```

## 文献 🎨
* [文档](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md)
