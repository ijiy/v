# 文字无缝滚动 【vue】

## 安装
```bash
npm i vue-seamless-scroll
```

## App.vue
```vue
<template>
	<div>
		<vue-seamless-scroll class="seamless-scroll" :data="list" :class-option="optionSeamless">
			<ul>
				<li v-for="item in list" v-text="item.name"></li>
			</ul>
		</vue-seamless-scroll>
	</div>
</template>

<style lang="sass">
	@import "assets/index.scss"
</style>

<script>
	import index from './assets/index';
	export default index;
</script>
```

## assets/index.js
```js
import Vue from 'vue';
import scroll from 'vue-seamless-scroll';

Vue.use(scroll);

export default {
	name: 'index',
	data () {
		return {
			list: [
				{
					name: 'a'
				},
				{
					name: 'b'
				},
				{
					name: 'c'
				}
			]
		}
	},
	computed: {
		optionSeamless () {
			return {
				step: 1, // 滚动步伐
				limitMoveNum: 2, // 默认 5, 执行滚动的数据长度
				hoverStop: true, // 鼠标悬停
				direction: 1, // 0 下; 1 上; 2 左; 3 右
				singleHeight: 0, // 单步停顿高度
				singleWidth: 0,
				waitTime: 1e3 // 单步停顿时间
			}
		}
	}
}
```

## assets/index.scss
```scss
.seamless-scroll {
	overflow: hidden;
	height: 200px;

	li {
		height: 100px;
		line-height: 100px;
	}
}
```

## 文献 🎨
* [文档](https://gitcode.net/mirrors/chenxuan0000/vue-seamless-scroll?utm_source=csdn_github_accelerator)
