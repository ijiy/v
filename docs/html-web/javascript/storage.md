# JS 存储 【storage, cookie】

## [cookie](https://github.com/js-cookie/js-cookie)
```html
<script src="https://cdn.bootcss.com/js-cookie/latest/js.cookie.min.js"></script>
<script>
	Cookies.set('name', {
		foo: 'bar',
	}, {
		// 有效天数
		expires: 7,
		// 作用域
		domain: '希望共享的域名'
	});

	// '{"foo":"bar"}'
	Cookies.get('name');
	// {foo: 'bar'}
	Cookies.getJSON('name');

	Cookies.remove('name');
</script>
```

## localStorage/sessionStorage
```js
localStorage.setItem('xxx', 123);

localStorage.getItem('xxx');

localStorage.removeItem('xxx');
```

## 对比
* 容量
	+ cookie, 为`4k`
	+ localStorage/sessionStorage, 为`5M`

* 生存期
	+ cookie, 默认永久存于浏览器, 可指定
	+ localStorage, 永久存于浏览器
	+ sessionStorage, 随着浏览器关闭而被清除

* 作用域
	+ cookie, 默认作用于当前域名, 可配置作用域 (跨域), 请求中可被携带发送
	+ localStorage/sessionStorage, 作用于当前的域名且端口号相同
	+ sessionStorage, 要求在一个浏览器的标签页下
