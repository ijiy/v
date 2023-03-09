# [TortoiseGit](https://git-scm.com/downloads)

## 安装
* 先安装语言 Language Packs
	+ 安装过程除了选择路径, 其它都默认, 最后选择语言
	+ 首次启动向导
		- 配置用户信息 (后续更新: 设置 -> Git 用户信息)
		- 身份验证和凭证存储 -> "生成 PuTTY 密钥对" (后续更新: PuTTYgen)

## SSH连接需要"公钥"
* 点击 "Generate" 生成key (鼠标在进度条里外晃动)

* 复制生成的密钥, 提供给
	+ GitHub -> 设置 -> SSH Keys
	+ GitLab -> 设置 -> SSH Keys
	+ Gitee -> 设置 -> SSH公钥

* "Save Private Key" 保存密钥到本地 (不要删除, 当密钥缓存失效/被360等清除, 可重新导入)

## 克隆
* 右键 -> "Git 克隆..."
	+ URL: 远程复制的SSH地址
	+ "加载Putty密钥(K)" (选择 保存的本地密钥)
		- 确认

## 拉取
* 右键 -> TortoiseGit(T) -> 设置(S) -> 常规设置 -> 右键菜单 勾选"拉取(P)..."

* 右键 -> Git 拉取(P)...

## 提交
* 右键 -> Git 提交(C)->"master..."
