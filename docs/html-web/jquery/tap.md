# jQuery 【移动端操作】

```js
$().tap(testAlert);
$().taphold(testAlert);

$().swipe(testAlert);
$().swipeleft(testAlert);
$().swiperight(testAlert);

$().popup('open', {
	positionTo: 'origin',
	transition: 'pop'
}).on('popupafteropen', fun);

$().popup('close').on('popupafterclose', fun);
```
