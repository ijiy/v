# Webstorm

## 安装
1. 安装`2021.1`版本, 除了修改目录, 其它都直接下一步

2. 启动, 选择试用`Evaluate for free`, 点击`Evaluate`进入IDE
	+ 启动弹出报错 `java.util.concurrent.CompletionException: java.lang.IllegalStateException...`
	+ 解决方式: [防火墙](../tool/win.md#防火墙)

3. 将`ide-eval-resetter-2.1.13.zip`拖拽到IDE, 按提示重启

4. 每隔30天内, 执行 Help -> Eval Reset -> Reset, 以达到重新激活
	+ 如果超过30天, 启动后继续选择试用, 并执行上述`Reset`

## 配置
* 设置`Ctrl + Alt + S`
	+ 插件 -> 已安装 -> 取消所有勾选, 只保留`Markdown`, `EditorConfig`, `CSS`
	+ 插件 -> Marketplace -> 搜索并安装`Chinese (Simplified) Language Pack`

* 文件 -> 管理IDE设置
	+ 导入设置: [settings.zip](../assets/settings.zip)

* 帮助 -> 更改内存设置
	+ 最大堆大小: 2048

* 帮助 -> 编辑自定义VM选项
	+ `-Xms2048m`
	+ `-Xmx4096m`
	+ `-XX:ReservedCodeCacheSize=1024m`
