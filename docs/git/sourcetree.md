# [SourceTree](https://www.sourcetreeapp.com)

## 安装
* 前提安装[git](https://git-scm.com/download/win)

* 前往下载[Sourcetree](https://www.sourcetreeapp.com)

* 安装 (没有安装路径选择) -> 登录 Bitbucket -> 勾选 `Mercurial` 和 `默认配置自动换行处理` (上传会将LF转化成CRLF)
	+ 下一步, 显示默认用户信息 (默认Bitbucket的登录邮箱和用户名), 可修改或之后修改 (工具 -> 选项 -> 一般 -> 默认用户信息)
	+ 下一步, 提示`加载SSH密钥`, 选择否

## 克隆
* HTTPS
	+ 访问需要登录远程, 常用连接方式, 仓库地址为`https://gitee.com/xx/yy.git`格式
	+ 粘贴仓库地址, 首次会弹出`Enter your credentials for 'https://gitee.com/'`
		+ Username: gitee绑定的邮箱地址
		+ Password: gitee的登录密码

* SSH
	+ 不用登录远程, 需要[公钥](#公钥)对接

## 公钥
* 工具 -> 创建或导入SSH密钥 -> Generate (鼠标在进度条里外不停滑动)

* 复制生成的密钥, 粘贴到
	+ Gitee -> 设置 -> SSH公钥

* Save private key (保存 .ppk, 保存合适的位置, 后面最好不要删除, 当密钥缓存失效/被360等清除, 可重新导入)
	+ 右键 任务栏 **Pageant** 图标 -> Add Key (选择保存的 .ppk)

* Gitee -> 设置 -> 邮箱管理
	+ 去掉勾选 **不公开我的邮箱地址** 或 选择提示中的邮箱地址

## 创建仓库 [Gitee](https://gitee.com)
* 新建仓库
	+ 仓库名称 可与项目名一样
	+ 勾选 **使用Readme文件初始化这个仓库** -> 创建

## 初始化本地环境
* 项目根目录中, 右键 -> Git Bash Here

```bash
git init

# 若使用默认用户信息, 则跳过该步骤
git config --global user.name "qp"
git config --global user.email "7555181+q--0@user.noreply.gitee.com"
```

## 添加项目
1. New tab -> Add

2. 浏览 -> 添加本地创建的git项目

3. 添加

## 关联远端
1. 设置 -> 远程仓库 -> 添加

2. 远端名称: 不填, 勾选 **默认远端**

3. URL/路径: 粘贴从 Gitee 复制的SSH地址

## 操作
1. 获取 (缓存密钥, 重启, 再次执行 获取)

2. 如果本地已有 README.md, 删除 Gitee 的 README.md

3. 拉取(勾选 master) -> 暂存所有 -> 输入描述并勾选立即推送 -> 提交

## 权限
* 确保 Sourcetree 的账号和 Gitee 仓库成员匹配, 否则:
	+ 删除 AppData\Local\Atlassian\SourceTree 的 `userhosts` 和 `passwd`
	+ 重启 Sourcetree
