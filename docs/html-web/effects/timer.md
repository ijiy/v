# 倒计时 【JS】

```js
/**
 *
 * @param date 倒计时时间对象
 * @param callback 倒计时结束的回调
 * @example
	qpTime({
		s: 开始 (时间戳 | Date)
		e: 结束,
		m: 毫秒
	}, res => {
		res = {
			d: 天,
			h: 时,
			m: 分,
			s: 秒,
			i: 毫秒,
			t: 时间戳
		}
	});
 * @return {number} 返回计时器对象
 */
const qpTime = (date, callback) => {
	var t = this.t,
		n = new Date(),
		k = date.m ? 100 : 1e3,
		l = date.e - date.s;

	t = setInterval(z, k);
	z();

	function z() {
		var c = l - (new Date - n),
			d = {
				d: '00',
				h: '00',
				m: '00',
				s: '00',
				i: '00',
				t: 0
			};

		0 < c ? (d = {
			d: y(Math.floor(c / 1e3 / 60 / 60 / 24)),
			h: y(Math.floor(c / 1e3 / 60 / 60 % 24)),
			m: y(Math.floor(c / 1e3 / 60 % 60)),
			s: y(Math.floor(c / 1e3 % 60)),
			i: y(Math.floor(c % 1e3 / 10)),
			t: c
		}) : clearInterval(t);

		return callback(d);
	}

	function y(e) {
		return 10 > e ? '0' + e : e;
	}

	return t;
};
```
