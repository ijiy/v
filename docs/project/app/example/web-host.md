# 网页托管

## 前端网页托管
* 前往[uniCloud控制台](https://unicloud.dcloud.net.cn), 登录并完成实名认证
	+ 新建 阿里云服务空间 -> 详情 -> 前端网页托管 -> 开通
	+ 注意: 服务空间需要10分钟左右初始化, 也就是这期间还不能用

* 发布到托管网页
	+ src/manifest.json -> Web配置 -> 运行基础路径 -> `shop-starter`
	+ HBuilderX -> 发行 -> `网站-PC Web` -> 勾选`将编译后的资源部署到前端网页托管` -> 发行 (可能会失败, 稍后重试)
	+ 访问地址: 参数配置 -> 默认域名 + `/shop-starter/index.html`, 即托管网页
