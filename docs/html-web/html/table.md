# HTML 表格 【table】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		body {
			margin: 0;
		}
		table {
			width: 200px;
			height: 200px;

			/*固定单元格的宽度*/
			table-layout: fixed;

			/*隐藏空的单元格的边框, 默认show*/
			empty-cells: hide;

			/*相邻单元格的边框合并为一个边框, 单元格的外边距失效*/
			/*border-collapse: collapse;*/

			/*单元格的外边距, 默认2px, 代替 cellspacing*/
			border-spacing: 5px;

			/*代替 border 和 bordercolor*/
			border: 1px dashed #ff0;

			/*代替 bgcolor="#F0F"*/
			background: #f0f;
		}
		th, td {
			/*单元格的内边距, 默认1px, 代替 celpadding*/
			padding: 5px;

			border: 1px dotted #0ff;
		}
		td {
			/*th默认居中*/
			text-align: center;
		}
	</style>
</head>
<body>
	<p>table, 用来处理表格数据, 布局上实现不确定内容的垂直居中和划分空间等</p>
	<p>div+css 相比 table, 遵循结构与样式分离; 有利于搜索引擎优化; 加载更快</p>

	<table>
		<caption>caption</caption>
		<thead>
			<tr>
				<th></th>
				<th>th</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td rowspan=2>rowspan, 向下跨行</td>
				<td>td</td>
			</tr>
			<tr>
				<td>td</td>
			</tr>
			<tr>
				<td colspan="2">colspan, 向右跨列</td>
			</tr>
		</tbody>
	</table>
</body>
</html>
```
