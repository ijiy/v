# vue 数据更新

> 初始数据配置时, data 要返回页面中用到的数据

> 当检测数据变化, 页面会在虚拟DOM重绘后响应

## 检测数据变化无法响应的情况
* 删除 对象属性(list, obj, obj.name)

* 新增 非根级别的对象属性(obj.name, 非obj/list同级别)

* 对象数组(list)的成员更新, 以及用非变异方法(push, splice等)改变成员

```vue
<template>
	<div class="app">
		<div v-for="item in list">{{item}}</div>

		<div v-if="obj">{{obj.name}}{{obj.age}}</div>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default {
		data () {
			return {
				list: [1, 2],
				obj: {
					name: 'a'
				}
			}
		},
		mounted () {
			// Vue.set(对象, 键名/索引值, 更新/新增的数据[缺省为删除对应属性/数组成员)
			Vue.set(this.list, 2, 3);

			// delete this.obj.name;
			Vue.set(this.obj, 'name');

			// this.obj.age = 1;
			Vue.set(this.obj, 'age', 1);

			// delete this.obj
			Vue.set(this, 'obj'); // 不能与 delete 同时使用

			// 赋予新值
			this.list = [1, 2, 3];
			this.obj = Object.assign({}, this.obj, { age: 1 });

			// 数组变异方法
			this.list.push(3);
		}
	}
</script>
```

## 更新 el-dialog 数据
```vue
<el-dialog
	v-if="show"
	:visible.sync="show"
>
</el-dialog>
```

## 强制刷新渲染
```js
this.$forceUpdate();
```
