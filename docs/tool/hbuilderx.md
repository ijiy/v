# HBuilder X

## 设置 `ctrl+alt+,`
* 工具 -> 预设快捷键方案切换 -> `Sublime Text`

* 编辑器配置 -> 勾选`启用.editorconfig支持`

* 语言服务配置 -> 去掉勾选
	+ `启用px转rem提示`
	+ `启用px转rpx/upx提示`

* 源码视图

```json5
{
	// 忽略文件显示
	"files.exclude": ".*,node_modules,dist,unpackage,project.config.json",
	// 忽略被搜索
	"dir.exclude" : ".*,node_modules,unpackage,dist,uni_modules,static,project.config.json,*.md"
}
```

* 直接复制要去掉以上注释, 重启生效

## 工具 -> 自定义快捷键
```json5
[
	// 全局搜索
	{"key":"ctrl+shift+f","command":"workbench.action.findInFiles","override":true},
	// 打开所在的文件夹
	{"key":"ctrl+e","command":"revealFileInOS","override":true}
]
```

* 直接复制要去掉以上注释

* 全局替换操作
	+ `ctrl+shift+f` -> 点击右上角 `替换区` -> 输入要替换的字符 -> 点击 `全部替换`
