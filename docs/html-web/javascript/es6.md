# JS ES6 【块级作用域, 扩展运算符, 箭头函数】

## 关于
* ECMAScript, 浏览器脚本语言的标准

* JavaScript, 浏览器脚本语言

* ES6, 即 ECMAScript 6; 2015/06 发版, 又称 ES2015
	+ 是JavaScript语言的下一代标准
	+ 包括 ES2015 之后 ES 标准的制定 (ES2016...ES2020..., 或 ES7...ES11...)
	+ [涉及技术点概述图](https://img-blog.csdnimg.cn/b40cfe261a1b490599ded14f8f1a84dc.jpeg)

* 兼容性
	+ PC端支持现代浏览器, IE系列对ES6的兼容都不友好, 需要转ES6
	+ 移动端基本都支持, `proxy`需要比较新的设备支持

## 块级作用域
> let const 类似于 var 用于声明变量

* 不能重复声明
```js
let a = 1;

// jg: SyntaxError: Identifier 'a' has already been declared
let a = 2;
```

* 作用于代码块内
```js
(() => {
	if (1) {
		var a = 1;
		let b = 2;
	}

	// var 作用于函数内, jg: undefined
	console.log(a);

	// jg: ReferenceError: b is not defined
	console.log(b);
})();
```

* 编译期不被初始化
> 编译期 初始化 var 声明的变量与函数 (function, import, class)

> 执行期 对变量赋值与函数调用

```js
// undefined
console.log(b);
var b = 2;

// ReferenceError: a is not defined
console.log(a);
let a = 1;
```

* const 与 let 的区别
> 声明变量时必须赋值

> 声明的变量不可继续赋值

```js
// jg: SyntaxError: Missing initializer in const declaration
// const a;

const b = 1;

// jg: TypeError: Assignment to constant variable
b = 2;
```

## 扩展运算符
> 将数组或对象, 序列化成多个参数, 格式: `...`数组或对象

> 序列化后的结果不能直接输出, 必须作为 数组参数, 对象参数, 调用方法和函数参数, 解构赋值参数

* 数组中的应用

```js
const a = [1, 2];

// 数组合并, jg: [0, 1, 2, 3]
const b = [0, ...a, 3];
// 相当于
[0].concat(a, 3);

// 获取数组中的最大值, jg: 3
Math.max(...b);
// 相当于
Math.max.apply(null, b);

// 数组作为日期参数
new Date(...[2023, 3, 4]);
// 相当于
new Date(2023, 3, 4);
// 相当于
new (Date.bind.apply(Date, [null, 2023, 3, 4]));

// 字符串转数组, jg: ['a', 'b', 'c']
const c = [...'abc'];
// 相当于
'abc'.split('');
// 相当于
const [...d] = 'abc';
```

* 对象中的应用
```js
const a = {x: 1, y: 2};

// jg: {z: 0, x: 1, y: 2, n: 3}
const b = {z: 0, ...a, n: 3};
```

可用于 拷贝数组或对象, 解决[引用数据类型](index.md#引用数据类型)的问题

```js
const a = [1, 2];

// jg: // [1, 2]
const b = [...a];
```

```js
const a = {x: 1, b: 2};

// jg: {x: 1, b: 2}
const b = {...a};
```

* 作为 调用方法和函数参数
	+ 在函数中, 作为`剩余参数`, 即序列化剩下的所有参数, 故使用`扩展运算符`的变量要作为最后一个参数成员

```js
const a = (x, ...y) => {
	// jg: 0
	console.log(x);
	// jg: [1, 2, 3]
	console.log(y);
};

a(0, ...[1, 2], 3);
```

`剩余参数`取代`function`中的`arguments` (箭头函数没有 arguments)

```js
function a (x, y, n) {
	// jg: [1, 2, 3]
	console.log(arguments);
}

a(1, 2, 3);
```

* 作为 [解构赋值](#解构赋值)参数
```js
const [a, ...b] = [1, 2, 3];

// jg: 1
a;

// jg: [2, 3]
b;
```

使用`扩展运算符`的变量只能作为最后一个参数成员

```js
// jg: SyntaxError: Rest element must be last element
const [...a, b] = [1, 2, 3];
```

## 解构赋值
> 用于快速提取数组或对象中的成员

* 数组中的应用

```js
let [a, b] = [1, 2];
// jg: 1
a;
// jg: 2
b;

// 交换变量
[a, b] = [b, a];
// jg: 2
a;
// jg: 1
b;

// 提取数组值, c 匹配不到, 取默认值 3
const [a, b, c = 3] = [1, 2];
```

* 对象中的应用

```js
// 提取JSON值
const {
	id,
	list,
} = {
	id: 1,
	name: 'a',
	list: [],
};

// jg: 1
id
// jg: []
list
```

## class
* 取代 prototype

```js
class Animal {
	constructor () {

	}
	eat () {
		return this;
	}
}
```

* 使用 extends 实现继承

```js
class Cat extends Animal {
	run () {

	}
}
```

* `#` 声明私有变量

```js
class b {
	#a = 0;
}
```

## Map
* Map, 转成指定键名和键值的类对象集合
	+ 键名不限于字符串; Object, 键名为字符串
	+ 相同键名, 后添加的成员覆盖旧成员
* 取代 Object
	+ Map 有内建的遍历机制, 一级对象结构采用 Map 更适合
```js
// jg: Map(2) {'a' => 1, 'b' => 2}
const a = new Map([
	['a', 1],
	['b', 2]
]);

// 成员数, jg: 2
a.size;

// 添加成员, jg: // Map(3) {'a' => 1, 'b' => 2, 1 => 'a'}
a.set(1, 'a');

// 删除成员, a, Map(2) {'a' => 1, 1 => 'a'}, jg: true
a.delete('b');

// 判断是否有成员, jg: true
a.has('a');

// 获取键值, jg: 1
a.get('a');

// 清空, a: Map(0) {}
a.clear();
```

* 可以像对象一样遍历
	+ keys, values, entries, forEach
```js
const b = new Map([
	[1, 'a'],
	[2, 'b']
]);

// 转成数组, jg: [[1, 'a'], [2, 'b']]
[...b];

// jg: [1, 2]
[...b.keys()];

// jg: ['a', 'b']
[...b.values()];
```

## Set
* 通过 new Set(); 生成一个 Set 的数据结构; 将数组或字符串转成类对象集合, 成员不重复
```js
// jg: Set(2) {1, 2}
const a = new Set([1, 2, 2]);

// 成员数, jg: 2
a.size;

// 添加成员, jg: Set(3) {1, 2, '1'}
a.add('1');

// 删除成员, a, Set(2) {2, '1'}, jg: true
a.delete(1);

// 判断是否有成员, jg: true
a.has(2);

// 清空, a, Set(0) {}
a.clear();
```

* 可以像对象一样遍历
	+ keys, values, entries, forEach
```js
// jg: 1 2
new Set([1, 2, 2]).forEach(v => console.log(v));
```

* 数组去重
```js
// jg: // [1, 2]
[...new Set([1, 2, 2])];
```

* 字符串去重
```js
// jg: 'abc'
[...new Set('abcc')].join('');
```

## Symbol
* Symbol('描述数据类型'), 作为对象的属性名, 该属性名是独立存在的
```js
const cat = Symbol('is annimal');

const b = {
	[cat]: 1,
	c: 2,
	[Symbol('is annimal')]: 3
};

// jg: 1
b[cat];

// 此 cat 非 `const cat`, jg: undefined
b.cat;

// 属性名的描述, jg: is annimal
cat.description;

// 不含 Symbol, jg: ['c']
Object.getOwnPropertyNames(b);

// 包含 Symbol, 且 Symbol 排序置后, jg: ['c', Symbol(is annimal), Symbol(is annimal)]
Reflect.ownKeys(b);

// 只有 Symbol, jg: [Symbol(is annimal), Symbol(is annimal)]
const d = Object.getOwnPropertySymbols(b);

// 属性名是独立存在的, jg: false
d[0] == d[1];

// 属性名不是对象私有的, jg: true
d[0] === cat;
```

* Symbol.for('注册全局变量的字符串'), 将属性名注册全局
```js
// 在 a.js 中定义
const a = Symbol.for('sameParam');

/**
 * 在 b.js 中定义
 * @type {symbol}
 * 如果引用了 a.js 则 b === a // true
 * 如果没引用 a.js 则 b = 新定义的属性名
 */
const b = Symbol.for('sameParam');

// jg: sameParam
Symbol.keyFor(a);
```

## 对象扩展
* 属性表达式

```js
const a = 1;

{
	// 同名属性的简洁表达式
	a,
	// 属性方法的简洁表达式
	b () {},
	// 属性名表达式
	[a]: {},
}

// 等同于
{
	a: a,
	b: () => {},
	1: {},
}
```

## 函数扩展
* 参数默认值

```js
// 默认第一个参数 n = 0; 默认第二个参数为 {}; 默认 x = 1; 默认 y = 2
const a = (n = 0, { x = 1, y = 2 } = {}) => {
	// jg: 0 1 2
	console.log(n, x, y);
};

a();
```

### 箭头函数
* 格式

```js
const a = () => {};
```

* 简写
	+ 只有一条语句, 可省略花括号和`return`, 语句结果即返回值
	+ 只有一个参数, 可省略括号

```js
const a = res => res + 1;
```

* [this](this.md#箭头函数)

## 运算符扩展
* `**` 指数运算符

```js
// jg: 8
2 ** 3
// 相当于
Math.pow(2, 3);
```

* `?.` 链判断运算符
	+ 从左到右, 不分运算符优先级, 判断是否存在, 存在则返回其值, 不存在则中止, 都不存在则返回 `undefined`

确保数组存在

```js
// 报错: Cannot read properties of null (reading '0')
'abc'.match('d')[0];

// 避免报错, jg: undefined
'abc'.match('d')?.[0];
```

确保对象存在

```js
const data = {
	// 正常数据返回是 user: {name: 'xx'}
    user: null,
};

// 报错: Cannot read properties of null (reading 'name')
data.user.name;

// 避免报错, jg: undefined
data.user?.name;
```

确保函数存在

```js
const obj = {
    // 有些方法可能在适当的时机实现 obj.fn = () => {}
};

// 报错: obj.fn is not a function
obj.fn();

// 避免报错, jg: undefined
obj.fn?.();
```

* `??` 空位合并运算符
	+ 类似于 `||`, 不过只有左侧为`null`或`undefined`时, 才会返回右侧的值
	
```js
const a = null;

const b = 0;

// jg: 0
c = a ?? b ?? 1;
```

* 赋值运算符
	+ 
	+ 
	+ `??=`, 即`??`成立执行赋值
	
`||=`, 即`||`成立执行赋值

```js
let a = 0;

a ||= 1;
// 相当于
a || (a = 1);
```

`&&=`, 即`&&`成立执行赋值

```js

```


## 其它 ES6 内容
* [模板字符串](string.md#模板字符串)

* [BigInt](number.md#BigInt)

* `async`, 声明异步函数
	+ 等待"await 表达式"执行完成, 才继续执行其后语句

* import 取代 requier

* export 取代 module.exports

* 输出一个函数用小驼峰
```js
const aaBb = () => {};

export default aaBb;
```

* 输出一个对象用大驼峰
```js
const AaBa = {};

export default AaBb;
```
