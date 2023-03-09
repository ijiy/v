# node插件 【未分类混合】

## [merge](https://github.com/survivejs/webpack-merge)
* 合并对象, 合并后的路由不刷新页面

```bash
npm i webpack-merge -D
```

```js
import merge from 'webpack-merge';

export default {
	created () {
		this.$router.push({
			// ...?page=3
			query: merge(this.$route.query, { page: 1, size: 10 })
			// ...?page=1&size=10
		});
	}
}
```

## [moment](https://momentjs.com/docs)
* 时间格式化

```bash
npm i moment -S
```

```js
import moment from 'moment';

console.log(moment().format());
```

## node-sass 安装失败
```bash
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass

npm i node-sass
```

## 微信小程序初始化sdk
```bash
npm i wx-server-sdk@latest
```
