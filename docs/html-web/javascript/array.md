# JS 数组 【Array】

## 创建
```js
let a = [1, 2, 3];
let a = new Array(1, 2, 3);
```

## 类型
```js
// jg: object
typeof new Array();

// jg: function Array() { [native code] }
new Array().constructor;

// jg: Array
new Array().constructor.name;
```

## 长度
```js
// jg: 3
new Array([1, 2, 3]).length;

// jg: 3
new Array(3).length;
```

* `length` 赋值, 会改变原数组
```js
const a = [1, 2, 4];

a.length = 2;

// jg: [1, 2]
a;
```

## 成员
```js
// jg: 3
new Array([1, 2, 3])[2];

// jg: 3
new Array(1, 2, [3])[2][0];

// jg: undefined
new Array(2)[0];
```

## 增删
* 只能从数组前或后增删
	+ 原数组改变, 返回数组长度; 注释结果为 a 的值

```js
const a = [1];

// 从后面添加成员, jg: [1, 2, 3]
a.push(2, 3);

// 从前面添加成员, jg: [-1, 0, 1, 2, 3]
a.unshift(-1, 0);

// 从后面删除一个成员, jg: [-1, 0, 1, 2]
a.pop();

// 从前面删除一个成员, jg: [0, 1, 2]
a.shift();
```

* 比较 arr.push 和 arr[arr.length] 的效率

```js
const a = [1];

console.time('use time');
a.push(2);
// use time: 0.00390625 ms
console.timeEnd('use time');
```

```js
const a = [1];

console.time('use time');
a[a.length] = 2;
// use time: .0068359375 ms
console.timeEnd('use time');
```

<div style="display: flex; justify-content: space-evenly;">

| `push` 耗时 (ms) |
| --- |
| .00390625 |
| .002685546875 |
| .00390625 |
| .0029296875 |
| .00390625 |
| .003173828125 |

| `length` 耗时 (ms) |
| --- |
| .0068359375 |
| .005859375 |
| .005859375 |
| .008056640625 |
| .008056640625 |
| .006103515625 |

</div>

以上数据, 通过递进数组内容的复杂度 (长度, 成员类型), 多次得出的统计结果

显而易见, push 所耗时间更短

* Array.splice(i, n, a1, a2...)
	+ 删除从位置 i 包括 i 之后的 n 个成员(n为0表示不删除), 在位置 i 之前增加a1, a2...
	+ 原数组改变, 返回被删成员集合; 注释结果为 a 的值

```js
const a = [1, 2, 3];

// jg: [1, 'a', 'b']
a.splice(1, 2, 'a', 'b');

// jg: [1, 'a', 'b']
a;
```

## 获取
* Array.slice(i, j)
	+ 获取位置 i 包括 i 到位置 j 但不包括 j 的成员
	+ 原数组不变

```js
const a = [1, 2, 3];

// jg: [2]
a.slice(1, 2);

// 当 j 不存在, 获取位置 i 包括 i 之后的所有成员, jg: [2, 3]
a.slice(1);

// 当 j 小于零, 获取位置 i 包括 i 到数组倒数位置(j = -1, 即倒一)且不包括该位置的成员, jg: [2]
a.slice(1, -1);
```

* 比较 slice 和 length 的效率

```js
const a = [1, 2, 3, 4, 5];

console.time('use time');
// jg: [1, 2, 3]
console.log(a.slice(0, 3));
// use time: 0.19384765625 ms
console.timeEnd('use time');
```

```js
const a = [1, 2, 3, 4, 5];

console.time('use time');
a.length = 3;
// jg: [1, 2, 3]
console.log(a);
// use time: 0.1708984375 ms
console.timeEnd('use time');
```

<div style="display: flex; justify-content: space-evenly;">

| `slice` 耗时 (ms) |
| --- |
| .1708984375 |
| .279052734375 |
| .23486328125 |
| .2099609375 |
| .175048828125 |
| .18310546875 |

| `length` 耗时 (ms) |
| --- |
| .19384765625 |
| .195068359375 |
| .281982421875 |
| .181884765625 |
| .183837890625 |
| .22802734375 |

</div>

以上数据, 通过递进数组内容的复杂度 (长度, 成员类型), 多次得出的统计结果

数据显示, 没有可比较的差距

## 替换
* Array.copyWithin(p, i, j)
	+ 复制下标[i, j)之间的成员替换下标[p, )往右同复制长度的成员
	+ 原数组改变, 但长度不会变

```js
const a = [1, 2, 3, 4, 5];

a.copyWithin(1, 2, 4);

// jg: [1, 3, 4, 4, 5]
a;
```

## 翻转
原数组改变

```js
const a = [1, 2, 3];

a.reverse();

// jg: [3, 2, 1]
a;
```

## 排序
```js
// 默认`ASCII码`大小规则, jg: [11, 2, 3]
[11, 2, 3].sort();

// 理想的排序, jg: [2, 3, 11]
[11, 2, 3].sort((pre, cur) => pre - cur);
```

## 筛选
```js
// 去重, jg: [1, 2]
[1, 1, 2].filter((item, index, self) => self.indexOf(item) === index);

// 返回数组中大于2的集合, jg: [3]
[1, 2, 3].filter(item => item > 2);
```

## 拼接
```js
// jg: [0, 1]
[0].concat([1]);

// jg: [1]
[].concat(1);
```

## 转 字符串
```js
// jg: '1,2'
[1, 2].join();

// jg: '1-2'
[1, 2].join('-');
```

## 最大最小
```js
// 数组中最大值, jg: 3
Math.max.apply(null, [1, 2, 3]);
// 或, jg: 3
Math.max(...[1, 2, 3]);

// 数组中最小值, jg: 1
Math.min.apply(null, [1, 2, 3]);
// 或, jg: 1
Math.min(...[1, 2, 3]);
```

## 遍历
```js
const arr = [1, , 2];

for (let i of arr) {
	// jg: 1 undefined
	console.log(i);

	if (!i) {
		break;
	}
}

// forEach 遍历数组, 跳过空成员, 不能用 break. jg: 1 2
arr.forEach(item => console.log(item));

// 跳过空成员, 不会有结果输出
new Array(2).forEach(item => console.log(item));
```

## find 遍历数组, 返回符合条件的成员
```js
// 值大于2 && 下标大于0, jg: 3
[1, 2, 3].find((item, index) => item > 2 && index > 0);
```

## every 遍历数组, 每一项符合条件, 返回 true
```js
// jg: false
[1, 2, 3].every(item => item > 2);
```

## some 遍历数组, 有一项符合条件, 返回 true
```js
// jg: true
[1, 2, 3].some(item => item > 2);
```

## map \ flatMap 遍历数组, 返回处理过数组成员后的新数组
```js
// jg: [2, , 3]
[1, , 2].map(item => item + 1);

// 跳过空成员, jg: [2, 3]
[1, , 2].flatMap(item => item + 1);
```

```js
const x = [{a: 1}, {a: 2}];

const y = x.map(item => {
	// item 为对象, 是引用数据类型, 直接修改 item, 会改变原数组
	item.a++;

	return item;
});

// jg: [{a: 2}, {a: 3}]
console.log(x);
// jg: [{a: 2}, {a: 3}]
console.log(y);
```

```js
const x = [{a: 1}, {a: 2}];
let myItem;

const y = x.map(item => {
	// 这样原数组就不会发生改变了
	myItem = {...item};

	myItem.a++;

	return myItem;
});

// jg: [{a: 1}, {a: 2}]
console.log(x);
// jg: [{a: 2}, {a: 3}]
console.log(y);
```

或

```js
const x = [{a: 1}, {a: 2}];

const y = x.map(item => {
	return {
		...item,
		a: item.a + 1,
	};
});

// jg: [{a: 1}, {a: 2}]
console.log(x);
// jg: [{a: 2}, {a: 3}]
console.log(y);
```

## reduce 遍历数组, 返回递归计算成员后的结果 (上一个成员, 当前成员)
```js
// jg: 6
[1, , 2, 3].reduce((pre, cur) => pre + cur);
```

## includes 是否匹配内容 (ES6范畴)

* includes(匹配的内容, 开始位置);

```js
// jg: true
[1, 2, 3].includes(3);

// jg: true
[NaN].includes(NaN);
```

* 部分设备不支持, 兼容方案如下

```js
if (!Array.prototype.includes) {
	Array.prototype.includes = function (value) {
		return this.some(el => el === value);
    }
}

// 使用方式
[1, 2, 3].includes(3);
```

## indexOf 返回匹配内容的索引值
```js
// jg: 1
['a', 'b', 'c'].indexOf('b');

// 无匹配项, 都是返回 -1, jg: -1
[NaN].indexOf(NaN);
```

## flat 将嵌套的数组平铺 (ES6范畴)
```js
// jg: [1, 2, 3]
[1, [2, 3]].flat();
// jg: [1, 2, [3]]
[1, [2, [3]]].flat();
// jg: [1, 2, 3]
[1, [2, [3]]].flat(Infinity);

// 跳过空成员, jg: [1, 2]
[1, , 2].flat();
```

## Array.from 转成数组 (ES6范畴)
* 比较实用的是将数组的空位转成 `undefined`

```js
// jg: [空属性 × 2]
const a = new Array(2);

// jg: [undefined, undefined]
Array.from(a);
```

## 两个数组 获取差异成员
```js
/**
 * 获取两个数组间差异的成员
 *
 * @param arr1 数组1
 * @param arr2 数组2
 * @return any[] 返回: 两个数组间差异的成员
 */
const twoArrDiff = (arr1, arr2) => arr1.filter(item => arr2.indexOf(item) === -1).concat(arr2.filter(item => arr1.indexOf(item) === -1));

// jg: [1, 3]
twoArrDiff([1, 2], [2, 3]);
```

## 两个数组 比较大小
```js
// 默认`ASCII码`大小规则, jg: false
[1, 11] > [1, 2]

// [0, 9] 之间可正常比较, jg: true
[1, 2] > [1, 1]

// 两个数组间, 每个成员一对一比较, 从第一个成员开始比较, 只要有一个成员满足条件, 则比较结束, jg: true
[1, 2] > [1, 1, 3]

// 不能比较是否相等, jg: false
[1, 1] === [1, 1]
```

```ts
/**
 * 比较两个版本号
 *
 * @param verNew 新版本号, eg: '1.11.2'
 * @param verOld 旧版本号, eg: '1.2.11'
 * @returns {boolean} 是否新版本
 *
 * @example
 * // jg: true
 * isNewVer('1.11.2', '1.2.11');
 */
const isNewVer = (verNew: string, verOld: string): boolean => {
	if (!verNew) {
		return false;
	}

	if (!verOld) {
		return true;
	}

	const arrNew = verNew.split('.').map(item => ~~item);
	const arrOld = verOld.split('.').map(item => ~~item);

	for (let i = 0; i < arrNew.length; i++) {
		if (arrNew[i] > arrOld[i]) {
			return true;
		} else if (arrNew[i] < arrOld[i]) {
			return false;
		}
	}

	return false;
}
```

## 获取随机且不重复的整数集合
```js
/**
 * 返回随机重组顺序的数组
 *
 * @param arr 数组类型不限
 * @return any[] 返回: 随机重组后的数组
 */
const randomSort = arr => arr.sort(() => .5 - Math.random());

/**
 * 获取随机且不重复的整数集合
 *
 * @param maxNum 范围-最大整数, 必须
 * @param minNum 范围-最小整数, 默认 0
 * @param someNum 整数个数, 默认 范围差值
 * @return number[] 返回: 随机且不重复的整数集合
 */
const randomIntSort = (maxNum, minNum = 0, someNum) => {
	const arr = [];

    for (let i = minNum; i <= maxNum; i++) {
        arr.push(i);
    }

    return randomSort(arr).slice(0, someNum);
};

// jg: [7, 6]
randomIntSort(10, 4, 2);
```

## ES6范畴
* [解构赋值](es6.md#解构赋值)

* [扩展运算符](es6.md#扩展运算符)
