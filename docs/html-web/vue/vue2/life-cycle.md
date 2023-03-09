# vue2 【生命周期】

## beforeCreate
vue实例化后, 数据/事件配置前

## created
数据/事件配置后, 渲染(render)前

## mounted
挂载后

```js
mounted () {
	this.$nextTick (() => {
		// 确保子组件都挂载
	});
}
```

## beforeUpdate
数据更新时, DOM改变前

## updated
数据更新时, DOM改变后

```js
updated () {
	this.$nextTick(() => {
		// 确保子组件都更新
	});
}
```

## beforeDestroy
实例销毁前
