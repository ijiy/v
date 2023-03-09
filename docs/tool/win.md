# Window系统相关

## 快捷键
* `Prt ScSysRq`, 截屏键 (简称: PrtScn), 会存到剪贴板, 可在聊天窗口中粘贴`Ctrl + V`
	+ `PrtScn`, 截取 桌面屏幕 (包括多显示器)
	+ `Win + PrtScn`, 除了`PrtScn`的能力, 还会保存到`C:\Users\Administrator\Pictures\Screenshots`
	+ `Alt + PrtScn`, 截取 当前激活窗口

* 其它快捷键
	+ `Win + E`, 文件资源管理器
	+ `Win + D`, 显示桌面
	+ `Win + L`, 锁定
	+ `Win + T`, 切换左下角任务栏(或左右方向键切换 或 `Win + 1~9`)
	+ `Win + B`, 右下角任务栏(左右方向键切换)
	+ `Win + I`, 设置 (win10)
	+ `Win + Tab`, 显示任务视图
	+ `Win + 方向键`, 紧贴屏幕边缘
	+ `Alt + Tab`, 窗口任务
	+ `Alt + F4`, 强制关闭
	+ `Alt + Space + C`, 强制关闭
	+ `Ctrl + W`, 关闭
	+ `Ctrl + Shift + N`, 创建文件夹
	+ `Shift + F10`, 相当于鼠标右键

* 应用快捷键
	+ `Win + R` -> `D:\WebStorm 2021.1\bin` -> 创建快捷方式`webstorm64.exe`, 并移到`桌面\ShortcutKey`
	+ 右键快捷方式 -> 属性 -> 快捷键: `Ctrl + Alt + W` (修改快捷方式路径, 快捷键失效, 需要删除快捷键并重新设置)

* `Win`键点击无效
	+ 长按`Fn`

## 系统信息
* 系统信息 (系统摘要, 组件, 软件环境等)
	+ `Win + R` -> `msinfo32`
	+ 显卡信息: 组件 -> 显示
	+ 硬盘信息: 组件 -> 存储 -> 硬盘
		- 媒体类型: 固定硬盘

* 激活信息
	+ `Win + R` -> `slmgr.vbs -dlv`

## 计划关机
`Win + R`

* 弹出提示1分钟后关机
	+ `shutdown -s -t 60`

* 任务栏提示计划的关闭已取消
	+ `shutdown -a`

## IP
`Win + R`

* 查看本地IP
	+ `cmd` -> `ipconfig`

* 测试网络连接
	+ `cmd` -> `ping 192.168.xxx.xxx`

* 连接局域网IP
	+ `\\192.168.xxx.xxx`
	+ 连接过程没有显示连接状态

* 连接远程桌面
	+ `mstsc`
	+ 控制面板\系统和安全\系统 -> 远程设置 勾选`仅允许运行...的计算机连接(更安全)(N)`

## 系统优化
* 禁用系统保护
	+ 控制面板\系统和安全\系统 -> 系统保护 -> 系统保护 -> 选中驱动器 -> 配置 -> `禁用系统保护` (或 缩小磁盘的最大使用量) -> `删除`

* 设置无分页文件
	+ 控制面板\系统和安全\系统 -> 高级系统设置 -> 高级 -> 性能 -> 设置 -> 高级 -> 更改 -> 去掉`自动管理所有驱动器的分页文件大小`的勾选 -> 选中驱动器 -> 点中`无分页文件`, 再点旁边的`设置`

* 不要开机密码
	+ `Win + R` -> `netplwiz`
	+ 取消勾选`要使用本计算机, 用户必须输入用户名和密码` -> 确定, 并确认自动登陆用户

## 多显示器
* 设置 -> 系统 (`Win + I`)

* 多显示器
	+ 选择 `扩展这些显示器`

* 重新排列这些显示器
	+ 笔记本显示器或台式机链接主板的显示, 默认标识为`1`; 扩展显示器的标识为`2`. 如果扩展显示器在左边, 那就将对应标识拖动到左边

* 设置为主显示器
	+ 点击选中想要成为"主显示器"的显示器对应的标识 -> 勾选`设置为主显示器`

## 搭建本地服务器
1. 控制面板\程序 -> 启用或关闭Windows功能 -> 勾选`internet信息服务`及所有子选项的复选框

2. 控制面板\系统和安全\Windows 防火墙\允许的应用 -> 更改设置 -> 勾选`万维网服务HTTP`右侧的两个复选框

3. 将文件放在`C:\inetpub\wwwroot\`目录下, 通过`http://localhost` 或 `http://本地IP/访问文件`

## IE浏览器
* 关闭IE浏览器
	+ 控制面板\程序 -> 启用或关闭Windows功能 -> 取消'Internet Explorer 11'对应的复选框

* 强制删除桌面IE图标
	+ `Win + R` -> `regedit`
	+ HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace
	+ 右键导出, 在导出的文件中查找`Internet Explorer`, 并记住其后{}里的编号
	+ 在`NameSpace`下拉文件夹中找到对应编号的文件夹, 并右键删除, 再刷新桌面

* IE11打不开
	+ `Win + R` -> `regedit`
	+ HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main
	+ 右键选择`高级`, 勾选`包括可从该对象的父项继承的权限`

## 宽带4线压法
* 金属片朝上, 从左到右对应 1 2 3 6 针孔, 分别插入 橙 -> 白橙 -> 绿 -> 白绿

## 浏览器 DevTools (F12)
* `Shift + Enter`, 换行

## Chrome
* 快捷键
	+ `Ctrl + T`, 新标签页 (当前页面打开)
	+ `Ctrl + N`, 新标签页 (新建页面打开)
	+ `Ctrl + H`, 历史记录
	+ `Ctrl + J`, 下载记录
	+ `F6`, 输入URL
	+ `F6 + F6`, 选择书签
	+ `Ctrl + D`, 保存书签
	+ `Ctrl + Shift + B`, 显示书签栏
	+ `Ctrl + Shift + O`, 书签记录
	+ `Ctrl + Shift + I`, 检查 (F12)
	+ `Ctrl + F`, 搜索 (或 `Ctrl + G` 或 `F3`)
	+ `Ctrl + U`, 查看源代码

* 跨域
	+ Chrome快捷方式 -> 属性 -> 目标("C:\...") 后面粘贴
```bash
"C:\..." --args --disable-web-security --user-data-dir=C:\MyChromeDevUserData
```

## 防火墙
* 局域网中打开防火墙, 很多应用可能未允许通过, 可通过`360流量防火墙`查看正在访问的网络进程, 点击查看对应的文件路径

* `防火墙和网络保护` -> 允许应用通过防火墙 -> 允许其他应用 -> 浏览 添加以下项
	+ WebStorm
		+ `D:\WebStorm 2021.1\bin\webstorm.exe`
		+ `D:\WebStorm 2021.1\bin\webstorm64.exe`
	+ Git
		+ `D:\Git\mingw64\libexec\git-core\git-remote-https.exe`
