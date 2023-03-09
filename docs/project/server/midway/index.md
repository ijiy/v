# Midway

## 环境
* `node -v` -> `v16.14.2`

* `pnpm -v` -> `6.32.3`

```bash
npm i pnpm -g

# lint -> build 启动
pm2 start ./bootstrap.js --name midway_app -i 4
## `-i 4` 开启4个进程, 去掉就只有1个进程

# 删除
pm2 delete midway_app

# 停止
pm2 stop midway_app

# 列表
pm2 list

# 访问
http://localhost:7001
```

## 安装
```bash
# 初始化
pnpm init midway
## egg-v3 - A web application boilerplate with midway v3(egg)

# 安装
pnpm i

##
pnpm add pm2 -g

# 运行
pnpm run dev

# 访问
http://localhost:7001

# 部署
pnpm start
pnpm stop

# 检测
pnpm run lint

# 测试
pnpm test
```

## 注意
* 修改端口
	+ package.json

```bash
"scripts": {
	"dev": " --port=7001",
}
```

* 可能的换行符问题
	+ git

```bash
git config --global core.autocrlf false
```

* 编译
	+ 要求集成 ts, vue 的 IDE, 如 webstorm


## 目录
```bash
├── src
│   └── controller
│       └── home.controller.ts
└── tsconfig.json
```

* controller, 控制器, 文件名和函数名, 没有引用关联, 作用:
	+ 数据
		- 从数据库 / 其它服务器中, 返回查找的内容
		- 将提交的内容, 更新到数据库中
	+ 路由
		- 根据访问的地址, 返回对应的 页面 / 接口


## 基础
* controller 处理的数据, 可以从 装饰器 / api 中获取
	+ 装饰的`<Class>`会在进程加载中被实例化, 且仅有一次
	+ 装饰器 (标识下一条语句类型)
		- `@Controller('/');` Web控制器`<Class>`, 参数 (指向访问的页面地址 / 接口地址), 包含`@Provide`, 不需重复暴露
		- `@Provide();` 暴露依赖`<Class>`, 参数(表示_id)
		- `@Inject();` 注入依赖, 参数(表示_id)
		- `@Query('id');` 返回对应参数 (?id=1), `@Query()` 返回包含所有参数的对象
	+ api
		- `this.ctx.request.body;`
		- `this.ctx.response.body`, 简写成 `this.ctx.body`
		- `this.ctx.query;`
		- `this.ctx.get('cache-control');`

后面统一优先使用`装饰器`

### 路由
```ts
// src/controller/home.ts

import { Configuration, Controller, Inject, Get, Post } from '@midwayjs/decorator';
import { Context } from 'egg';

// HomeController 函数, 提供给路由 '/'
@Controller('/');

// 忽略路由前缀
@Controller('/api', {ignoreGlobalPrefix: true});

// 导入组件
@Configuration({
  imports: [
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
});

export class HomeController {
	// Get, Post, Put, Del, Patch, Options, Head, All
	// home 方法, 只能通过 Get 请求, 提供给路由 '/'
	@Get('/');
	@Get('/main');
	@ContentType('html');
	async home() {
		return '<body>hello world</body>';
	}

	@Get('/');
	async getUser(@Query('id') id: string): Promise<User> {
		// xxxx
	}

	// 注入上下文, 对应 @Provide(); 暴露函数
	@Inject();
	// 定义 ctx 指向 import 的函数; 在函数中通过 this.ctx 访问上下文
	// 相当于 const ctx = new Context();
	ctx: Context;

	@Get('/');
	async getUser(): Promise<User> {
		const query = this.ctx.query;

		// set cookie
	    this.ctx.cookies.set('foo', 'bar', { encrypt: true });
	    // get cookie
	    this.ctx.cookies.get('foo', { encrypt: true });
	}
};
```

## 文献 🎨
* [文档](http://www.midwayjs.org/docs/intro)
