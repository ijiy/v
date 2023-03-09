# vue router

## router/index.js
```js
const defTitle = document.title; // +

const routes = [
  // ..
]

const router = new VueRouter({
  // ..
})

// title 显示 routes[i].name 或显示默认的 defTitle
router.beforeEach((to, from, next) => {
	document.title = to.name ? to.name : defTitle;
	next();
});
```

## main.js
```js
import router from "./router";
new Vue({ router, ...})
```

## App.vue
```vue
<keep-alive>
	<router-view v-if="$route.meta.keepAlive"/>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"/>
```

## 跳转
```vue
<router-link to='./success'></router-link>
```

```js
this.$router.push({ path: '/success', query: { name: 'a' } });
```

## 返回
```js
this.$router.go(-1);
```

## router-view
* router/index.js
```js
import Vue from 'vue';
import Router from 'vue-router';

import Ab from '../view/Ab';
import Cd from '../view/Cd';

Vue.use(Router);

new Router({
	routes: [
		{
			path: '/container',
			component: Container,
			redirect: '/ab', // 默认加载子页
			children:[{
				path: '/ab',
				component: () => import('../view/Ab')
			}, {
				path: '/cd',
				component: () => import('../view/Cd')
			}]
		}
	]
});
```

* Container.vue
```js
<template>
	<el-container>
		<el-header></el-header>

		<el-container>
			<el-aside width="200px">
				<el-row class="aside-item">
					<router-link to="/ab">a</router-link>
				</el-row>
				<el-row class="aside-item">
					<router-link to="/cd">b</router-link>
				</el-row>
			</el-aside>

			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
</template>
```
