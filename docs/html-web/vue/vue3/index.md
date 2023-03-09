# vue3 【开发方式】

## 监听
* `watch`, 监听一个对象中的多个属性, 不要分开监听
```js
watch(
	() => [a.x, a.y],
	arr => {
		console.log(arr[0], arr[1]);
	},
	{
		immediate: true,
	},
);
```

## 常用方法
* `toRaw`, 转成非响应式对象

## 其它
* [生命周期](./life-cycle.md)

* [全局属性](./global-properties.md)
