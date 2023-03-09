# jQuery 【DOM操作】

## 节点操作
```js
// ul内部后插入第一个li, 相当于把第一个li移动到ul内部后
$('ul').append($('li:first'));
// ul内部前插入最后一个li, 相当于$('li:last').prependTo('ul')
$('ul').prepend($('li:last'));
// 最后一个li后插入第一个li
$('li:last').after($('li:first'));
// 第一个li前插入最后一个li
$('li:first').before($('li:last'));

// 删除第一个li
$('li:first').remove();
// 选择性删除节点
$('li').remove('li[title!=3]');
// 隐藏第一个li
$('li:first').detach();
// 清空第一个li里的内容
$('li:first').empty();

$('li:first').clone().appendTo('ul');
// 同时克隆第一个li绑定的事件
$('li:first').clone(true).appendTo('ul');

// 第一个li替换成最后一个li
$('li:first').replaceWith($('li:last'));

// li分别用多个div包裹
$('li').wrap('<div></div>');
// li统一用一个div包裹
$('li').wrapAll('<div></div>');
// li子内容用div包裹
$('li').wrapInner('<div></div>');

// 访问iframe内
$('iframe').contents().find('body').height(100);
// 访问iframe外
$(window.parent.document).find('body');

// 聚焦与选中
$('input').focus().select();

// 查找子级
$('li').children();
// 查找父级
$('li').parent();
// 查找指定祖级
$('li').parents('.box');
// 查找第一个祖级
$('li').closest('ul');
// 查找下一个
$('li').next();
// 查找上一个
$('li').prev();
// 查找同辈
$('li').siblings();
// 查找与表达式匹配的
$('li').find('li');
```

## 属性操作
```js
// 获取属性
$('img').attr('src');
// 设置属性
$('img').attr('src', '1.png');
// 设置多个属性
$('img').attr('src':'1.png', 'title':'1');

// 判断属性
$('input').prop('checked');

// 删除属性
$('img').removeAttr('src');
```

## 样式操作
```js
// 设置并覆盖原属性中的样式
$('img').attr('class', 'a');
// 在原属性中追加样式
$('img').addClass('a');

// 移除样式
$('img').removeClass('a b c');

// 切换样式
$('img').toggleClass('a');

// 相当于$('img').$.isEmptyObject('.a')
$('img').hasClass('a');
```

## 获取和设置html, text, value
```js
// 获取p中内容, 去除开始与结尾可能存在的空格: $.trim($('p').html())
$('p').html();
// 设置p中内容
$('p').html('');

// 获取p中文本内容, 开始与结尾可能存在空格
$('p').text();
// 设置p中文本内容
$('p').text('');

// 获取文本框的值
$(':text').val();
// 设置文本框中的值
$(':text').val('');

// 设置值为'a'的下拉框被选中, 相当于$('[value=a]:option').attr('selected', true)
$(':select').val('a');
// 设置值为'a', 'b'的复选框被选中
$(':checkbox').val(['a', 'b']);
```

## CSS-DOM操作
```js
// 不包括border
$('div').innerWidth();
$('div').outerHeight();
// $('div').height()
$('div').css('height');
$('div').css('height', '100');
$('div').css({background: '#F00', opacity: '.5'});
// 相对视窗偏移
$('div').offset({top: 10, left: 10});
// 相对定位偏移
$('div').position({top: 10, left: 10});
// 滚动条偏移
$('div').scrollTop(10);
```

## 其它
* 是否jquery对象
	+ `obj instanceof jQuery`

* 是否zepto对象
	+ `Zepto.zepto.isZ(obj)`
