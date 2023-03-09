# JS 类型.数值 【Number】

## 类型
```js
// jg: 'number'
typeof NaN;
```

## 浮点数值计算异常
* 无论加减乘除, 浮点数值之间的计算都可能出现异常
```js
// 正确 1.2, jg: 1.2000000000000002
1.1 + .1

// 正确 1.1, jg: 1.0999999999999999
1.2 - .1

// 正确 1.21, jg: 1.2100000000000002
1.1 * 1.1

// 正确 12, jg: 11.999999999999998
1.2 / .1
```

* 解决方式
```js
// 每个参与计算的成员 * 1e16, 计算后再 / 1e16, jg: 1.2
((1.1 * 1e16) + (.1 * 1e16)) / 1e16;

// jg: 1.21
(1e16 * 1.1) * (1e16 * 1.1) / 1e32;
```

## 长整型输出异常
* 17位或大于17位的整数都会输出异常, 16位以9开头的整数可能输出异常. 即 浏览器转成二进制计算, 超过53个二进制位就无法确保精确
```js
// 正确 16个9, jg: 10000000000000000
9999999999999999

// 正确 17个2, jg: 22222222222222224
22222222222222222

// 正确 18个2, jg: 222222222222222200
222222222222222222

// 8.98846567431158e+307
Math.pow(2, 1023);

// Infinity
Math.pow(2, 1024);
```

* 解决方式
	+ 作为字符串处理, 尤其是后端返回数据
	+ 采用[BigInt](#BigInt)
```js
// jg: 222222222222222222n
222222222222222222n

// jg: 49382716049382715950617283950617284n
222222222222222222n * 222222222222222222n
```

## 取整
```js
// 只保留`数值或字符串`的整数位, jg: 1
parseInt(1.8);
parseInt('1.8');

// 同 parseInt, jg: 1
Number.parseInt(1.8);

// 同 parseInt, jg: 1
Math.trunc(1.8);

// 同 parseInt, jg: 1
~~(1.8);

// 同 parseInt, jg: 1
1.8 | 0;
```

## 转 String 类型
```js
// 或 '' + 3, jg: '3'
3 + '';

// jg: '3'
String(3);

// jg: '3'
(3).toString();

// 2进制 (即除尽2取余), jg: '11'
(3).toString(2);

// jg: '3'
(3).toFixed();

// 四舍五入 (>= 5 进一位), 保留2位小数, jg: '3.00'
(3).toFixed(2);
```

## 类型判断
```js
// 是否 NaN, jg: true
Number.isNaN(NaN);

// 是否整数, jg: true
Number.isInteger(1.0);

// jg: false
Number.isInteger(1.1);

// 是否数值, jg: true
Number.isFinite(1);

// jg: false
Number.isFinite('1');

// jg: false
Number.isFinite(NaN);
```

## Math
```js
// 随机, (0, 1)
const random = Math.random()*1;

// 四舍五入, jg: 0 或 1
Math.round(random);

// 向下取整, jg: 0
Math.floor(random);

// 向上取整, jg: 1
Math.ceil(random);

// 取最大值
Math.max(num1, num2, num3...);

// 取最小值
Math.min(num1, num2, num3...);

// π
Math.PI;

// 绝对值, jg: 1
Math.abs(-1);

// 平方根, jg: 2
Math.sqrt(4)

// 2的3次方 (2 * 2 * 2), jg: 8
Math.pow(2, 3);
```

## BigInt
* BigInt(), 转成大整数类型 或 后缀n, 代表没有位数限制的整数
```js
Math.pow(2, 53) === Math.pow(2, 53) + 1 // 9007199254740992

BigInt(Math.pow(2, 53)) // 9007199254740992n
BigInt(Math.pow(2, 53)) + 1n // 9007199254740993n
```
