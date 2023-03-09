# jQuery 请求 【ajax】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form onsubmit="formSubmit(event)"></form>

	<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
	<script>
		$.ajaxSetup({ // 全局配置
			type: String, // 'GET', 'POST',
			timeout: Number,
		});

		$(document)
		.ajaxSuccess()
		.ajaxError()
		.ajaxComplete()
		.ajaxSend() // 发送前
		.ajaxStart()
		.ajaxStop();

		$.ajax().abort();

		function formSubmit(event) {
			event.preventDefault();

			$.ajax({
				url: String,
				data: {},
				// 'GET', 'POST'
				type: String,
				// 返回数据类型: html, jsonp...
				dataType: String,
				// 请求超时时间
				timeout: Number,
				// true, 是否异步
				async: Boolean,
				// false, 是否跨域
				crossDomain: Boolean,
				// false, 是否开启缓存
				cache: Boolean,
				// true, 是否触发全局ajax事件, 如 ajaxStart
				global: Boolean,
				// 编码
				contentType: String,
				// 指定当前ajax的关联对象
				context: Object,
				// false, 是否等一个请求完才允许继续请求
				ifModified: Boolean,
				// false, 是否采用传统序列化数据
				traditional: Boolean,

				success(res, status, xhr) {

				},
				error(xhr, status, text) {

				},
				complete(xhr, status) {

				},
				// 发送前
				beforeSend() {

				},
			})
		}
	</script>
</body>
</html>
```

## 文献 🎨
* [jQuery官网](https://www.jquery123.com)

* [jQuery中文网](https://www.jquery123.com)
