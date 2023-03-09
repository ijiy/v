# globalProperties

> 一个用于注册能够被应用内所有组件实例访问到的全局属性的对象

## 注册方式1 全局
* main.js
```js
import { createSSRApp } from 'vue';

const app = createSSRApp(App);

export const createApp = () => ({ app });

app.config.globalProperties.$xy = '12';
```

## 注册方式2 插件
* xy.js
```js
export const xY1 = app => {
    app.config.globalProperties.$x1 = 'y1';
}

export const xY2 = app => {
    app.config.globalProperties.$x2 = 'y2';
}
```

* plugin.js
```js
import { xY1, xY2 } from './xy';

export default {
    install(Vue) {
        xY1(Vue);
        xY2(Vue);
    },
}
```

* main.js
```js
import { createSSRApp } from 'vue';
import plugin from './plugin';

export const createApp = () => ({
	app: createSSRApp(App).use(plugin),
});
```

## 使用方式
* 组合式
```js
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

console.log(proxy.$x1, proxy.$x2);
```

* 选项式
```js
export default {
	mounted() {
		console.log(this.$x1, this.$x2);
	},
}
```
