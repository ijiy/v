# 相关术语

## RFC
* Request For Documents, RFC’s

* 官方维护的最权威的文档

## SFC
* Single File Components, 单页面组件

## MVVM
* Model-View-ViewModel
	+ 模型 (Model, js data)
	+ 视图 (View, html + css)
	+ 模型和视图的双向映射 (viewModel)

* viewModel 的原理在于 Object.defineProperty, 初始化时将数据的原型上设置 `set`和`get`, 其之间互相赋值来达到双向绑定

## 微前端
* 通过独立发布功能的方式来共同构建现代化web应用

* 每个微应用之间状态隔离, 具备独立开发, 独立运行的能力

* 前后端可独立开发, 部署完成后主框架自动完成同步更新

## SaaS
* Software-as-a-Service, 软件即服务, 较多的是云产品服务
