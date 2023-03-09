# JS 正则 【RegExp】

## 创建
```js
const reg1 = /a/g;

const reg2 = new RegExp('a', 'g');

// g 匹配全部, i 不区分大小写, jg: ['A', 'a']
'Aa'.match(/a/gi);
```

## 预定义类
```js
// 换行
\n

// 回车
\r

// 制表
\t

// Tab
\f

// [0-9]
\d

// [^0-9]
\D

// 空白字符[ \n\r\t\f\x0B]
\s

// 非空白字符
\S

// 字母下划线
\w

// 非字母下划线
\W
```

## 量词
```js
// 匹配连续n个一样的关键词, jg: ['aaa', index: 4, input: '1aa1aaa', groups: undefined]
'1aa1aaa'.match(/a{3}/);

// {3,}, 匹配至少3个连续一样的关键词, jg: ['aaa', index: 3, input: 'aa1aaa2aaaa', groups: undefined]
'aa1aaa2aaaa'.match(/a{3,}/);

// {n,m}, 匹配连续n到m个一样的关键词, 逗号后面不要有空格, jg: ['aa', index: 1, input: '1aa1aaa', groups: undefined]
'1aa1aaa'.match(/a{1,2}/);

// *, 匹配以关键词开头的任意个数连续一样的关键词, 相当于 {0,}, 即使没匹配到也不会返回 null, jg: ['', index: 0, input: '1ac', groups: undefined]
'1ac'.match(/a*/);

// +, 匹配至少1个连续一样的关键词, 相当于 {1,}, jg: ['aa', index: 0, input: 'aa1aaa', groups: undefined]
'aa1aaa'.match(/a+/);
```

## test, 是否匹配
```js
// jg: true
/a/.test('ab');

// jg: true
new RegExp('2|3|11|33', 'g').test(11);

// jg: false
new RegExp('2|3|11|33', 'g').test(1);
```

## exec, 以数组形式返回第一个匹配内容
若无匹配内容, 则返回 null

```js
// jg: ['a', index: 1, input: 'xaa', groups: undefined]
/a/g.exec('xaa');
```

## 集合
```js
// 匹配a和b
/[ab]/g
/a|b/g

// 匹配ab
/ab/g

// 匹配非a
/[^a]/g
```

## 引用
```js
// jg: 'a,1b2'
'a1b2'.replace(/(a)/, '$1,');
```

## 相关的字符串方法
```js
// 千分符, jg: '1,234,567.12345'
'1234567.12345'.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

// 获取[a, b]之间的内容, jg: ['a12b']
'xa12bx'.match(/a(.+?)b/g);

// 获取文件名, jg: 'b2'
'x/a1/b2.png'.replace(/(.*\/)*([^.]+).*/ig,"$2");
```
