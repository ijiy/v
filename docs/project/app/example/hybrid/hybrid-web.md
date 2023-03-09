# 离线混合开发 【WEB端示例】

## 数据接收
* 链接携带
	+ token
	+ mode: 'prod' 正式环境, 'test' 测试环境
	+ assets: APP资源路径
		- 需要 `decodeURIComponent` 解码
		- 资源未加载完成将不会有 `assets`

```js
'/index.html?mode=test&token=xxx&assets=zzz';

const {
	mode,
	token,
	assets,
} = Object.fromEntries(new URLSearchParams(location.search));
```

* 动态注入
	+ assets: APP资源路径
		- 仅当资源未加载完成, 才动态注入资源路径
		- 需要web初始化完成(`getFromApp`可接收数据)后通知APP

```js
function getFromApp(vType, vData) {
	switch (vType) {
		case 'assets':
			console.log(vData);
			break;
		case 'onShow':
			console.log('后续可能补充: 后台 -> 前台');
			break;
		case 'onHide':
			console.log('后续可能补充: 前台 -> 后台');
			break;
	}
}
```

## 数据上传
```js
function postToApp(eType, eData){
	uni.webView.postMessage({
		data: JSON.stringify({
			eType: eType,
			eData: eData,
		}),
	});
}

// 上传日志
postToApp('logs', [
	{
		date: Date.now(),
		desc: '@P home => paramId:123',
	},
	{
		date: Date.now(),
		desc: '@R url => {json: ...}',
	},
]);

/*
* web初始化完成
* 目的是通知APP可以发送数据
*/
postToApp('ready');

/**
* 通知APP刷新相关页面
* 在返回前可多次执行
*/
postToApp('refresh');

/**
* 返回上一级页面
* 纯粹返回也可使用 uni.webView.navigateBack({ delta: 1 });
*/
postToApp('goback');
```

## 日志格式
* 普通内容
	+ `option => desc`
	+ 等同于 `@C option => desc`

* 进入页面
	+ `@P home`
	+ `@P test => urlParam`

* 接口请求
	+ `@R url => res`

* 异常信息 (大多数是 catch 抛出, 比如 接口请求, try)
	+ `@E url => errMsg`
	+ `@E try => errMsg`

## 多媒体
* 音频
```html
<audio
	id="id_audio"
	@ended="audioEnd"
/>
```

```js
{
	audioCallback: null,
	audioEnd() {
		if (this.audioCallback) {
			this.audioCallback();
			this.audioCallback = null;
		}
	},
	/**
	 * 调用即播放音频
	 * @param src 音频路径, 支持网络和本地路径
	 * @param callback 音频播放结束的回调函数
	 * @example
		 playAudio('xx/xxx.mp3', () => {
			 // audio play has ended
		 });
	 */
	playAudio(src, callback) {
		if (id_audio.paused) {
			id_audio.src = src;

			id_audio.play();

			if (callback) {
				this.audioCallback = callback;
			}
		} else {
			id_audio.pause();
		}
	},
	// 停止音频, "返回"或src为空, 都会停止停止音视频
	stopAudio() {
		id_audio.pause();
	},
}
```

* 视频
```html
<video
	id="id_video"
	preload="auto"
	autoplay
	controls
	playsinline
	controlsList="nodownload noplaybackrate"
/>
```

```js
// 赋予本地或网络视频地址, 即自动播放
id_video.src = 'xx/xxx.mp4';

id_video.addEventListener('ended', () => {
	// 视频播放结束的回调函数

	// 手动结束视频 或 id_video.style.display = 'none';
	id_video.src = '';
});
```

```css
/*需要指定宽高; display 设置为 block, flex, inline-flex, 以避免底部白边*/
video {
	display: block;
	width: 100%;
	height: 100%;
}
```

动态注入`<video>`将无法自动播放
