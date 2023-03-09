# Element 基本排版

## 基本环境
* nodejs v16.16.0

* pnpm v7.14.0

## 创建项目
```bash
cd /d d:/Project

:: 以vite构建工具创建以vue为模板的项目目录
pnpm create vite element-layout --template vue

cd element-layout

pnpm add element-plus

```

## 快速开始
建议在 IDE 中编辑项目

* 修改 D:\Project\element-layout\src\main.js

```js
// 去掉
// import './style.css'

// 导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// createApp(App).mount('#app')
// 修改为
createApp(App).use(ElementPlus).mount('#app')
```

* 修改 D:\Project\element-layout\src\App.vue

```vue
<template>
	<el-container style="height: 100vh">
		<el-aside width="200px">
			<div
				style="height: 50px; background: #eee;"
				class="flex ac jc"
			>菜单</div>

			<el-menu
				:default-openeds="['1']"
				default-active="1-2"
				:collapse="isCollapse"
				unique-opened
				@select="menuSelect"
			>
				<el-sub-menu index="1">
					<template #title>
						菜单1
					</template>

					<el-menu-item index="1-1">菜单1-1</el-menu-item>
					<el-menu-item index="1-2">菜单1-2</el-menu-item>
				</el-sub-menu>

				<el-sub-menu index="2">
					<template #title>
						菜单2
					</template>

					<el-menu-item index="2-1">菜单2-1</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</el-aside>

		<el-container>
			<el-header class="flex ac jb">
				<el-radio-group v-model="isCollapse">
					<el-radio-button :label="true">最小</el-radio-button>
					<el-radio-button :label="false">还原</el-radio-button>
				</el-radio-group>

				<el-dropdown
					class="ac"
					trigger="click"
				>
					<el-button>下拉</el-button>

					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>下拉 a</el-dropdown-item>
							<el-dropdown-item>下拉 b</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</el-header>
			<el-main>路由页面内容</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
	import {ref} from 'vue'

	const isCollapse = ref(false)

	const menuSelect = evt => console.log(evt)
</script>

<style>
	.flex {
		display: flex;
	}
	.jb {
		justify-content: space-between;
	}
	.jc {
		justify-content: center;
	}
	.ac {
		align-items: center;
	}
</style>
```

## 运行
```bash
pnpm dev
```
