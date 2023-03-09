# 上传图片自定义锚点 【JS】

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		body, figure, p, h3 {
			margin: 0;
		}

		.flex {
			display: -webkit-flex;
			display: flex;
		}
		.jc {
			-webkit-justify-content: center;
			justify-content: center;
		}
		.jb {
			-webkit-justify-content: space-between;
			justify-content: space-between;
		}
		.ac {
			-webkit-align-items: center;
			align-items: center;
		}

		.box-dec {
			width: 750px;
		}
		.box-dec .btn-input {
			width: 80px;
			height: 40px;
			font-size: inherit;
			border-radius: 0;
			background: #f05050;
			color: #fff;
			border: none;
		}
		.box-dec .btn-file {
			overflow: hidden;
			position: relative;
		}
		.box-dec .btn-file:after {
			content: '上传';
		}
		.box-dec .btn-file input[type=file] {
			position: absolute;
			top: 0;
			z-index: 1;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			cursor: default;
		}

		.box-dec section {
			position: relative;
			box-shadow: inset 0 0 1px #000;
			height: 750px;
		}

		.box-dec figure {
			overflow: hidden;
			position: absolute;
			top: 0;
			left: 0;
			-webkit-user-select: none;
			cursor: crosshair;
		}
		.box-dec figure img {
			display: block;
			pointer-events: none;
		}
		.box-dec figure div {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 0;
			height: 0;
			background: rgba(0, 0, 0, .5);
			border: 1px dashed #000;
			cursor: move;
		}
		.box-dec figure p {
			padding-top: 10px;
		}
		.box-dec .btn-delete,
		.box-dec .btn-info {
			float: right;
			position: relative;
			width: 20px;
			height: 20px;
			border-radius: 10px;
			background: #fff;
			text-align: center;
			font-size: 14px;
			font-weight: bold;
			box-sizing: border-box;
			box-shadow: 0 0 6px #000;
			cursor: pointer;
		}
		.box-dec figure .btn-delete,
		.box-dec figure .btn-info {
			opacity: 0;
			pointer-events: none;

			-webkit-transition: .3s ease-out;
			transition: .3s ease-out;
		}
		.box-dec figure div:hover .btn-delete,
		.box-dec figure div:hover .btn-info {
			opacity: 1;
			pointer-events: auto;
		}
		.box-dec .btn-delete:active,
		.box-dec .btn-info:active {
			background: #ccc;
		}
		.box-dec .btn-delete:after,
		.box-dec .btn-info:after {
			content: '!';
		}
		.box-dec figure .btn-delete {
			margin: 0 10px;
		}
		.box-dec .btn-delete:before,
		.box-dec .btn-delete:after {
			position: absolute;
			top: 50%;
			left: 50%;
			content: '';
			width: 14px;
			height: 2px;
			margin: -1px 0 0 -7px;
			background: #000;
			border-radius: 1px;

			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
		}
		.box-dec .btn-delete:after {
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
		}

		.box-dec .dog {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: 10px;
			height: 10px;
		}
		.box-dec .dog:nth-child(2) {
			left: auto;
			right: 0;

			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
		.box-dec .dog:nth-child(3) {
			left: auto;
			right: 0;
			top: auto;
			bottom: 0;

			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}
		.box-dec .dog:nth-child(4) {
			top: auto;
			bottom: 0;

			-webkit-transform: rotate(-90deg);
			transform: rotate(-90deg);
		}
		.box-dec .dog:after,
		.box-dec .dog:before {
			position: absolute;
			top: 0;
			left: 0;
			content: '';
			width: 4px;
			height: 10px;
			background: rgba(255, 255, 255, .6);
		}
		.box-dec .dog:after {
			width: 10px;
			height: 4px;
		}

		.box-dec .dog[data-dog="0"] {
			cursor: nw-resize;
		}
		.box-dec .dog[data-dog="1"] {
			cursor: ne-resize;
		}
		.box-dec .dog[data-dog="2"] {
			cursor: se-resize;
		}
		.box-dec .dog[data-dog="3"] {
			cursor: sw-resize;
		}

		.box-dec mask {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 11;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, .5);
			opacity: 0;
			color: #fff;
			pointer-events: none;

			-webkit-transition: .3s ease-out;
			transition: .3s ease-out;
		}
		.box-dec mask.show {
			opacity: 1;
			pointer-events: auto;
		}
		.box-dec mask p {
			font-size: 30px;
		}

		.box-dec mask form {
			width: 500px;
			padding: 20px;
			background: #fff;
			color: #333;
		}
		.box-dec mask h3 {
			position: relative;
			height: 50px;
			font-size: 30px;
		}
		.box-dec mask .btn-delete {
			position: absolute;
			top: 15px;
			right: 15px;
		}
		.box-dec mask .pop-input {
			height: 30px;
			margin-top: 20px;
			font-size: 16px;
		}
		.box-dec mask label {
			width: 60px;
			padding-right: 10px;
		}
		.box-dec mask .chose {
			width: calc(100% - 60px);
			height: 100%;
			padding-left: 10px;
			box-sizing: border-box;
		}
		.box-dec mask .btn-input {
			margin: 40px 0;
		}
	</style>
</head>
<body>
	<div class="box-dec">
		<form onsubmit="page.submitPos(event)">
			<div class="flex ac jb">
				<div class="btn-file flex ac jc btn-input">
					<input type="file" accept="image/gif,image/jpg,image/jpeg,image/bmp,image/png" onchange="page.uploadFile(this)">
				</div>
				<input type="submit" class="btn-input flex jc ac" value="保存">
			</div>

			<section>
				<figure oncontextmenu="return false" onmousedown="page.mousedown(event)" onmousemove="page.mousemove(event)"></figure>
			</section>
		</form>

		<mask class="info flex ac jc">
			<form onsubmit="page.submitInfo(event)">
				<h3 class="flex ac jc">
					<a class="btn-delete" onclick="page.hide(page.closest(this, 'mask'))"></a>
				</h3>
				<article>
					<div class="pop-input flex ac">
						<label for="">类型:</label>
						<input class="chose" type="text" name="text">
					</div>
					<div class="pop-input flex ac">
						<label for="">详细:</label>
						<select class="chose" name="select">
							<option value=""></option>
							<option value="123">选择123</option>
							<option value="321">选择321</option>
						</select>
					</div>
				</article>
				<div class="flex jc">
					<input type="submit" class="btn-input flex jc ac" value="保存">
				</div>
			</form>
		</mask>

		<mask class="load flex ac jc">
			<p>上传中...</p>
		</mask>
	</div>

	<script>
		const page = {
			data: {
				x1: 0, // 距左%
				y1: 0, // 距上%
				x2: 0,
				y2: 0,
				src: '',
				info: {}
			},

			param: {
				move: 0,
				drag: 0,
				dont: 0,
				down: 0,
			},

			minSize: 40,

			init: function () {
				const _ts = this,
					_dc = document.querySelector('.box-dec'),
					_bx = _dc.querySelector('section'),
					_tf = _dc.querySelector('figure');

				_ts.box = {
					w: _ts.style(_bx, 'width'),
					h: _ts.style(_bx, 'height'),
					figure: _tf,
					load: _dc.querySelector('.load'),
					info: _dc.querySelector('.info'),
					article: _dc.querySelector('article'),
					r: _tf.getBoundingClientRect()
				};
			},

			uploadFile: function (_this) {
				const _ts = this,
					_r = new FileReader();

				_r.readAsDataURL(_this.files[0]);

				_r.onload = function () {
					const _td = _ts.data,
						_tb = _ts.box,
						_tm = _tb.load,
						_c = document.createElement('canvas'),
						_x = _c.getContext('2d'),
						_m = new Image();

					_tm.className += ' show';
					_m.src = this.result;

					_m.onload = function () {
						const _w = this.width,
							_h = this.height,
							_tf = _tb.figure;

						_c.width = _w;
						_c.height = _h;

						_x.drawImage(_m, 0, 0, _w, _h);

						_td.src = _c.toDataURL();

						_tf.innerHTML = '<img src="' + _c.toDataURL() + '" style="' + (_w > _h ? 'width: ' + Math.min(_tb.w, _w) + 'px; height' : 'height: ' + Math.min(_tb.h, _h) + 'px; width') + ': auto;">';
						_tb.img = _tf.querySelector('img');

						const _ti = _tb.img;

						_ti.onload = function () {
							_tf.style.cssText = 'width: ' + _ti.width + 'px; height: ' + _ti.height + 'px;';
							_ts.param.load = 1;
							_ts.hide(_tm);
						}
					}
				}
			},

			submitPos: function (e) {
				e.preventDefault();

				const _ts = this,
					_td = _ts.data;

				if (_td.src) {
					const _a = [],
						_f = _ts.box.figure.querySelectorAll('div');

					for (var i = 0; i < _f.length; i++) {
						var _o = JSON.parse(_f[i].getAttribute('data-pos'));
						_o.info = JSON.parse(_f[i].getAttribute('data-info'));
						_a.push(_o);
					}

					console.log({
						src: _td.src,
						map: _a
					});
				}
			},

			submitInfo: function (e) {
				e.preventDefault();

				const _ts = this,
					_td = _ts.data,
					_tb = _ts.box,
					_cs = _ts.box.article.querySelectorAll('.chose'),
					_o = {};

				_cs.forEach(function (_item) {
					_o[_item.name] = _item.value;
				});

				_tb.now.setAttribute('data-info', JSON.stringify(_o));
				_ts.hide(_tb.info);
			},

			style: function (_e, _s) {
				return parseInt(_e.currentStyle ? _e.currentStyle[_s] : getComputedStyle(_e)[_s]);
			},

			closest: function (_e, _s) {
				const _m = _e.matches || _e.webkitMatchesSelector || _e.mozMatchesSelector || _e.msMatchesSelector;

				while (_e) {
					if (_m.call(_e, _s)) break;
					_e = _e.parentElement;
				}

				return _e;
			},

			hide: function (_e) {
				_e.className = _e.className.replace(' show', '');
			},

			mousedown: function (e) {
				const _ts = this,
					_tp = _ts.param;

				if (_tp.load) {
					const _tb = _ts.box,
						_et = e.target;

					if (_et.className == 'dog') {
						_tp.ex = e.x;
						_tp.ey = e.y;

						_tp.dog = _et;
						_tb.a = page.closest(_tp.dog, 'div');
						_tp.edit = 1;
					} else if (_et.tagName == 'FIGURE') {
						const _td = _ts.data,
							_tr = _tb.r,
							_ti = _tb.img;

						_td.x1 = 100 * (e.x - _tr.left) / _ti.width;
						_td.y1 = 100 * (e.y - _tr.top) / _ti.height;

						_tb.a = document.createElement('div');
						_tb.figure.appendChild(_tb.a);
						_tp.drag = 1;
					} else if ((_et.className == 'btn-info' || _et.className == 'btn-delete') && e.which == 1) {
						_tp.tap = 1;
					} else {
						_tp.ex = e.x;
						_tp.ey = e.y;
						_tb.a = _et.className == 'div' ? _et : page.closest(_et, 'div');

						_tp.down = 1;
					}
				}
			},

			mousemove: function (e) {
				const _ts = this,
					_tp = _ts.param,
					_tb = _ts.box,
					_ta = _tb.a;

				if (_tp.load && _ta) {
					const _td = _ts.data,
						_ti = _tb.img,
						_w = _ti.width,
						_h = _ti.height;

					if (_tp.drag) {
						const _tr = _tb.r;

						_td.x2 = 100 * (e.x - _tr.left) / _w;
						_td.y2 = 100 * (e.y - _tr.top) / _h;
					} else {
						const _x = 100 * (e.x - _tp.ex) / _w,
							_y = 100 * (e.y - _tp.ey) / _h,
							_d = JSON.parse(_ta.getAttribute('data-pos')),

							_x1 = _d.x1,
							_y1 = _d.y1,
							_x2 = _d.x2,
							_y2 = _d.y2;

						if (_tp.down) {
							_td.x1 = _x1 + _x;
							_td.x2 = _x2 + _x;
							_td.y1 = _y1 + _y;
							_td.y2 = _y2 + _y;

							_td.x1 < 0 && (_td.x1 = 0);
							_td.x2 < 0 && (_td.x2 = 0);
							_td.y1 < 0 && (_td.y1 = 0);
							_td.y2 < 0 && (_td.y2 = 0);

							_td.x1 > 100 && (_td.x1 = 100);
							_td.x2 > 100 && (_td.x2 = 100);
							_td.y1 > 100 && (_td.y1 = 100);
							_td.y2 > 100 && (_td.y2 = 100);
						} else if (_tp.edit) {
							const _dog = parseInt(_tp.dog.getAttribute('data-dog'));

							if (_dog == 0) {
								if (_x1 > _x2) {
									_td.x1 = _x1;
									_td.y1 = _y1;
									_td.x2 = _x2 + _x;
									_td.y2 = _y2 + _y;
								} else {
									_td.x1 = _x1 + _x;
									_td.y1 = _y1 + _y;
									_td.x2 = _x2;
									_td.y2 = _y2;
								}
							} else if (_dog == 1) {
								if (_x1 > _x2) {
									_td.x1 = _x1 + _x;
									_td.y1 = _y1;
									_td.x2 = _x2;
									_td.y2 = _y2 + _y;
								} else {
									_td.x1 = _x1;
									_td.y1 = _y1 + _y;
									_td.x2 = _x2 + _x;
									_td.y2 = _y2;
								}
							} else if (_dog == 2) {
								if (_x1 > _x2) {
									_td.x1 = _x1 + _x;
									_td.y1 = _y1 + _y;
									_td.x2 = _x2;
									_td.y2 = _y2;
								} else {
									_td.x1 = _x1;
									_td.y1 = _y1;
									_td.x2 = _x2 + _x;
									_td.y2 = _y2 + _y;
								}
							} else if (_dog == 3) {
								if (_x1 > _x2) {
									_td.x1 = _x1;
									_td.y1 = _y1 + _y;
									_td.x2 = _x2 + _x;
									_td.y2 = _y2;
								} else {
									_td.x1 = _x1 + _x;
									_td.y1 = _y1;
									_td.x2 = _x2;
									_td.y2 = _y2 + _y;
								}
							}

							_td.x1 < 0 && (_td.x1 = 0);
							_td.x2 < 0 && (_td.x2 = 0);
							_td.y1 < 0 && (_td.y1 = 0);
							_td.y2 < 0 && (_td.y2 = 0);

							_td.x1 > 100 && (_td.x1 = 100);
							_td.x2 > 100 && (_td.x2 = 100);
							_td.y1 > 100 && (_td.y1 = 100);
							_td.y2 > 100 && (_td.y2 = 100);
						}
					}

					if (_tp.drag || _tp.down || _tp.edit) {
						_ta.style.cssText = 'left: ' + Math.min(_td.x1, _td.x2) + '%; top: ' + Math.min(_td.y1, _td.y2) + '%; width: ' + Math.abs(_td.x2 - _td.x1) + '%; height: ' + Math.abs(_td.y2 - _td.y1) + '%;';

						_tp.move = 1;
					}
				}
			},

			mouseup: function (e) {
				const _ts = this,
					_td = _ts.data,
					_tp = _ts.param,
					_tb = _ts.box,
					_ta = _tb.a,
					_t = e.target;

				if (!_tp.move && _t.className == 'btn-info' && _tp.tap) {
					_tb.info.className += ' show';
					_tb.now = _t.parentNode.parentNode;

					let _d = _tb.now.getAttribute('data-info');

					if (_d) {
						_d = JSON.parse(_d);

						for (_i in _d) {
							_tb.article.querySelector('[name=' + _i + ']').value = _d[_i];
						}
					} else {
						_cs = _ts.box.article.querySelectorAll('.chose').forEach(function (_item) {
							_item.value = '';
						});
					}
				} else if (!_tp.move && _t.className == 'btn-delete' && _tp.tap) {
					const _p = _t.parentNode.parentNode;

					_p.parentNode.removeChild(_p);
				} else if (_tp.load && (_tp.drag || _tp.down || _tp.edit)) {
					if (Math.min(page.style(_ta, 'width'), page.style(_ta, 'height')) < page.minSize) {
						_ta.parentNode.removeChild(_ta);
					} else if (_tp.move) {
						_ta.setAttribute('data-pos', JSON.stringify({
							x1: _td.x1,
							x2: _td.x2,
							y1: _td.y1,
							y2: _td.y2
						}));

						_tp.drag && (_ta.innerHTML = '<a class="dog" data-dog="0"></a><a class="dog" data-dog="1"></a><a class="dog" data-dog="2"></a><a class="dog" data-dog="3"></a><p><a class="btn-delete"></a><a class="btn-info"></a></p>');
					}
				}

				_tp.drag = 0;
				_tp.tap = 0;
				_tp.down = 0;
				_tp.edit = 0;
				_tp.move = 0;
				_tb.a = '';
			}
		};

		page.init();

		document.onmouseup = function (event) {
			page.mouseup(event);
		};

/**
 * 渲染方式
function render() {
	let _o = ws.getItem('qp_dec');
	if (_o) {
		_o = JSON.parse(_o);
		ws.removeItem('qp_dec');
		const _img = new Image();
		_img.src = _o.src;
		_img.onload = function () {
			box_svg.innerHTML = '<img src="' + _o.src + '">';
			for (var i = 0; i < _o.map.length; i++) {
				var _map = document.createElement('a'),
					_m = _o.map[i];
				_map.className = 'box-frame';
				_map.onclick = 'console.log(' + _m.info + ')';
				_map.style.cssText = 'left: '+ Math.min(_m.x1, _m.x2)
					+ '%; top: ' + Math.min(_m.y1, _m.y2)
					+ '%; width: ' + Math.abs(_m.x2 - _m.x1)
					+ '%; height: ' + Math.abs(_m.y2 - _m.y1) + '%;';
				box_svg.appendChild(_map);
			}
		}
	}
}
*/
	</script>
</body>
</html>
```
