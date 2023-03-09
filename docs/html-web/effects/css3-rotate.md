# CSS3 卡片翻转

```vue
<template>
	<div class="card">
		<div class="a"></div>
		<div class="b"></div>
	</div>
</template>

<style>
	.card {
		position: relative;
		width: 100px;
		height: 100px;
		transform-style: preserve-3d;
		transition: transform .5s ease-out;
	}
	.b,
	.a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #f00;
		backface-visibility: hidden;
	}
	.b {
		background: #00f;
		transform: rotateY(-180deg);
	}

	.card:hover {
		transform: rotateY(180deg);
	}
</style>
```
