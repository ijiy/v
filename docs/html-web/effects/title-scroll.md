# 浏览器标题滚动 【JS】

```js
/*
* 浏览器标题滚动
*/
function titleScroll() {
	const docTitle = document.title;
	let scrollStep = 0;

	(function () {
		document.title = docTitle.substring(scrollStep, docTitle.length) + docTitle.substring(0, scrollStep);

		scrollStep++;
		scrollStep > docTitle.length && (scrollStep = 0);

		requestAnimationFrame(arguments.callee);
	})();
}
```
