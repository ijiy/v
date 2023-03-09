# JS 原型 【prototype】

## 非空属性的对象
* 都有一个原型对象`Prototype`, 部分内置属性会直接定义其下, 其中包括`__proto__`, `constructor`

* 都是由原生"构造器"**new**出来的构造函数
	+ `ƒ Function() { [native code] }`
		- 包括`Function`, `Object`, `Array`, `RegExp`, `Date`, `Symbol`, `BigInt`, `Number`, `Boolean`, `String`
	+ `ƒ Object() { [native code] }`
		- 包括`Math`, `JSON`,

::: details 示例
```js
// jg: true
Function.constructor === Object.constructor;

// jg: true
Math.constructor === JSON.constructor;
```
:::

## `constructor`
* 指向该对象的"构造器", 部分内置属性会定义于此

## `__proto__`
* 指向`Prototype`本身, 是"原型链"实现的关键, 最终指向`null`

```js
// jg: true
Object.__proto__.__proto__.__proto__ === null;
```

* 原型链, 即函数中返回原型对象(return this), 再指向该原型的属性或函数

::: details 示例
```js
// 构造器
function Pro(a) {
	this.a = a;
}

Pro.prototype = {
	b: function () {
		console.log(++this.a);
		return this;
	}
};

Pro.prototype.c = function() {
	console.log(++this.a);
};

// 构造函数, 调用原型方法, 原型中的 this 指向 Pro, jg: 2 3
new Pro(1).b().c();
```
:::
