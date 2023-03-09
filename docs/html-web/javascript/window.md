# JS 全局对象 【window, location, console】

## location
```js
// 域名, 不包括协议
location.host

// 问号, 包括问号
location.search

// 刷新或打开新页面
location.reload();

// 替换当前页面
location.replace();

// 协议, "http:"
location.protocol
```

## console
```js
console.log('%c链接地址\nhttps://xx.x.com', 'color: #ff0; font-size: 60px;');

console.time('开始和结束计时的命名要一样');
console.group('分组展示');
console.info('和log相似');
console.error('错误消息');
console.warn('警告消息');
console.groupEnd();
console.timeEnd('开始和结束计时的命名要一样');

console.table([{a: 1, b:2}, {c: 3}]); // 以表格形式打印出结果, Chrome私有

// 在所属的<script>后面添加内容
document.writeln('<pre>保留换行符</pre>');
```

## window
```js
// 获取窗口尺寸
window.innerWidth;
window.innerHeight;

// 获取文档尺寸, 针对HTML5的文档声明
document.body.clientWidth;
document.body.clientHeight;

// 文档scroll
document.body.scrollTop;
document.body.scrollLeft;

// 参考视口左上角
scrollTo(100, 100);

// 参考当前位置
scrollBy(100, 100);

// 获取相对窗口的位置
elem.getBoundingClientRect().left;
elem.getBoundingClientRect().top;

// 获取相对文档的位置
elem.getBoundingClientRect().left + document.body.scrollLeft;
elem.getBoundingClientRect().top + document.body.scrollTop;
```
