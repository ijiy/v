# charles

* 下载[charles](https://www.charlesproxy.com/download)

## 查看 本机IP
* Help -> Local IP Address

## 添加允许域名
* Proxy -> SSL Proxying Settings

* Include > Location > Add 以下为允许所有域名
	+ Host: *
	+ Post: *

## PC端配置证书
* Help -> SSH Proxying -> Install Charles Root Certificate

* 安装证书 -> 下一步 -> 选择 将所有的证书都放入下列存储 -> 浏览 选择 受信任的根证书颁发机构

## 手机配置代理 (连接同一局域网的wifi)
* 服务器: 本机IP

* 端口: 8888

## 手机下载证书
* 手机浏览器输入并回车 chls.pro/ssl

## IOS安装证书
* 设置 -> 通用 -> 描述文件与设备管理 -> 选择"配置描述文件"并按步骤安装

* IOS -V >= 10
	+ 设置 -> 通用 -> 关于本机 -> 证书信任设置 -> 勾选对应的"针对根证书启用完全信任"

## 安卓安装证书 *.pem (以下为部分设备下载后无法通过点击文件来安装的方法)
* 方法1
	+ 用chrome浏览器下载自动安装

* 方法2
	+ 设置 -> 安全与隐私 -> 从存储设备安装 选择下载的pem文件

## 本地调试
* 右键文件 -> Map Local...

* Local path -> 选择或粘贴本地文件地址

## 激活
* 打开[Charles破解工具](https://www.zzzmode.com/mytools/charles)
	+ 输入 `RegisterName` -> 生成 -> "Registered Name", "License Key"

* charles -> Help -> Register
	+ 分别输入上面生成的"Registered Name", "License Key" -> Register
