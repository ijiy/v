# Serverless 无服务器应用 (腾讯云)

## 安装
```bash
:: serverless 可简写成 sls
npm i -g serverless
```

## 创建目录
```bash
mkdir test
cd test
```

## 初始化 (腾讯版)
```bash
sls create -t tencent-nodejs --p mySls

cd mySls

npm i
```

## [授权](https://console.cloud.tencent.com/scf/index?rid=1)
* 前往访问管理

* 同意授权 (自动创建角色"SCF_QcsRole", 默认关联"QcloudAccessForScfRole")

* 避免混乱这里不通过控制台"新建"

## 二维码扫码登录
* 保存登录 新建 .env
	+ TENCENT_SECRET_ID=
	+ TENCENT_SECRET_KEY=

* 值分别为 .env_temp 的 tencent_secret_id, tencent_secret_key

## 部署云函数 (确保 cd mySls, 在 函数服务 中查看)
* `sls deploy`, 要配置 serverless.yml, 生成 ".serverless"目录

* `sls deploy -f 云函数名`, 指定部署云函数

* `sls studio`, 调试, 需要sls账号登录 sls login

* `sls deploy list functions`, 查看云函数列表; 默认环境 [-s] dev; 区域 [-r] ap-guangzhou

* `sls invoke -f 云函数名`, 调用已部署的云函数 (默认 dev 环境)

* `sls remove`, 移除云函数, 移除 serverless.yml 中的所有云函数; 当无法匹配云函数则停止继续删除

## 文献 🎨
* [SCF 腾讯云函数](https://cloud.tencent.com/document/product/583/33445)

* [中文网](https://www.serverless.com/cn)

* [腾讯版安装](https://serverlesscloud.cn/doc/providers/tencent/cli-reference/quick-start)

* [onekey示例](https://cloud.tencent.com/developer/article/1612098)

* [腾讯云部署](https://cloud.tencent.com/document/product/583/43336)

* [腾讯云存储桶](https://console.cloud.tencent.com/cos5/bucket)
