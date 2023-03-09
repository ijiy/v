# 自有证书

> 表明开发者身份, 用于 创建AppKey和安卓打包

```bash
:: app-key 为空目录
cd /d D:\Project\aname-pro\aname-cer

:: 设置临时环境变量 (相当于 cd /d D:\Java\jdk-18\bin)
set PATH=%PATH%;"D:\Java\jdk-18\bin"

keytool -genkey -v -keyalg RSA -keysize 2048 -validity 36500 -alias qpjks -storetype JKS -keystore aname.jks
:: qpjks, 证书别名 (自定义, 记住: 首次打包配置需要)
:: aname.jks, 导出文件
:: 36500, 证书的有效期 100年

:: 输入密钥库口令: (不会显示, 实际已输入, 记住: 查看证书需要, 首次打包配置需要)
aaaaaa

:: 您的名字与姓氏是什么?
qp

:: 您的组织单位名称是什么?
xxx有限公司

:: 您的组织名称是什么?
xxx

:: 您所在的城市或区域名称是什么?
厦门市

:: 您所在的省/市/自治区名称是什么?
福建省

:: 该单位的双字母国家/地区代码是什么?
CN

:: ...是否正确?
y
:: 重复输入两次密钥库口令, 即生成密钥文件
:: 最后提示迁移证书, 忽略 (迁移证书后无法通过HBuilderX打包)

:: 查看证书
keytool -list -v -keystore aname.jks
:: 输入 密钥库口令: aaaaaa
:: 复制 (离线打包Key管理需要) SHA1: B4:1C:B2:67:96:94:8F:29:F0:C9:CB:8B:20:EE:48:32:0E:20:64:C9
```
