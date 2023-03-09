---
testXxx: 自定义的变量, 要放在最顶部
---

# Markdown

> [查看此页面](https://gitee.com/qpv/qp-press/blog/master/docs/web-text/markdown.md)

## 标题
`# 一级标题`

`## 二级标题`

`### 三级标题`

`####`

`#####`

## 序列表
* 一级序列
	+ `* ` 无序列表
	+ `1. ` 有序列表

* 二级序列 (三级, 四级...)
	+ `+ `
	+ 不要用 `- ` (Gitee 不支持)

## 代码块
```html{2-3}
包括: xml, js, json, css等

高亮某一行<vitePress专属>: js{2-3}, 即高亮2到3行的代码
```

## 表格
| 代码块语言 | 标记语言 | 备注 |
| --- |:--- | ---:|
| text, plain | text | 默认文本 |
| html | XML | xml, xhtml |
| css | CSS |  |
| sass , scss | SASS, SCSS |  |
| js | JavaScript |  |
| json | JSON |  |
| bash , shell | Shell |  |

## 引用
`> 引用内容`

## 链接
`[链接文本](链接地址: 可以是 绝对地址/相对地址/锚点)`

## 任务
* vitePress 尚不支持

- [ ] 待办事项

- [x] 已完成

* 注意, `-`和`[`之间要有空格, `[`和内容之间要有空格

## 脚注
* vitePress 尚不支持

脚注[^1]

## 表情
:tada: :100:

[所有支持的表情](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 定义
* vitePress专属

* 放在最顶部, `#`前

* {{ $frontmatter.testXxx }}

## 提示块
vitePress专属

::: info
包括: info, tip, warning, danger, details
:::

## 自定义代码块

<div class="language-sh">
	<code>
		<div>
			<span style="color:var(--vt-c-green);">✔</span>
			<span style="color:#A6ACCD;">
				xx:
				<span style="color:#888;">
					…
					<span style="color:#89DDFF;">&lt;</span>
					<span style="color:#888;">zz</span>
					<span style="color:#89DDFF;">&gt;</span>
				</span>
			</span>
		</div>
		<span style="color:var(--vt-c-green);">✔</span> <span style="color:#A6ACCD;">yy? <span style="color:#888;">… <span style="color:#89DDFF;text-decoration:underline;">No</span> / Yes</span></span>
	</code>
</div>
