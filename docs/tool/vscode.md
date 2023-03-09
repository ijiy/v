# VSCode

* 下载[Visual Studio Code](https://code.visualstudio.com/Download)
	+ 或下载[VSCodeUserSetup-x64-1.73.0](https://az764295.vo.msecnd.net/stable/8fa188b2b301d36553cbc9ce1b0a146ccb93351f/VSCodeUserSetup-x64-1.73.0.exe)

## 快捷键
* 编辑
	+ `ctrl + alt + s` 设置
	+ `ctrl + alt + k` 快捷键
	+ `ctrl + alt + t` 主题
	+ `ctrl + alt + a` 选择所有找到的查找匹配项
	+ `ctrl + alt + d` 光标撤销 (取消最新的一个匹配)
	+ `alt + d` 转到上一个突出显示的符号 (匹配符合的, 不会加入选择)
	+ `ctrl + d` 将下一个查找匹配项添加到选择 (匹配包含的, 会加入选择)
	+ `ctrl + alt + -` 折叠
	+ `ctrl + alt + =` 展开 (会展开当前区域内的所有折叠)
	+ `ctrl + 0 =` 全部展开
	+ `ctrl + shift + /` 块注释
	+ `ctrl + /` 行注释
	+ `ctrl + o` 文件: 打开文件夹 (会替换当前项目, 需"新建窗口")
	+ `ctrl + shift + n` 新建窗口
	+ `f2` 转到文件中的下一个问题
	+ `shift + f2` 转到文件中的上一个问题

* 通用
	+ `ctrl + s` 保存
	+ `ctrl + f` 查找
	+ `ctrl + h` 查找
	+ `ctrl + shift + f` 全局查找
	+ `ctrl + shift + h` 全局查找

* 界面
	+ `ctrl + w` 视图: 关闭编辑器
	+ `alt + w` 视图: 重现打开已关闭的编辑器 (打开最近关闭的页面)
	+ `alt + 1` 视图: 切换侧边栏可见性
	+ `alt + 4` 视图: 切换面板 (切换底部栏可见性)
	+ `alt + f4` 关闭窗口
	+ `ctrl + shift + e` 视图: 显示 资源管理器
	+ `ctrl + shift + g` 视图: 显示 源代码管理
	+ `ctrl + shift + f` 视图: 显示 搜索
	+ `ctrl + shift + x` 视图: 显示 扩展
	+ `ctrl + shift + 2` 视图: 拆分编辑器
	+ `alt + e` 速览定义
	+ `ctrl + shift + p` 显示所有命令
	+ `ctrl + tab` 视图: 快速打开组中上一个最近使用过的编辑器 (切换最近使用过的页面)
	+ `f3` 重命名符号
	+ `f5` 刷新 (其实会自动刷新文件变化)
	+ `f11` 视图: 切换全屏

* 大多数修改以贴近 sublime 和 webstorm

* 删除较多的折叠快捷键

* 删除较多的终端快捷键, 保留 查找, 复制, 粘贴

* 删除所有能删的"笔记本"标记的快捷键

* 删除所有"开发人员"快捷键

* 删除所有"搜索编辑器"

* 删除所有"测试"

* 取消视图缩放快捷键

* 格式化不按照配置文件, 删除了

## 插件
* `Chinese (Simplified)` 中文语言包, __首次运行会在右下角提示安装并重启生效__

* `Volar` vue3 setup
	+ 在"状态栏"中启用 `Vue TS Plugin`, 让 ts 可以处理 .vue 导入的类型信息s

* `EditorConfig` 编辑器配置

* `ENV` 环境变量

* `ESLint` 代码规范提示

* `Easy LESS` 样式预处理

* `Monokai Pro` 代码配色

* `TODO Highlight` 高亮TODO标记

## 个性化
* 查看 > 外观 显示或隐藏 状态栏

* 查看 > 外观 显示或隐藏 活动栏

* pnpm, 允许控制台使用
	+ 管理员身份运行 Windos PowerShell > `set-ExecutionPolicy RemoteSigned` 回车 > `A` 回车

* .env.local
	+ 状态栏 > 选择语言模式 > 选择`Environment Variables (env)`

* 文件管理 隐藏文件
	+ 设置 > 文本编辑器 > 文件, Exclude 添加模式
