# vue 【简介】

## 关于
* 用于构建用户界面JS框架

* 单页应用

* 数据驱动 (DOM操作是异步的, 随JS状态变化)

## 开发方式
* 独立脚本
	+ 以一个单独 JS 文件的形式使用

* vue/cli (webpack + vue2)
	+ `选项式 API`
		- [vue2 开发方式](vue2/index.md)

* vue3
	+ `选项式 API`,
		- 同"vue2 开发方式"
	+ `组合式 API`
		- `Class API`, 不推荐使用, 是"vue3 stage 2"的的语言功能, 特点是非常依赖"ES装饰器"
		- `setup()`, 不推荐使用, 是"vue3 stage 3"的语言功能, 可以结合`选项式 API`使用
		- `<script setup>`, 是结合`vite`的产物, 推荐的[vue3 开发方式](vue3/index.md)

## 数据渲染
* 绑定数据
```vue
<view>{{ msg.join(',') }}</view>

<view>{{msg || '-'}}</view>

<view>{{msg ? msg : ''}}</view>
```

```vue
<view>
	前后会有一个空格
</view>

<view v-text="'前后不会有空格'"/>
```

* 绑定属性
```vue
<view :id="`id_${msg}`"></view>

<a :href="isxxx ? 'https:xxx' : 'javascript: void(0);'"></a>
```

* 动态属性
	+ "attr", 为字符串或null

```vue
<view :[attr]="msg"></view>
```

* 简写
	+ `:` 表示 `v-bind:`
	+ `@` 表示 `v-on:`
	+ `#` 表示 `v-slot`

* 样式
	+ 只能有一个 :class
	+ 样式名包含`-`要用`''`包裹

```vue
<view
	class="app"
	:class="newClass"
></view>

<view
	:class="{
		isClass: true
	}"
></view>

<view
	:class="[
		{
			isClass: true,
			'is-class': true
		},
		newClass
	]"
></view>
```

* 条件判断
```vue
<view v-if="!msg"></view>

<view v-else-if="msg === 1"></view>

<view v-else></view>
```

* 遍历
```vue
<view
	v-for="item in list"
	:key="item.id"
>
{{ item.msg }}
</view>
```

* 双向绑定数据
```vue
<select v-model="dataVal">
```

`v-model`绑定的对象, 不能作为自定义组件的props的属性

* 过滤首位空白字符
```vue
<input v-model.trim="dataVal">
```


## 事件
* 点击
```vue
<view @click="hellow($event)">
	$event即原生的event, 用于需要多个参数时
</view>

<view @click="hellow">
	默认携带$event参数
</view>

<view @click="hellow()">
	不带参数
</view>
```

## 监听
* `computed`, `watch`
	+ 参考 vue2/vue3开发 的监听方式

* 不要在回调中使用计时器等异步操作

## 获取DOM [ref]
* vue2.x
```vue
<script>
	export default {
		mounted() {
			this.$refs.ref_tab.$el.offsetHeight
		},
	}
</script>
```
* vue3.x
```vue
<template>
	<view ref="ref_tab"></view>
</template>

<script setup>
	import {
		shallowRef,
		onMounted,
	} from 'vue';

	const ref_tab = shallowRef({});

	onMounted(() => {
		console.log(ref_tab)
	});
</script>
```

## 深度渲染 [deep]
```scss
/*vue/cli3 vue2.x*/
/deep/ .class {
}

/*vue/cli4 vue2.x*/
::v-deep .class {
}

/*vue3.x*/
::v-deep(.class) {
}
```

## 插槽 [slot]
```vue
<el-input>
	<!-- vue2.x -->
	<el-button slot="append"></el-button>

	<!-- vue3.x -->
	<template v-slot:append>
		<el-button></el-button>
	</template>
</el-input>
```

## 表单 【form】
```vue
<!-- vue2.x -->
<el-form @submit.native.prevent="onSubmit">
	event.preventDefault()
</el-form>

<!-- vue3.x -->
<el-form @submit.prevent="onSubmit"></el-form>
```

## 路径别名
```vue
<style lang="scss" scoped>
	@import '@/assets/reset.scss';
</style>
```

```css
{
	background: url(~@/assets/logo.png);
}
```

## 注意
* 什么样的数据, 适合放在 `store` (`pinia`) 中
	+ 受 `watch` / `computed` 监听的数据
	+ 直接或间接的参与渲染的数据
