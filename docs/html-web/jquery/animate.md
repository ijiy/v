# jQuery 动画 【animate】

```js
// 显示和隐藏, toggle()
$('p').show('slow'); // hide()
	$('p').animate({
		height: 'show',
		width: 'show',
		opacity: 'show'
	}, 600);

// 淡入和淡出, fadeToggle()
$('p').fadeIn('normal'); // fadeOut()
	$('p').animate({
		opacity: 'show'
	}, 400);

// 划入和划出, slideToggle()
$('p').slideDown('fast'); // slideUp()
	$('p').animate({
		height: 'show'
	}, 200);

	$('p').stop().slideToggle('slow', function () {
		$(this).is(':hidden') ? $(this).addClass('x') : $(this).removeClass('x');
	});

// 渐变
$('p').fadeTo(100, .1);
	$('p').animate({
		opacity: .1
	}, 100);

// 累积动画
$('p').animate({
	width: '+=10'
}, 100);

// 同时动画
$('p').animate({
	width: 100,
	height: 100
}, 100);

// 顺序动画
$('p').animate({
	width: 100
}, 100).animate({
	height: 100
}, 100);

// 非动画插队执行
$('p').animate({
	width: 100
}).css('height',100);

// 停止动画
$('p').stop().animate({ // 结束当前动画, 然后执行队列中其他动画
	width: 100
});
$('p').stop(false, true); // 结束当前动画, 并直接进入动画的末状态, 然后执行队列中其他动画

$('p').stop(true).animate({ // 结束当前和队列中的动画, 队列中没动画就不需要true参数
	width: 100,
	height: 100
});
$('p').stop(true, true); // 结束当前和队列中的动画, 并直接进入动画的末状态

// 延迟动画
$('p').animate({
	width: 100
}).delay(100).fadeOut(100);

// 判断动画状态
!$('p').is(':animated') && $('p').animate({
	width: 100
});

// 同级变化
$(this).toggleClass('x').siblings().removeClass('x');
$(this).siblings().removeClass('x').end().toggleClass('x');

// 运动到页面底部
$('html, body').animate({
	scrollTop: $('body')[0].scrollHeight
}, 300);
```
