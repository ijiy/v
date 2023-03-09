# 规范 web前端

## css
* 选择器不要直接取标签名
	+ 如 div, .app div

* 用有意义的类名替代后代选择器
	+ .animal-cat, 替代 .animal > .cat

* 多层关系的后代选择器不利于维护
	+ .a > .b > .c, 当 .a 或 .b 改变, .c 就作废了

* 不要用 id 来写样式

* id 本身也会作为全局变量

* "z-index" 值应该刚好, 不要随意, 如 9999

* 避免使用 "important"

* 尽量少用子代选择器, 避免直接用标签选择器, 不要用ID选择器

## html
* 采用语义化标签, 不要通篇 div

* 合理排版, 合理嵌套, 规范DOM树, 不要依赖定位

* 分离结构, 样式, 脚本

* 避免在标签中定义 style

## js
* 条件 \ 循环语句 保留大括号
```js
if () {
    return;
}
```

* 不要用"三元运算符"关联 多语句 \ 逻辑语句 \ 对象 \ 函数

## 空格
* 选择器, 函数名, 关键字, 逗号 \ 括号 \ 冒号(非伪类和伪元素) 后面有空格

* 运算符 左右有空格
	+ .txt {}
	+ color: rgba(0, 0, 0, .5);
	+ a += 1 / 1;
	+ const fn = () => {}
	+ if (a === b) {}

## 分号
* 非函数结束语句后

* 样式最后一个属性值也要有分号

## 换行
* 声明变量 \ 语句 (";") \ 函数之间

* 以大括号结束的语句 \ 函数之间 以及与其它语句之间

* 标签 \ 样式 \ 脚本 \ 不同模块之间
```js
switch () {
    case '': '';
        break;
    default: ''
}
```

* 标签多属性
```vue
<video
	src=""
	controls
></video>
```

## 命名
* 样式类名: 小写字母和中划线 `aa-bb`

* 变量: 遵循小驼峰 (lowerCamelCase), 以名词开头 `dogHead`

* 函数: 遵循小驼峰, 以动词开头 `getHead`
	+ 动词: `get` (获取), `set` (设置), `is` (判断是否等于), `has` (判断是否包含), `can` (判断是否允许), `load` (加载)

* 常量: 全大写 (UPPERCASE) `AABB`

* 类和构造函: 帕斯卡拼写法 (PascalCase) `Aa-bb`
	+ 类的私有属性: 下划线开头 + 小写字母 `_ab`

* 文件夹: 以中划线连接 `aa-bb`, 建议 2 ~ 4 个单词组成, 避免单个单词作为文件名
	+ `export`到处的是 `class`, 则文件名首字母大写 `Aa-bb`

* 明确含义的变量不要用`_`开头 (避免与 `__proto__` 等耦合)

* 同一页面不要包含一样的词, 比如 xx, xxy, 模糊检索 xx, 会把 xxy 囊括其列

* 标签属性不能大写, js无法识别; 标签用 a-b, js识别为 aB

## 性能
* 不要在数据驱动的项目中, 直接操作DOM的, 和引入DOM操作的库 (jQ, zepto)

* 不要在一个页面做两个同时依赖链接参数的分页

* promise都要有catch, 并有info或message内容

* 每个项目都有一个规范的唯一的中文命名, 正常依照需求项目名

* 避免在标签中定义样式 (`style`)

## vue
* 组件
	+ 命名: 应该倾向于完整单词而不是缩写; 始终是多个单词的; 始终是单词大写开头
	+ 基础组件名称: 以一个特定的前缀开头, 比如 [Base, App, V], `BaseIcon.vue`
	+ 只应该拥有单个活跃实例的组件应该以 `The` 前缀命名, 以示其唯一性, `TheSidebar.vue`
	+ 每个组件单独分成文件
	+ 以高阶的 (通常是一般化描述的) 单词开头, 以描述性的修饰词结尾, `SearchButtonClear.vue`

* 不要把 v-if 和 v-for 同时用在同一个元素上

* props
	+ 以小驼峰命名
	+ 定义应尽量详细, 包括类型限制

## w3c
* 文档声明; 语言编码; 标签和属性要小写; 标签属性值要有引号;

* 特殊符号用编码表示 (<, &lt; >, &gt;&, &amp;)

* 属性必须有值, 或重复本身

* 抛弃 font 标签

* 合理嵌套

* 用label描述input, 并有对应的for与id

* 定义好图片尺寸, 避免加载闪烁

* 使用小写文件名

## 好看点
* `0px`等, 直接用`0`
	+ `width: 0;`

* 用制表符, 或两个空格缩进

* 不要 制表符 \ 两个空格 混用

* css 统一用单引号或双引号; js 优先用单引号; html 属性值用双引号

* 不要 单 \ 双引号 混用

* 要有结构层次和对齐, 保持行块该有的层次感

## 编程范式
* 面向对象 (OOP + Class + IoC)

* 函数式 (FP + Function + Hooks)

* 两者不要混合使用, 推荐函数式编程