# 生成iOS通用链接 【URLScheme】

## 开启Associated Domains服务
* 个人中心 -> `Identifiers`
	+ 点击生成"AppId"对应的名称 `iosName`
	+ 确保"Capabilities"选择了"Associated Domains"
		- 若之前未选择, 选择后需要重新申请"开发描述文件"和"发布描述文件"

* 开通[前端网页托管](../example/web-host.md)

* "HBuilder X" -> 打开`aname-app/src/manifest.json` -> App模块配置 -> Share(分享)
	+ iOS平台通用链接 -> 自动生成 -> 下一步 -> 选择"默认域名" (后面需要切换正式域名)
		- 使用正式域名: 前端网页托管 -> 参数配置 -> 域名信息 -> 添加域名

* 前往[微信开放平台](https://open.weixin.qq.com)
	+ 登录并进入 管理中心 -> 移动应用 -> 对应的应用点击"查看"
	+ 基本信息 右边点击"修改" -> "保存, 下一步"
	+ 选择"iOS应用" -> 选择"iPhone"和"iPad" -> 输入"Universal Links" -> 提交
