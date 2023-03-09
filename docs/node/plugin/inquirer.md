# [inquirer 【在 js 中实现 shell confirm】](https://github.com/SBoudrias/Inquirer.js)

## 安装
```bash
npm i inquirer -D
```

## 示例
```js
process.stdin.on('data', res => {
	require('inquirer').prompt([{
		type: 'confirm',
		name: 'build all',
		message: 'Do you pack all projects?',
		default: true
	}]).then(() => ).catch(err => console.log(err));
});
```
