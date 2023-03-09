# [http-server 【本地服务器】](https://github.com/http-party/http-server)

## 安装
```bash
npm i http-server -g
```

## 使用
```bash
:: cd到项目根目录 (根目录下包含index.html)
http-server --port 8081
```

## 移动端访问
* 防火墙和网络保护 -> 关闭`专用网络`防火墙

* 连接相同局域网

## https
* 项目根目录 -> 右键 -> `Git Bash Here`
```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

```bash
http-server -S
```
