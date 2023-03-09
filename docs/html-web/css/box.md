# 理论 【盒模型】

## 盒子模型的定义
* 由 `margin`, `padding`, `border`, `width`, `height`及`内容`构成布局区域

## 盒子的宽高设定
* 标准的盒子大小, 由padding, border, width, height决定宽高

* 在开发中, 常用 box-sizing, 去改变盒子宽高的设定, 而IE的盒子模型便得到更好的体现

## 盒子的渲染规则
* 决定盒子内容的排版与盒子间的作用. 有BFC, IFC, GFC, FFC

### BFC
块级格式化上下文, 即块元素的内部排版规则

* 规定盒子垂直布局
	+ 相邻盒子margin会重叠
	+ 盒子从贴着容器侧边开始
	+ 不与容器外的浮动盒子重叠
	+ 浮动盒子参与容器高度计算
	+ 盒子不影响到容器外

* 触发该规则
	+ display为flex等
	+ float属性不为none
	+ overflow不为visible
	+ position为absolute或fixed

* 作用
	+ 避免相邻盒子的margin重叠
	+ 解决浮动脱离文档流导致重叠
	+ 解决浮动导致容器塌陷

### IFC
* 内联格式化上下文, 即内联元素的内部排版规则

* 规定不容许含有块元素

* 水平布局

* 盒模型的构成只有水平margin, padding, border及内容

* 触发该规则
	+ font-size
	+ line-height
	+ vertical-aligin

* 作用
	+ 解决内容垂直居中, 行高一致

### GFC
网格布局: `display: grid;`

### FFC
弹性布局: `display: flex/inline-flex;`;
