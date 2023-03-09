# [filemanager-webpack-plugin 【zip压缩】](https://github.com/gregnb/filemanager-webpack-plugin)

* 依赖 webpack

## 安装
```bash
npm i filemanager-webpack-plugin -D
```

## vue.config.js
```js
// 可全局使用, 必须以"VUE_APP_"为前缀, 否则不会注入全局
//
process.env.VUE_APP_NAME = `${process.env.VUE_APP_MODE === 'prod' ? '正' : '测'}试-${new Date().toLocaleString().replace(/[/: ]/g, '-')}`;

module.exports = {
	configureWebpack(config) {
		process.env.NODE_ENV === 'production' && config.plugins.push(new (require('filemanager-webpack-plugin'))({
			events: {
				onEnd: {
					delete: ['./*.zip'],
					archive: [{
						source: './dist',
						// 路径中不能包含"空格", "冒号", 否则无法压缩
						destination: `./${process.env.VUE_APP_NAME}.zip`,
					}],
				},
			},
		}));
	},
};
```
