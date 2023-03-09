# CSS 【Level3 选择器】

[Selectors Level 3](https://www.w3.org/TR/selectors-3/#selectors)

* `div:nth-child(2)`
	+ 匹配任意标签 (可指定匹配标签, 但顺序依然从第一个标签开始)

* `div:nth-of-type(2)`
	+ 匹配指定标签 (顺序从指定匹配标签开始, 没有指定匹配标签, 则以第一个标签为指定标签)

* `:nth-child(even)`
	+ 匹配偶数项, 或 `:nth-child(2n)`

* `:nth-child(odd)`
	+ 匹配奇数项, 或 `:nth-child(2n-1)`

* `:first-child`
	+ 最前一个, 或 `:first-of-type`

* `:last-child`
	+ 最前一个, 或 `:last-of-type`

* `:nth-child(-n+3)`
	+ 最前3个, 或 `div:nth-of-type(-n+3)`

* `:nth-last-child(-n+3)`
	+ 最后3个, 或 `:nth-last-of-type(-n+3)`

* `:only-child`
	+ 仅一个元素, 或 `:only-of-type`

* `:empty`
	+ 空内容

* `:not()`
	+ 非

* `div[class|=icon]`
	+ class以icon为前缀. icon需要在其它类名前

* `.bro+div`
	+ 匹配该元素相邻的后一个元素

* `.aft~div`
	+ 匹配该元素后面的所有指定元素
