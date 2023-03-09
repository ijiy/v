# JS 基础 【未分类混合】

## 8种数据类型
* Null, 空类型

* Undefined, 未赋值类型

* Boolean, 布尔型

* [String, 字符串类型](string.md)

* [Number, 数值类型](number.md)

* [Object, 对象类型](object.md)

* Symbol, 独一无二类型

* BigInt, 任意长度的整型

## 栈内存和堆内存
* 栈内存
	+ 每个存储空间, 存储的是一个变量和变量值
	+ 变量值, 是一个[基础数据类型](#基础数据类型) 或 "引用地址"
	+ 引用地址, 指向堆内存中存储的数据或函数
	+ 若两个变量的"引用地址"相同 (a = b), 则修改一个变量的属性, 另一个变量也会受到影响
	+ JavaScript 允许直接访问栈内存的存储空间

* 堆内存
	+ 每个存储空间, 存储的是一个对象数据 (Object 即[引用数据类型](#引用数据类型)) 或 函数 (Function)
	+ JavaScript 不允许直接访问堆内存的存储空间

## 基础数据类型
* Null, Undefined, Boolean, String, Number, Symbol, BigInt

## 引用数据类型
* Object, 包括 Object, Array, Date, RegExp

::: details 引用"Object", 异常示例
```js
const a = {x: 1};
const b = a;

b.x = 2;

// jg: {x: 2}
a;
```
:::

::: details 引用"Object", 优化方案
```js
const a = {x: 1};
// const b = Object.assign({}, a);
// const b = JSON.parse(JSON.stringify(a));
const b = {...a};

b.x = 2;

// jg: {x: 1}
a;
```
:::

::: details 引用"Array", 异常示例
```js
const a = [1];
const b = a;

b[0] = 2;

// jg: [2]
a;
```
:::

::: details 引用"Array", 优化方案
```js
const a = [1];
// const b = a.concat();
// const b = Object.assign([], a);
const b = [...a];

b[0] = 2;

// jg: [1]
a;
```
:::

::: details 引用"Function", 异常示例
```js
const a = args => {
	console.log(args);
};
const b = a;

b.call('', 2);

// jg: 2
a();
```
:::

::: details 引用"Date", 异常示例
```js
const a = new Date;
const b = a;

b.setDate(2);

// jg: 2
a.getDate();
```
:::

## 编译机制
* 编译期创建作用域 (函数), 执行期遍历作用域并赋值

* 属性从当前域开始向外寻找作用空间, 如果找到就进行赋值, 否则继续寻找, 直到window下还找不到就创建空间

::: details 示例
```js
var a = 0;

(function () {
	// 1. a 在当前函数下找到了它的存储空间(var a)
	// 2. a 在当前函数下向上寻找值, 找不到
	// 3. 结果 undefined
	console.log(a);
	var a = 0;
})();

(function () {
	// 1. a 在当前的函数下找不到它的存储空间, 于是它就到外层函数下寻找, 并找到了(var a)
	// 2. a 在外层函数下向上寻找值, 并找到了(a = 0)
	// 3. 结果 0
	console.log(a);
})();

(function () {
	// 1. aa 在当前的函数下找不到它的存储空间, 于是它就到外层函数下寻找, 直到 window 下, 还找不到
	// 2. 结果 报错
	console.log(aa);
})();
```
:::

## 线程机制
* 浏览器内核是多线程的, 包括JS引擎线程, GUI渲染线程, 事件触发线程

* JS引擎是单线程执行任务, GUI渲染与JS引擎互斥, 当执行重绘或回流, JS就被挂起

* 事件触发会把计时器, 点击, Ajax等事件的回调函数排到任务队列中, 当JS线程的任务为空, 才会循环读取任务队列

::: details 示例
```js
for (var i = 0; i < 10; i++) {
	var j = i;

	requestAnimationFrame(function () {
		// 10次 10, 9
		console.log(i, j);
	});
}
```
:::

## 计时器
```js
setTimeout();
clearTimeout();

setInterval();
clearInterval();

requestAnimationFrame();
cancelAnimationFrame();
```

## script
```html
<script src=""/>
	文档停止解析; 加载并执行脚本; 继续解析

async
	异步加载, 脚本执行完后文档继续解析

defer
	异步加载, 文档解析完后执行脚本

<script type="text" id="tpl_header"> 不被渲染, 可作为模板使用 </script>
效果同
<template id="tpl_header">模板内容</template>
```

## cdn
> 将源站内容分发至全国所有的节点，提高用户访问网站的响应速度

> 可忽略协议, 如 `<script src="//cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>`

* BootCDN (加载快, 支持广, 版本库更新快)
	+ http://www.bootcdn.cn

* baiduCDN (加载快, 支持少, 版本库更新很慢, 压缩率高)
	+ http://developer.baidu.com/wiki/index.php?title=docs/cplat/libs

* cdn360 (加载快, 支持不多, 版本库更新一般)
	+ http://libs.useso.com/js.php

* cdnjs (加载慢, 支持内容广, 版本库更新很快, 压缩率高)
	+ https://cdnjs.com

* 微信 (加载快, 支持很少, 版本没怎么更新)
	+ http://qydev.weixin.qq.com/cdn/cdnjs.html

## 闭包
* 定义于一个内存空间里的函数
	+ 这个内存空间可以是一个函数 (如 匿名函数), 可以是一个对象 (如 window)

* 一个内存空间里, 调用的变量, 保留于内存; 不被调用的, 就被销毁
	+ 被调用闭包如果引用其外空间下的变量, 那该变量将同闭包一起保留于内存

```js
const obj = {
	a: 0,
	b: function () {
		return ++this.a;
	},
};

// jg: 1
console.log(obj.b());
// jg: 2
console.log(obj.b());
```

## 加密
```js
encodeURIComponent('加密URL');

decodeURIComponent('解码URL')
```

* base64加密
```js
// 加密
window.btoa(unescape(encodeURIComponent('加密内容')));

// 解密
decodeURIComponent(escape(window.atob('5Yqg5a+G5YaF5a65')));
```

## 冷门
* 选中文字时, 禁止响应点击事件
```js
// 响应的事件中, 判断是否有文字选中
if (getSelection().toString()) {
	return;
}

// 清除选中内容
getSelection().removeAllRanges();
```

* 三目运算
	+ `x = y ? 1 : 2;`
	+ 多级三目运算影响代码的可读性
	+ 包含语句的三目运算, 导致无法准确定位异常点和提交点

* `switch`
	+ `case` 只是语句并非代码块, `switch() {}` 才是代码块

* `void 0` 和 `undefined`
	+ `void 0`, 即 `void(0)`, `void` 表达式返回的永远是 `undefined`
	+ `undefined`, 可被赋值. 不过在现代浏览器中, `window.undefined` 返回的也永远是 `undefined`
	+ 在判断中使用 `void 0` 显得更简约, 常作为构建编译的结果; 实际开发 `undefined` 更容易让人理解
