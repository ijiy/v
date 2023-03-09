# 理论篇.安全 【XSS, CSRF】

## XSS
* 跨站脚本攻击 (Cross Site Scripting, 避免与CSS混淆)

* 设置HttpOnly, 使js无法读取cookie

* 对提交内容进行验证, 防止注入敏感信息

* cookie和其它验证绑定, 避免cookie泄露的危险

## CSRF
* 跨站请求伪造 (Cross Site Request Forgery)

* 请求时附带 token

* 请求的header附带 token
