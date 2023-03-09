# vue axios

## 安装
```bash
npm i axios
```

## 使用
```js
import axios from 'axios'

// https://test.x.com/u1
axios.get('/dist/u1', {
	params: {
		id: ''
	}
}).then(res => {

});

axios.all([axios.get('/u1'), axios.get('/u2')]).then(axios.spread(function (a, b) {
	// 多个请求同时完成后的回调
}));
```
