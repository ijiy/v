# 工程化

## 前言
一个项目持续发展, 难免会存在 代码, 结构, 业务, 逻辑, 新知识等的复杂交织, 且随着更多参与人员的交替参与, 一些列问题随之显露, 比如:

* 前沿技能. es6 统称的说法, 一代版本一代强, 但如果浏览器不支持就成了鸡肋, 甚至连箭头函数都是危险的

* 多人协作. js 是弱类型的, "千奇百怪"一样可以运行, 但这样"杂乱无章"的代码, 不是每个人可以接受的

* 可维护性. 越复杂的项目, 越容易造成资源冗余, 代码含义模糊

* 开发质量.

> 工程化的目的就是解决这些问题, 避免迷惑操作, 错误感染, 迂回开发, 从而提高开发效率, 开发质量.


## 工程化内容
* 持续集成
	+ 如 uni-app, 需要离线打包, 配置原生环境
	+ vite 自动打包

* 版本管理控制
	+ gitee
````
* 运行环境管理

* 自动化测试
	+ 单元测试

* 构建工具
	+ 如 vue/cli, vite, webpack, hbuilderx
	+ 实现: 流程自动化, UI组件化, 功能模块化, 资源静态化, 规范化

### 流程自动化
gulp 非理想的工程化构建工具, 但它阐述了 流程自动化 的意义:

> 将开发流程中让人痛苦或耗时的任务自动化, 从而减少你所浪费的时间, 创造更大价值
