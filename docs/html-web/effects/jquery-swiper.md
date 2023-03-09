# swiper 【jQuery】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css">

	<style>
		body {
			margin: 0;
		}
		.tab-wrap {
			overflow: hidden;
			line-height: 80px;
			text-align: center;
		}
		.tab-btn .swiper-slide {
			width: 50%;
			height: 80px;
			box-shadow: inset 0 0 1px 1px #eee;
		}
		.tab-btn .on {
			background: #eee;
		}
		.tab-con .swiper-slide {
			overflow: auto;
			height: calc(100vh - 80px);
		}
	</style>
</head>
<body>
	<div class="tab-wrap" id="tab_wrap">
		<div class="tab-btn" id="tab_btn">
			<div class="swiper-wrapper">
				<div class="swiper-slide">1</div>
				<div class="swiper-slide">2</div>
				<div class="swiper-slide">3</div>
			</div>
		</div>

		<div class="tab-con" id="tab_con">
			<div class="swiper-wrapper">
				<div class="swiper-slide">a</div>
				<div class="swiper-slide">b</div>
				<div class="swiper-slide">c</div>
			</div>
		</div>
	</div>

	<script src="https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
	<script src="https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.jquery.min.js"></script>
	<script>
		$(function() {
			const slideBtn = $('#tab_btn .swiper-slide'),
				visibBtn = $('#tab_wrap').width() / slideBtn.width(),
				initialSlide = 0,

				swiperBtn = new Swiper('#tab_btn', {
					initialSlide: visibBtn * parseInt(initialSlide / visibBtn),
					freeMode: true, // 惯性滑动
					slidesPerView: 'auto', // 容器能同时显示模块的数量, 默认1
					onInit: function () {
						slideBtn.eq(initialSlide).addClass('on');
					},
					onTap: function (e) {
						slideBtn.removeClass('on').eq(swiperBtn.clickedIndex).addClass('on');
						swiperCon.slideTo(swiperBtn.clickedIndex);
					}
				}),

				swiperCon = new Swiper('#tab_con', {
					initialSlide, // 初始显示模块索引值
					longSwipesRatio: .2, // 发生滑动的触摸比例, 默认.5
					onSlideChangeStart: function() {
						slideBtn.removeClass('on').eq(swiperCon.activeIndex).addClass('on');
						swiperBtn.slideTo(visibBtn * parseInt(swiperCon.activeIndex / visibBtn));
					}
				});
		});
	</script>
</body>
</html>
```
