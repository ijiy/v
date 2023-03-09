# CSS 预处理器语言 【less, sass】

## less
```bash
pnpm add less -D
```

* 嵌套
```less
div {
	/* div p */
	p {}
}
```

* 选择器 `&`
```less
div {
	/* div.a */
	&.a {}

	/* div.a */
	&:after {}

	/* .a div */
	.a & {}
}

.a {
	/* .a-b */
	&-b {}
}
```

* 扩展 `extend`
```less
.a {
	height: 1px;
}
.b {
	color: red;
}

.c {
	width: 1px;
	&:extend(.a, .b);
}

/* result */
.c {
	width: 1px;
	height: 1px;
	color: red;
}
```

* 变量 `@`
```less
@a: border;
@b: red;

.{@a} {
	.a-{@b} {
		{@a}-color: {@b};
	}
}

/* result */
.border .a-red {
	border-color: red;
}
```

## Sass
* 嵌套, 选择器 和 Less 一样

* 变量 `$`
```scss
$a: border;
$b: red;

.#{a} {
	.a-#{b} {
		#{a}-color: #{b};
	}
	&:after {
		content: 'is #{b}';
	}
}

/* result */
.border .a-red {
	border-color: red;
}
.border:after {
	content: 'is red';
}
```

* 扩展 `@extend`
```scss
.a {
	height: 1px;
}
.b {
	color: red;
}

.c {
	width: 1px;
	@extend .a;
	@extend .b;
}

/* result */
.c {
	width: 1px;
	height: 1px;
	color: red;
}
```

在 StyleLint 中

```
%a {
	height: 1px;
}
.b {
	@extend %b;
}
```
