# vite 【配置】

vite.config.ts

## 读取环境

```js
import {
	defineConfig,
	loadEnv,
} from 'vite';

if (loadEnv('development', process.cwd()).VITE_USER_NODE_ENV === 'development') {
	// 调试环境
}

export default defineConfig(({command, mode}) => {
	// 根据当前工作目录中的 `mode` 加载 .env 文件
	// mode: 'development', 'production'
	// 设置第三个参数为 '', 来加载所有环境变量, 而不管是否有 `VITE_` 前缀

	const env = loadEnv(mode, process.cwd(), '');

	return {
		/**
		 * 全局变量定义
		 *
		 * 构建时被静态替换
		 */
		define: {
			__APP_ENV__: env.APP_ENV,
		},
	};
});
```
