# JS 类型.对象 【Object】

## 创建
```js
const obj = {};
// 等同于
new Object();
// 等同于, 包含属性 Prototype
Object.create({});

// 生成无属性空对象, jg: {}
Object.create(null);
```

## 类型
```js
// jg: 'object'
typeof null;
```

## 赋值
```js
obj.a = 1;
// 等同于
obj['a'] = 1;
```

```js
const a = {
	b () {
		// super, 指向原型对象`a` (ES6范畴)
		console.log(super.c);
	},
};

// 等同于 a.c = 1;
Object.setPrototypeOf(a, {
	c: 1,
});

// jg: 1
a.b();
```

```js
// 删除属性
delete obj['a'];
```

## Object.is, 判断是否严格相等
```js
// jg: false
NaN === NaN;

// jg: true
Object.is(NaN, NaN);

// jg: false
Object.is(1, '1');
```

## hasOwnProperty, 检查属性是否在对象中
```js
const a = {
	x: 1,
};

// jg: true
a.hasOwnProperty('x');
```

## Object.assign, 合并 (ES6范畴)
* 第一个变量参数为目标内容
	+ 该变量参数, 若为对象, 则合并结果为对象; 若为数组, 则合并结果为数组
	+ 该变量参数, 合并后发生改变, 值同合并结果

* 其它参数为被合并的内容 (对象, 数组, 字符串)

```js
const x = {a: 1};

// jg: {a: 1, b: 2, c: 3}
Object.assign(x, {b: 2}, {c: 3});

// jg: {a: 1, b: 2, c: 3}
x;

// jg: [1, b: 2, c: 3]
Object.assign([1], {b: 2}, {c: 3});
```

## Object.keys, 返回键名
```js
const x = {a: 1, b: 2};

// jg: ['a', 'b']
Object.keys(x);

// 相当于
Object.getOwnPropertyNames(x);
```

## Object.values, 返回键值
```js
// jg: [1, 2]
Object.values({
	a: 1,
	b: 2,
});
```

## 遍历
```js
const obj = {a: 1, b: 2};

for (let i in obj) {
	// jg: a b
	console.log(i);
}

// 相当于
Object.keys(obj).forEach(item => console.log(item));
```

## ES6范畴
* [对象扩展](es6.md#对象扩展)

* [解构赋值](es6.md#解构赋值)

* [扩展运算符](es6.md#扩展运算符)
