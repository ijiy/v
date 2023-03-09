# JS 继承 【call, apply】

* call与apply, 都是调用函数, 继承其所有, 第一个参数, 取代其上下文对象
	+ call, 还可以再有多个参数, 分别对应调用函数的参数列
	+ apply, 只能再有一个参数, 且为数组, 数组成员对应调用函数的参数列

* 不适用于箭头函数, 因其上下文指向的不是该函数

::: details 示例
```js
/**
 * 选手
 * @param name 姓名
 * @param sex 性别
 * @constructor
 */
const Player = function (name, sex) {
	this.name = name;
	this.sex = sex;
}

/**
 * 中国唱歌选手
 * @param name
 * @param sex
 * @constructor
 */
const Chinese = function (name, sex) {
	Player.call(this, name, sex);

	this.sing = function () {
		console.log(`中国唱歌: ${this.name}, ${this.sex}`);
	}
}

/**
 * 美国跳舞选手
 * @param name
 * @param sex
 * @constructor
 */
const American = function (name, sex) {
	Player.apply(this, [name, sex]);

	this.dance = function () {
		console.log(`美国跳舞: ${this.name}, ${this.sex}`);
	}
}

// jg: 中国唱歌: x先生, 男
new Chinese('x先生', '男').sing();

// jg: 美国跳舞: Ms.y, 女
new American('Ms.y', '女').dance();
```
:::
