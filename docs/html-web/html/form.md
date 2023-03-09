# HTML 表单 【form】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form onsubmit="submitTest(event, this)">
		<input type="text" name="acc">
		<input type="password" name="pwd">
		<input type="submit">
	</form>

	<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
	<script>
		$.prototype.serializeObject = function() {
			var a = this.serializeArray(),
				b = {};

			for (var i = 0; i < a.length; i++) {
				b[a[i].name] = a[i].value;
			}

			return b;
		}

		function submitTest(event, _this) {
			event.preventDefault();

			// 收集数据, 解码jQuery编码的序列化字符串
			console.log(decodeURIComponent($(_this).serialize()));


			// 提交前可能要编辑数据, 转成对象
			console.log($(_this).serializeObject());
		}
	</script>
</body>
</html>
```
