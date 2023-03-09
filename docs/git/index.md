# Git 【分布式版本控制系统】

## 部署
1. 前提
* 在代码托管平台或服务器已有项目仓库

* 已安装[git](https://git-scm.com/download/win)

* 在本地磁盘新建项目目录, 并在该目录下右键 -> `Git Bash Here`
	+ 确保该目录为空目录, 或根目录下的文件和远程仓库根目录下的文件不会冲突 (即没有相同的文件名)

---

2. 全局配置
* 全局仓库 声明用户
	+ 已全局声明, 并采用全局的声明用户, 跳过此步骤
	+ "当前仓库 声明用户" (非全局声明), 需要先[初始化本地git仓库](#初始化本地仓库)

```bash
git config --global user.name "你的昵称 (只用来显示, 随便昵称)"
git config --global user.email "你的邮箱 (用来显示, 随便邮箱, 可非正确邮箱; 组织/企业的仓库关联的邮箱, 修改后关联失效))"
```

### 初始化本地仓库
```bash
git init
```

* "当前仓库 声明用户"
	+ 采用全局的声明用户, 跳过此步骤

```bash
git config user.name "yyy"
git config user.email "xxx@qq.com"
```

* 添加远程仓库地址
```bash
git remote add origin https://gitee.com/qpv/test.git
```

* 拉取远程"master"分支 (主分支)
	+ 如果远程仓库为空的, 即没有任何内容, 跳过此步骤

```bash
git pull origin master
```

* 提交到本地暂存区
```bash
# 暂存所有新增和修改的文件
git add .
git commit -m "提交描述内容"
```

* 推送到远程"master"分支
```bash
git push origin master
```

## 分支
* 不要直接拉取非"master"的分支

* 所有分支都应该由"master"检出

* 新建一个分支, 并切换到该分支
	+ 建议取和远程分支相同的名称

```bash
git checkout -b develop
```

* 拉取远程"develop"分支
	+ 如果远程没有该分支, 跳过此步骤

```bash
git pull origin develop
```

* 推送到远程"develop"分支
	+ 如果远程仓库没有该分支, 将在远程仓库生成该分支
	+ 可不急于推送, 比如直到项目完成再推送; 或不推送, 只作为本地调试

```bash
git push origin develop
```

* 查看所有分支 (包括本地和远程的所有分支)
```bash
git branch -a
```

* 切换分支
	+ 确保所有更新操作都以提交或删除

```bash
git checkout master
```

* 删除一个本地分支
	+ 不能处于当前要删除的分支, 需先 切换分支 (如切换到master分支)

```bash
git branch -d develop
```

* 合并分支 (如当前处于"master", 要将"develop"合并入"master")
	+ 合并完后, 应该要 推送到远程"master"分支

```bash
git merge develop
```

## 查看git配置 (git config)
* 查看所有配置
	+ 包括全局配置和"仓库私有配置"
	+ 内置编译器查看, 不能编辑

```bash
git config --list
```

* 绑定编译器
	+ 编译器的路径不能有空格, 比如"D:/Sublime Text"错误的, 正确为"D:/SublimeText"

```bash
git config --global --add core.editor "D:/SublimeText/sublime_text.exe"

# 解绑编译器, 回退默认的编译器 (即内置的vim, 此操作不常用, 可通过编辑全局配置解绑或绑定其它编译器)
git config --global --unset-all core.editor
```

* 查看和编辑配置
当前仓库

```bash
git config -e
```

全局配置 (不包含"仓库私有配置")

```bash
git config -e --global
```

## 报错和解决
* Error: Could not fork child process: There are no available terminals (-1).
	+ 可能原因: 残留进程 (比如通过命令打开编译器, 此时会创建一个监听进程, 需要先关闭编译, 才会结束该监听进程, 如果直接关闭git命令符窗口, 该监听进程未结束, 就会残留)
	+ 解决方式: 重启电脑

* unsafe repository git config --global --add safe.directory
	+ 需要将项目目录设置为本地安全仓库

```bash
git config --global --add safe.directory D:/Project/qp-press
```

* fatal: unable to access 'https://gitee.com/xx/yy.git/': getaddrinfo() thread failed to start
	+ 原因: 防火墙未允许通过
	+ 解决方式: [防火墙](../tool/win.md#防火墙)


## 常用命令
```bash
# 推送, 但未提交 - 取消推送
git reset --hard origin/master

# 批量上传限制, 比如限制 150M (= 157286400b)
git config --global http.postBuffer 157286400

# 强制覆盖提交 (避免使用)
git push -f origin developer:developer

# 忽略已经加入版本控制的文件
git update-index --assume-unchanged vue.config.js

# 重新加入版本控制
git update-index --no-assume-unchanged vue.config.js

# 查看当前分支版本历史 (-2 最近2条记录)
git log -2 --stat

# 克隆 直接下载整个仓库
git clone https://gitee.com/qpv/test1.git
```

## 克隆远程仓库的一个文件 (如 dist)
```bash
# 1. 在 dist 所在目录 (不是 dist 内; 如果有 dist, 先删了), 右键 -> `Git Bash Here`
git init

# 2. 配置允许过滤
git config core.sparsecheckout true

# 3. 过滤目录
echo 'dist*' >> .git/info/sparse-checkout

# 4. 添加仓库
git remote add origin https://gitee.com/xx/xxx.git

# 5. 拉取仓库 (master分支)
git pull origin master
```
