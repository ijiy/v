# ESLint格式化 【.eslintrc】

* [eslint standard](https://eslint.org/docs/rules)

## ESLint有争议的规则
* no-magic-numbers, 禁用魔术数字 (建议用常量声明数字, 并注释该数字含义)

* guard-for-in, 遍历要排除原型链继承来的属性 (很多情况并没必要, 反而影响性能)

```js
for (key in foo) {
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
```

* func-name-matching, 函数名与赋值给它们的变量名一样 (不要用这种写法)

* multiline-ternary, 复杂语句不建议使用三元表达式

* 个别注意注释
```js
/* eslint-disable camelcase */
```

* 规则更新自 `v8.30.0`
	+ 新增规则, 参考 [之后版本](https://github.com/eslint/eslint/releases) 更新内容的`New: `关键词
