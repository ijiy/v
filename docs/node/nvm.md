# nvm 【切换node版本】

* [下载](https://github.com/coreybutler/nvm-windows/releases)
	+ [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.exe)

* 卸载原有的 nodejs

* 安装 -> D:\nvm -> D:\nodes

* 开始 -> Windows 系统 -> 命令提示符 (如果系统账户不是`Administrator`, 需要执行`右键 -> 更多 -> 以管理员身份运行`, 且后续涉及 nvm 操作指令, 都要以管理员身份运行)

```bash
:: 设置node和npm的下载镜像
nvm node_mirror https://npm.taobao.org/mirrors/node/

nvm npm_mirror https://npm.taobao.org/mirrors/npm/

:: 查看可安装的版本 (ls 即 list)
nvm ls available

:: 安装指定版本
nvm install 14.16.0

:: 卸载指定版本, 或删除nvm安装目录下的对应文件夹
nvm uninstall 14.16.0

:: 使用指定版本
nvm use 14.16.0

:: 查看已安装的版本
nvm ls
```

## 注意
* Error extracting from Node archive: zip: not a valid zip file
	+ 示例问题: `nvm install 18.14.2` 出错, 可能因为下载中断导致
	+ 解决方式: 按错误提示手动下载`https://nodejs.org/dist/v18.14.2/node-v18.14.2-win-x64.zip`
		+ 解压到nvm安装目录: `D:\nvm\v18.14.2` (需要手动创建`v18.14.2`目录)
