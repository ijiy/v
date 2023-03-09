# swiper 【vue】

## 安装
```bash
npm i swiper
```

## 组件
```vue
<template>
	<swiper
		class="c-swiper"
		:style="`height: ${height}px`"
		:pagination="pagination"
		:initialSlide="initialSlide"
		@slideChange="slideChange"
	>
		<slot name="slide"></slot>
	</swiper>
</template>

<script>
	import SwiperCore, {
		Pagination,
	} from 'swiper';
	import {Swiper} from 'swiper/vue';

	import 'swiper/swiper.less';

	SwiperCore.use([
		Pagination,
	]);

	export default {
		name: 'c_swiper',
		components: {
			Swiper,
		},
		props: {
			height: {
				type: Number,
				default: 585,
			},
			pagination: {
				type: [Boolean, Object],
				default: {
					clickable: true,
				},
			},
			initialSlide: {
				type: Number,
				default: 0,
			}
		},
		setup(prop, context) {
			return {
				slideChange: swiper => context.emit('slideChange', swiper),
			};
		},
	};
</script>

<style scoped lang="less">
	.c-swiper {
		::v-deep(.swiper-pagination) {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			bottom: 30px;
			left: 0;
			width: 100%;
			height: 8px;
		}
		::v-deep(.swiper-pagination-bullet) {
			position: relative;
			z-index: 2;
			width: 15px;
			height: 8px;
			margin: 0 6px;
			background: rgba(0, 0, 0, 0.3);
			border-radius: 4px;
		}
		::v-deep(.swiper-pagination-bullet-active) {
			width: 56px;
		}
	}
</style>
```

## 使用
```vue
<template>
	<c-swiper
		:height="620"
		:initialSlide="test.active"
		@slideChange="slideChange"
		:pagination="false"
	>
		<template v-slot:slide>
			<swiper-slide></swiper-slide>
		</template>
	</c-swiper>

	<button @click="test.active = 1">slideTo(1)</button>
</template>

<script>
	import {
		reactive,
		watch,
	} from 'vue';
	import {SwiperSlide} from 'swiper/vue';

	export default {
		components: {
			SwiperSlide,
		},
		setup() {
			let newSwiper;
			const test.active = reactive({
				active: 0
			});

			const slideChange = swiper => {
				newSwiper = swiper;
				test.active = swiper.activeIndex;
			};

			watch(
				() => test.active,
				val => newSwiper.slideTo(val)
			);

			return {
				test,
				slideChange,
			};
		},
	};
</script>
```

## 文献 🎨
* https://swiperjs.com/vue
