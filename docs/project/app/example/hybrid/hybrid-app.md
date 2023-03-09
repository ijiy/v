# 离线混合开发 【APP端示例】

* [离线混合开发 【WEB端示例】](./hybrid-web.md)

## nvue页面示例
```vue
<template>
	<web-view
		ref="ref_web"
		:src="webSrc"
		style="flex: 1;"
		@on-post-message="onPostMessage"
	/>
</template>

<script setup>
	import {
		shallowRef,
	} from 'vue';
	import {
		onLoad,
		onUnload,
	} from '@dcloudio/uni-app';
	import {
		useStore,
	} from '@/store';

	const store = useStore();

	// ref webview
	const ref_web = shallowRef({});

	// 向web传递 加载好的本地资源路径
	const evalAssets = () => {
		ref_web.value.evalJs(`getAppData("assets", ${JSON.stringify(store.file.assetsPath)})`);
	};

	// web 是否初始化完毕
	let webReady;
	// 资源是否加载完毕
	let assetsReady;
	// 接收数据
	let detailData;

	// web 初始化完毕
	const webIsReady = () => {
		if (webReady) {
			evalAssets();
		} else {
			assetsReady = true;
		}
	};

	// 接收web的数据
	const onPostMessage = evt => {
		detailData = JSON.parse(evt.detail.data);

		switch (detailData.eType) {
			case 'goback':
				uni.navigateBack({
					delta: 1,
					animationType: 'fade-out',
				});
				break;
			case 'refresh':
				uni.$emit('web_refresh');
				break;
			case 'logs':
				uni.$emit('web_log', detailData.eData.map(item => {
					item.isWeb = true;

					return item;
				}));
				break;
			case 'ready':
				if (assetsReady) {
					evalAssets();
				} else {
					webReady = true;
				}
				break;
		}
	};

	// 最终跳转地址
	const webSrc = shallowRef('');
	// 未加载完资源的地址
	let wSrc = `/index.html?token=${store.userInfo.token}`;

	let subLoading;

	onLoad({
		// 本地调试地址或远程地址, 如 http://192.168.1.1:8081
		localDomain,
		// 打包环境: 'prod' 正式环境, 'test' 测试环境
		mode,
	} => {
		wSrc = localDomain
			? `${localDomain}${wSrc}`
			: `/html${wSrc}`;

		wSrc += `&mode=${mode}`;

		if ('判断资源加载完成') {
			webSrc.value = `${wSrc}&assets=${encodeURIComponent(store.file.assetsPath)}`;
		} else {
			webSrc.value = wSrc;

			// 通过 subNVues, 自定义加载界面
			subLoading = uni.getSubNVueById('sub_loading');

			subLoading.show('none');

			uni.$once('loading-complete', webIsReady);
		}
	});

	onUnload(() => {
		subLoading && uni.$off('loading-complete', webIsReady);
	});
</script>
```
