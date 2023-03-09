# [image-webpack-loader 【图片压缩】](https://github.com/tcoopman/image-webpack-loader)

* 依赖 webpack

* 压缩 png, jpg, gif, svg, webp

## 安装
```bash
cnpm i image-webpack-loader -D
```

* vue.config.js

```js
module.exports = {
	chainWebpack(config) {
		process.env.NODE_ENV === 'production' && config.module.rule('images')
			.use('imagemin-pngquant')
			.loader('image-webpack-loader')
			.options({
				optipng: {
					enabled: false,
				},
				gifsicle: {
					enabled: false,
				},
				webp: {
					enabled: false,
				},
				svgo: {
					enabled: false,
				},
			})
			.end();
	},
};
```

* npm安装, 无法拉取完整资源, 须使用cnpm
	+ `cnpm`弊端: 使用npm安装后可能会破坏`cnpm`安装的模块
	+ 所以后续安装新模块, 若`cnpm`安装的模块出现了问题, 需要卸载`image-webpack-loader`再重新安装

* init项目, 建议先移除 package.json -> "image-webpack-loader"
	+ 否则: 安装缓慢, 有错误提示, 需要卸载`图片压缩`再重新安装
	+ 初始化后, 重新安装
