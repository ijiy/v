# JS 【DOM】

## 节点
* 获取节点对象
	+ querySelector
	+ getElementById
	+ documentElement
	+ doctype
	+ title
	+ head
	+ body

* 获取节点集合
	+ querySelectorAll
	+ getElementsByName
	+ getElementsByTagName
	+ getElementsByClassName
	+ scripts
	+ images
	+ embeds
	+ forms
	+ links

* 带id的元素会创建全局变量, 不用再获取节点

```js
// 创建节点
const node = document.createElement('标签名');

// 获取节点
const elem = document.body;

// 上一节点
const prev = elem.previousElementSibling || elem.previousSibling;

// 下一节点
const next = elem.nextElementSibling || elem.nextSibling;

// 克隆节点, (false) 不包含属性
const newNode = elem.cloneNode(true);

// 父节点
elem.parentNode;

// 子节点
elem.children[0];

// 替换节点
elem.parentNode.replaceChild(newNode, elem);

// 删除节点
elem.parentNode.removeChild(elem);

// elem内容后面插入节点
elem.appendChild(node);

// elem内容前面插入节点
elem.insertBefore(node, elem.childNodes[0]);

// elem内容后面插入字符串
elem.insertAdjacentHTML('beforeEnd', '<i></i>');

// elem内容前面插入字符串
elem.insertAdjacentHTML('afterBegin', '<i></i>');

// elem后面插入字符串
elem.insertAdjacentHTML('afterEnd', '<i></i>');

// elem前面插入字符串
elem.insertAdjacentHTML('beforeBegin', '<i></i>');
```

## 标签-内容
```js
// 设置或获取 标签的所有内容
elem.innerHTML

// 设置或获取 标签的所有内容, 包括自身
elem.outerHTML

// 设置或获取 标签的文本内容
elem.innerText

// 设置时, 包括自身在内设成文本; 获取时, 只有文本内容
elem.outerText
```

## 标签-属性
```js
// 获取 属性值
elem.getAttribute('属性名');

// 设置 属性值
elem.setAttribute('属性名', '属性值');

// 移除 属性
elem.removeAttribute('属性名');
```

## 标签-class
```js
// 获取 class属性
elem.className;

// 设置 class属性
elem.className += ' a';

// class添加类名
elem.classList.add('a');

// class移除类名
elem.classList.remove('a');

// 是否包含类名
elem.classList.contains('a');
```

## 标签-style
```js
// style
elem.style.cssText;
elem.style.cssText += '; font-size: 20px; color: #000;';

elem.style.fontSize;
elem.style.fontSize = '20px';

// <div id="test"></div>
console.log(getComputedStyle(test)['height']);
```

## 按键
```js
document.addEventListener('keydown', function (e) {
	var _t = e.keyCode;

	switch (_t) {
		case 13: _t = 'Enter'; break;
		case 27: _t = 'Esc'; break;
		case 32: _t = 'Space'; break;
		case 37: _t = 'Right'; break;
	}

	console.log(_t);
});
```

## 自动触发事件
```js
document.body.addEventListener('touchend', function () {
	console.log(this);
});

document.body.dispatchEvent(new MouseEvent('touchend'));

_input.addEventListener('input', function () {
	console.log(this)
});

_input.dispatchEvent(new Event('input'));
```
