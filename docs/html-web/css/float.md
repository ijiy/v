# CSS 浮动 【float】

> 水平漂浮, 空间不足则换行

> 其前元素不受影响

> 其后元素将围绕它并重新排列

* 清浮动
	+ `clear: both/left/right`, 清除该元素侧边的浮动影响

* 避免没设置高度的容器塌陷
	+ 最后的块元素设置clear, 如br, ::after
	+ 父元素触发BFC, 如overflow不为visible, float属性不为none, flex, 定位等
