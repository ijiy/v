# 表格勾选

```vue
<el-dialog
	:title="dialogTable.title"
	:visible.sync="dialogTable.show"
	width="1200px"
>
	<el-table
		ref="tables"
		:data="table.data"
		@selection-change="val => tableSelect(val)"
		row-key="id"
	>
		<el-table-column
			type="selection"
			width="54"
			reserve-selection
		>
		</el-table-column>
	</el-table>
</el-dialog>
```

```js
data() {
	return {
		selectData: [], // 表格勾选操作的数据
		selectLast: [], // 最终确认勾选的数据
		dialogTable: { // 弹窗
			title: 'x',
			show: false,
		},
	}
},
methods: {
	// 显示弹窗
	showTable() {
		this.selectData = _.cloneDeepWith(this.selectLast);
		this.dialogTable.show = true

		this.getTableData(1, () => {
			this.$refs.tables.selection.map((v1, i1) => {
				!this.selectData.map(v2 => v2.id).includes(v1.id) && this.$refs.tables.selection.splice(i1, 1);
			});
		});
	},

	// 勾选
	tableSelect(vl) {
		this.selectData = vl;
	},

	// 确认勾选
	submitSelect() {
		this.selectLast = _.cloneDeepWith(this.selectData);
	},

	// 请求表格数据
	getTableData(page = 1, callback = Function) {
		setTimeout(() => {
			table.data = [];
			callback();
		});
	},
}
```
