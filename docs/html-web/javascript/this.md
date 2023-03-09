# JS 【this】

> 哪个对象 (此对象为[引用数据类型](./index.md#引用数据类型)的对象数据) 调用了该函数, 该函数下的`this`就指向哪个对象

> 对象层层调用, `this`将指向最近的对象

```js
const a = {
	length: 1,
	x() {
		console.log(this);
	},
};

// 相当于 window.a.x(), 这里最近的对象是`a`, 故 this => a, jg: 1
a.x();

const b = a.x;

// 相当于 window.b(), 故 this => window, 而 window 的 length 是 0, jg: 0
// 不能想成 window.a.x(), 因为 b = a.x, 即 b => x
b();

const c = [0, a.x];

// 数组 c 的引用数据类型也是对象, 故 this => c, 而该数组的长度为 2, jg: 2
c[1]();
```

## 箭头函数

> `this`将跳过该函数, 指向下一个函数的调用对象

```js
const a = {
	b () {
		setTimeout(function () {
			// 函数 setTimeout, 属于对象 window, 所以 this => window
			console.log(this);
		});

		// 跳过 setTimeout, 下一个函数 b, 属于对象 a, 所以 this => a
		setTimeout(() => console.log(this));
	},
};

a.b();
```

```js
const img = new Image();

img.onload = function () {
	// this => img
	console.log(this);
}

img.onload = () => {
	// this => window
	console.log(this);
}
```
