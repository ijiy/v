# html2canvas 【自定义截屏】

```js
// loading
const cloneDom = document.querySelector('figure').cloneNode(true);

// 自定义截图内容
cloneDom.classList.add('save');

body.appendChild(cloneDom);

html2canvas(cloneDom, {
	// 内容含非同源地址的图片
	useCORS: true,
}).then(res => {
	body.removeChild(cloneDom);

	const imgUrl = res.toDataURL('image/png');

	if ('mobile') {
		// loaded
		// 已保存至相册
	} else {
		const aTag = document.createElement('a');
		const aEvent = document.createEvent('MouseEvents');

		aTag.style.display = 'none';
		aTag.href = imgUrl;
		aTag.download = 'name';

		body.appendChild(aTag);
		aEvent.initEvent('click');
		aTag.dispatchEvent(aEvent);
		body.removeChild(aTag);

		// loaded
		// 保存成功
	}
});
```

## 文献 🎨
* [文档](http://html2canvas.hertzen.com)
