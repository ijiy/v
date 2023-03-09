# JS 日期 【Date】

## 基础
```js
// 创建, 或 (new Date);
const _d = new Date();

// 获取, get*

// 时间戳, 或 Date.now(); 一个从"1970, 1, 1"至今的毫秒
_d.getTime();
// 年; _d.getUTCFullYear(), 国际标准时间
_d.getFullYear();
// 月, [0, 11]
_d.getMonth();
// 日
_d.getDate();
// 周, [0, 6]
_d.getDay();
// 时
_d.getHours();
// 分
_d.getMinutes();
// 秒
_d.getSeconds();
// 毫秒
_d.getMilliseconds();

// 设置, set*

// 1月, 将上面的"get"改成"set"
_d.setMonth(0);
// 1号
_d.setDate(1);
```

## 设置 2023/1/2
```js
new Date(2023, 0, 2);

new Date('jan 2, 2023');

new (Date.bind.apply(Date, [null, 2023, 0, 2]));

new Date(...[2023, 0, 2]);
```

## 计算
```js
// 返回时间戳差值
Date.now() - new Date(2023, 0, 2);

// jg: '2023-01-02 20:20:20'
(new Date(Date.now() + 288e5)).toISOString().replace('T', ' ').split('.')[0];
```

## 兼容
```js
// 错误: 部分移动设备不能解析
new Date('2023-01-02 20:20:20');

// 正确
new Date('2023/01/02 20:20:20');
```

```js
// 错误: 部分移动设备结果并不理想
new Date().toLocaleDateString();

// 正确
const dd = new Date();

// jg: '2022-11-22'
`${dd.getFullYear()}-${1 + dd.getMonth()}-${dd.getDate()}`;
```

## 岁
一年并非绝对的365天

```js
// 格式化 年龄 (2020-9-9 => 1岁1个月)
export const formatAge = age => {
	const da = age.split('-').map(item => parseInt(item));
	const dd = new Date();
	const db = [dd.getFullYear(), 1 + dd.getMonth(), dd.getDate()];

	let year = 0;
	let month = 0;

	if (da[2] > db[2]) {
		month = 1;
	}

	const leftM = db[1] - month;

	if (da[1] > leftM) {
		month = 12 - da[1] + leftM;
		year = 1;
	} else {
		month = leftM - da[1];
	}

	year = db[0] - da[0] - year;

	return `${year}岁${month ? `${month}个月` : ''}`;
};
```
