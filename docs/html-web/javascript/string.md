# JS 类型.字符串 【String】

## 提供`字符串/数值`, 返回匹配的 下标索引值
无匹配项, 返回 -1

```js
// 返回第一个检索到'a'的下标索引值, jg: 0
'aba'.indexOf('a');

// 反向检索, jg: 2
'aba'.lastIndexOf('a');
```

## 提供`字符串/数值`, 返回匹配的 数组
无匹配项, 返回 null

```js
// 返回第一个匹配到的'a', jg: ['a', index: 0, input: 'aba', groups: undefined]
'aba'.match('a');

// 返回所有匹配到的'a', jg: ['a', 'a']
'aba'.match(/a/g);
```

## 提供`下标索引值`, 返回匹配的 字符串
无匹配项, 返回 ''

```js
// 返回位置[0, 2)的字符串, jg: 'ab'
'aba'.substring(0, 2);

// 返回位置[1, )往右的最多2个字符串, jg: 'ba'
'aba'.substr(1, 2);
```

## 提供`下标索引值`, 返回匹配的 字符串
无匹配项, 返回 ''; 建议使用 substring

```js
// 返回位置[0, 2)的字符串, jg: 'ab'
'aba'.slice(0, 2);
```

## 提供`字符串/数值`, 返回匹配项 是否存在
```js
// jg: true
'aba'.includes('b');

// 判断 下标索引值 [2, )往右的字符串`a`是否匹配, jg: false
'aba'.includes('b', 2);
```

## 提供`字符串/数值`, 返回以匹配项为首 是否存在
```js
// jg: true
'aba'.startsWith('a');

// 判断 下标索引值 [1, )往右的字符串`ba`是否以匹配项`a`为首, jg: false
'aba'.startsWith('a', 1);
```

## 提供`字符串/数值`, 返回以匹配项结尾 是否存在
```js
// jg: true
'aba'.endsWith('a');

// 判断 下标索引值 (2, )往左的字符串`ab`是否以匹配项`a`结尾, jg: false
'aba'.endsWith('a', 2);
```

## concat, 拼接字符串
没有意义, 建议使用 'abc' + 1

```js
// jg: 'abc1'
'abc'.concat(1);
```

## replace, 替换字符串
```js
// 将第一个匹配到的'a'替换成'c', jg: 'cba'
'aba'.replace('a', 'c');

// (/(匹配的内容)/, $1插入内容), jg: 'a,b,a,'
'aba'.replace(/(\w)/g, '$1,');

// eg: 2022-06-27 -> 2022年06月27日
'2022-06-27'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1年$2月$3日');
```

## split, 分割成数组
```js
// jg: ['a', 'a']
'aba'.split('b');

// jg: ['a', 'b', 'a']
'aba'.split('');

// 限制数组成员数, 其余数组成员将被舍弃 jg: ['a']
'aba'.split('b', 1);

// 匹配项往左或往右没字符串, 将以空字符串作为数组成员, jg: ['', 'b', '']
'aba'.split('a');

// 无匹配内容, 将整个字符串作为一个数组成员, jg: ['aba']
'aba'.split('c');
```

## 去除空格
```js
// 去除首尾空格, jg: 'a b'
' a b '.trim();

// 去除开头空格, jg: 'a b '
' a b '.trimStart();

// 去除结尾空格, jg: ' a b'
' a b '.trimEnd();
```

## 转 大小写
```js
// 转大写, jg: 'ABA'
'aba'.toUpperCase();

// 转小写, jg: 'aba'
'aBa'.toLowerCase();
```

## 转 Number 类型
```js
// jg: 1.1
'1.1' - 0;

// jg: 1.1
'1.1' * 1;

// jg: 1.1
'1.1' / 1;

// 转换成数值, jg: 1.1
Number('1.1');

// jg: NaN
Number('1a');

// 转换成整型, jg: 1
parseInt('1a');

// 非数值(除了+和-)为首的字符串, 其转换结果必然为NaN, jg: NaN
parseInt('a1');

// 判断是否为 NaN, jg: true
isNaN(NaN);

// 转换成浮点型, 兼顾Number和parseInt, jg: 1.1
parseFloat('1.1a');

// 转换成整型, 和 Number 一样, 包含非数值(除了+和-)内容
Math.trunc('1');
```

## 遍历字符串
```js
// a b a
for (let i of 'aba') console.log(i);
```

## 模板字符串
```js
function a1() {
	// 相当于 alert(1);
	alert`1`;
}
// 相当于 a1();
a1``;

const a = 1;

// 相当于 a + 'b', jg: '1b'
`${a}b`;

// 会保留换行符, jg: '\n\t<div>\n\t\t1\n\t</div>\n'
`
	<div>
		${a}
	</div>
`;
```

## match, 以数组形式返回第一个匹配内容
若无匹配内容, 则返回 null

可以匹配 字符串, 数值, [正则表达式](regexp.md)

```js
// jg: ['b', index: 1, input: 'aba', groups: undefined]
'abab'.match('b');

// jg: ['1', index: 2, input: 'ab1', groups: undefined]
'ab1'.match(1);

// jg: ['b', 'b']
'abab'.match(/b/g);
```
