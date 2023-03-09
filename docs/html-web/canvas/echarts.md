# ECharts 【可视化图表库】

## 安装
```bash
npm i echarts
```

## 使用
* App.vue
```vue
<template>
	<div>
		<figure class="css-echarts" id="echarts_bar"></figure>

		<figure class="css-echarts" id="echarts_pie"></figure>

		<figure class="css-echarts" id="echarts_line"></figure>
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

* assets/index.scss
	+ 注意固定高度

```scss
.css-echarts {
	height: 300px;
	margin-bottom: 50px;
	background: #eee;
}
```

* assets/index.js
```js
// import * as echarts from 'echarts';

// 按需引入

// 主模块
import * as echarts from 'echarts/lib/echarts';

// 柱状图
import 'echarts/lib/chart/bar';

// 饼状图
import 'echarts/lib/chart/pie';

// 折线图
import 'echarts/lib/chart/line';

// 提示框
import 'echarts/lib/component/tooltip';

// 标题
import 'echarts/lib/component/title';

// 工具箱
import 'echarts/lib/component/toolbox';

export default {
	name: 'index',
	data () {
		return {
			bar_data: [
				['nameA', 11, 22, 33],
				['nameB', 44, 55],
				['nameC', 33, 11]
			],
			pie_data: [
				{name: 'a', value: 1},
				{name: 'b', value: 2},
				{name: 'c', value: 3},
				{name: 'd', value: 4}
			],
			line_data: [
				[0, 0],
				[1, 2],
				[2, 1],
				[3, 2]
			],
		};
	},
	mounted () {
		this.getEchartsBar();
		this.getEchartsPie();
		this.getEchartsLine();
	},
	methods: {
		getEchartsBar () {
			const echartsBar = echarts.init(echarts_bar);

			// 显示loading
			echartsBar.showLoading();

			echartsBar.setOption({
				title: {
					text: '柱状图',
					x: 'center',
				},
				tooltip: {},
				legend: {},
				yAxis: {},
				xAxis: {
					// 声明x轴为 类目轴
					type: 'category',
				},
				// "多轴数据"的展示数
				series: [
					{type: 'bar'},
					{type: 'bar'},
				],
				dataset: {
					// "多轴数据"对应提示名
					dimensions: [null, 'tipA', 'tipB', 'tipC'],
					// [类目名, 该类目对应"多轴数据"]
					source: this.bar_data,
				},
			});

			// 隐藏loading
			setTimeout(() => echartsBar.hideLoading(), 50);
		},
		getEchartsPie () {
			echarts.init(echarts_pie).setOption({
				title: {
					text: '饼状图',
				},
				// 南丁格尔图
				roseType: 'angle',
				series: [{
					type: 'pie',
					data: this.pie_data,
				}],
			});
		},
		getEchartsLine () {
			echarts.init(echarts_line).setOption({
				title: {
					text: '折线图',
				},
				tooltip: {},
				toolbox: {
					feature: {
						dataView: {},
						saveAsImage: {
							pixelRatio: 2,
						},
						restore: {},
					},
				},
				xAxis: {},
				yAxis: {},
				series: [{
					type: 'line',
					// 曲线
					smooth: true,
					data: this.line_data,
				}],
			});
		},
	},
}
```

## 文献 🎨
* [文档](https://echarts.apache.org/zh/tutorial.html)
