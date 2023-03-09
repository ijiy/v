# svg 【圆形进度】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		svg {
			width: 100px;
			height: 100px;
			transform: rotate(-90deg);
		}
	</style>
</head>
<body>
	<svg id="id_svg">
		<!--内圆背景; r="49"小1像素, 是为了避免锯齿溢出-->
		<circle
			cx="50"
			cy="50"
			r="49"
			fill="#f0f"
		></circle>

		<!--进度条背景-->
		<circle
			cx="50"
			cy="50"
			r="45"
			stroke-width="10"
			stroke="#FFE8CC"
			fill="none"
		></circle>

		<!--进度条-->
		<circle
			class="svg-bar"
			cx="50"
			cy="50"
			r="45"
			stroke-width="10"
			stroke="#F2AE57"
			fill="none"
		></circle>
	</svg>

	<button onclick="svgInit(2, 0)">初始化</button>
	<button onclick="svgStart()">开始</button>
	<button onclick="svgStop()">暂停</button>

	<script>
		// 倒计总时间
		let duration;
		// 已用时间
		let progress;
		// 剩余时间
		let lefTime;

		// 弧长
		const svgC = 45 * 2 * Math.PI;
		// svg
		const svgBar = document.querySelector('.svg-bar');

		// 开始时间
		let timeStart;

		// 播放状态
		let svgPlay = false;

		function svgInit(d, p) {
			duration = d;
			progress = p;

			svgPlay = false;
			lefTime = duration - progress;

			svgBar.style.cssText = `stroke-dasharray: ${svgC}, ${svgC};`;
			svgBar.style.cssText += `stroke-dashoffset: ${svgC * lefTime / duration}`;

			svgBar.classList.remove('cla-circle');
		}

		svgInit(2, 0);

		// 开始
		function svgStart() {
			if (svgPlay) {
				return;
			}

			svgPlay = true;
			lefTime = duration - progress;

			const style = document.createElement('style');

			style.innerHTML = `
				@keyframes ani_circle {
					0% {stroke-dashoffset: ${svgC * lefTime / duration};}
					100% {stroke-dashoffset: 0;}
				}
				.cla-circle {
					animation: ani_circle ${lefTime}s cubic-bezier(0, 0, 1, 1) forwards;
				}
			`;

			document.getElementsByTagName('head')[0].appendChild(style);

			svgBar.style.cssText = `stroke-dasharray: ${svgC}, ${svgC};`;

			svgBar.classList.add('cla-circle');
		}

		// 暂停
		function svgStop() {
			if (!svgPlay) {
				return;
			}

			svgPlay = false;
			progress += (new Date() - timeStart) / 1e3;
			lefTime = duration - progress;

			svgBar.style.cssText += `stroke-dashoffset: ${svgC * lefTime / duration};`;
			svgBar.classList.remove('cla-circle');
		}

		svgBar.addEventListener('animationstart', function(evt) {
			timeStart = new Date();
		});

		svgBar.addEventListener('animationend', function(evt) {
			svgPlay = false;
			progress = 0;

			svgBar.style.cssText += `stroke-dashoffset: 0;`;
			svgBar.classList.remove('cla-circle');
		});
	</script>
</body>
</html>
```
