# HTML 基础 【未分类混合】

> HTML语言, 是一种描述性语言, 全名`HyperTextMarkupLanguage (超文本标记语言)`, 我们所使用的页面就是用html语言语言制作的

## HTML5
* HTML5是HTML的第五个版本, 也就是第5个版本的`描述网页的标准语言`

* HTML5的新特性
	+ 内容元素: section, article, footer, header, nav
	+ 媒介元素: video, audio
	+ 绘画元素: canvas
	+ 表单属性: date, time, calendar, url, email, search
	+ 离线存储

* 页面优化
	+ 文档声明, 标题前编码, 元信息, 注释, 代码缩进, 上线前代码压缩, 制作404页面, js与css的引入方式
	+ 标签的语义及合理嵌套, 避免空标签, 添加title和alt
	+ 命名规范, 样式顺序与缩写, 避免hack, 文本超出隐藏, 选择器, 添加小手
	+ 封装函数, 避免命名冲突, 变量存储
	+ 背景图合并, 合理使用预加载与懒加载, 图片设置大小

* 标签语义化的好处
	+ 可以符合设备本身的条件来渲染页面
	+ 搜索引擎的爬虫依赖于语义标记来确定上下文和关键词的权重
	+ 遵循一个语义化的标准便于团队开发

* 白帽优化
	+ a, 标题title, h1, h2, alt, title属性, img中出现关键词
	+ 用粗体或斜体突出关键词
	+ url中包含英文关键词
	+ 静态页面更容易被搜索引擎收入

* 页面重构
	+ 分析设计稿>切图>写结构与样式

* 标题图标
	+ <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

* 行与块
	+ inline box 正常从左到右布局, 不响应垂直外边距, 宽高等, box由内容撑开. 如span, a...
	+ block box  正常从上到下布局, 宽度默认填充容器, 可以设置宽高, 边框, 边距来控制box. 如div, article...

* 框架编程, 在页面中创建框架, 引入URL实现布局
	+ iframe, 内联框架
	+ frameset, 包括多个frame框架

* 布局模式
	+ block, 模块布局
	+ inline, 文本布局
	+ table, 表单数据
	+ position, 定位布局
	+ flex, 弹性布局

* a锚文本超链接
	+ 伪类及顺序
	+ link  visited  hover  active
		- 若hover在visited前, IE等浏览器链接访问过后hover消失
	+ 链接位置
		- name='锚'
		- href='路径 或#锚 或mailto: 邮箱地址'
	+ 打开方式
		- `target="_blank"`, 新窗口中打开
		- `_parent`, 父窗口中打开
		- `_self`, 当前窗口中打开
		- `_top`, 当前窗口中打开并替换其它窗口

```html
<a href="tel:111">拨打电话</a>
<a href="sms:111,222">发短信,多人</a>
<a href="mailto: 1.qq.com">1@qq.com</a>
<a href="" download="文件名">
```

* strong, em, mark, cite
	+ strong 强调重要性, 如警告或错误信息
	+ em 突出重点
	+ mark 吸引注意力, 提供参考
	+ cite 标记书名, 文章标题, 影视金曲名等

* title, alt
	+ alt 给图片命名, 提高搜索引擎对图片的判断, 在图片不能显示时显示
	+ title 给内容添加描述, 提高用户对内容的判断, title在鼠标停留时提示
