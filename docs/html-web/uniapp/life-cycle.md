# uniapp 【生命周期】

## onBackPress
监听页面返回

```js
import {
	onBackPress,
} from '@dcloudio/uni-app';

onBackPress((options: any) => {
	if (options.from === 'navigateBack') {
		// 自定义跳转不拦截
		return false;
	} else {
		// 拦截返回操作, 并执行自定义操作
		// ref_confirm.value.open();

		return true;
	}
});
```
