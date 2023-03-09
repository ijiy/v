# gulp

## 环境
* node -v `v14.7.0`

* npm -v `6.14.7`

* gulp --v `CLI version: 2.3.0; Local version: 4.0.2`

## 安装
* `npm i gulp-cli -g`

* mkdir 项目目录名

* cd app `npm i gulp -D`

* package.json `npm init -y`

* 添加 gulpfile.js

* 安装插件

`npm i del -D`

```
del
portfinder
gulp-cache
gulp-connect
gulp-sass
gulp-csso
gulp-autoprefixer
gulp-babel @babel/core @babel/preset-env @babel/plugin-transform-runtime
gulp-uglify
gulp-rev
gulp-rev-replace

gulp-imagemin
# 这个要切换官方镜像, 否则安装报错; 不要混用cnpm, 否则后续其它插件的安装卸载都影响这个插件
```

`npm i gulp-open -S`
```
	gulp-open
	gulp-htmlmin
	@babel/runtime
```

* package.json
```js
"browserslist": [
	"> 1%",
	"last 2 versions"
],
```
"browserslist"不要有"not dead", 不然 autoprefixer 无效

* webStorm配置
	+ 左下角打开"Gulp"面板, 注意不是"npm"面板
	+ 右击 serve/build
	+ 点击 Edit 'serve/build' Settings...
	+ Arguments: 输入执行的项目路径, 如 src/page
	+ 单项目结构不用以上配置
	+ 然后双击 serve/build 运行项目
	+ 没有暴露default, 不要尝试双击"Gulp"面板中的 ...\gulpfile.js

## run
```bash
:: 调试
gulp serve

:: 打包
gulp build
```

## 注意
* 若 根目录下 运行, 不触发监听, 需手动刷新, 不能自动打开. 但会运行所有项目, 且速度很快

* 无论运行还是打包, 应该到 根目录下 cd src/项目文件夹, 再执行

* 不要添加"script", 来通过npm run运行, 这样将找不到正确的运行路径

* assets文件夹 只打包, 不编译/压缩/版本号等处理

* js/css文件夹 是babel和scss目录的编译结果, 需添加版本号的文件可放入

* 可创建多级目录, 但局限于assets, babel, scss, img, 以及包含*.html的目录

* 可以是单项目结构(cd src); 或多项目结构(cd src/page), 每个项目只能位于src下的一级目录(src>[...pages])

* 不要在*.css中导入css, 需要可添加, 参考 gulpfile.js 中的 rev_html

* 不要在*.js中导入js和css 需要可添加

* 没有sourcemaps, 需要可添加 (用于浏览器查看代码, 可以映射未编译的文件, 如*.scss)

* *.html中 `<script>`不要有es6, 否则该部分js不被编译和压缩

* *.html中 `<style>`不要有css3, 否则该部分css不会添加内核前缀, 更不能用scss语法格

## 文献 🎨
* [gulp插件](https://gulpjs.com/plugins)

* 雪碧图 `npm i gulp.spritesmith -D`

* 控制台加载状态 `npm i ora -D`

* 签名 `npm i gulp-header -D`

* sourcemaps `npm i gulp-sourcemaps -S`
