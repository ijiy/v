export default {
	cleanUrls: true,
	// 访问基础路径
	base: '/v/',

	// 打包位置
	// outDir: '../dist',

	// 是否显示 外观切换
	// appearance: true,

	// 大标题, <title>默认标题|*</title>,
	titleTemplate: '从前端开始',

	// 小标题, <title>*|大标题</title>, 缺省值: VitePress
	title: '首页',

	// <meta name="description" content="*"/>
	description: 'APP, 小程序, 后台管理系统, 小游戏',

	// <html lang="zh-Hans-CN">
	lang: 'zh-Hans-CN',

	// 不会因为路由错误而打包失败
	// ignoreDeadLinks: true,

	// md底部右侧 最近更新时间 默认显示
	lastUpdated: true,

	markdown: {
		// 代码块主题, https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
		theme: 'monokai',

		// 是否显示代码块行号
		lineNumbers: true,

		// 目录格式, https://github.com/nagaozen/markdown-it-toc-done-right
		toc: {
			level: [1, 2],
		},
	},
	themeConfig: {
		// 右侧目录
		outlineTitle: '目录',

		// 左侧边栏
		sidebar: [
			{
				text: 'Web前端',
				// 是否可折叠 (子项无效)
				collapsible: true,
				// 是否全部折叠 (必然有一个不能默认折叠)【V3.15.0】
				collapsed: true,
				items: [
					{
						text: 'Web前端 【介绍】',
						link: '/html-web/',
					},
					{
						text: 'JavaScript',
						items: [
							{
								text: 'JS 基础 【未分类混合】',
								link: '/html-web/javascript/',
							},
							{
								text: 'JS 类型.字符串 【String】',
								link: '/html-web/javascript/string',
							},
							{
								text: 'JS 类型.数值 【Number】',
								link: '/html-web/javascript/number',
							},
							{
								text: 'JS 类型.对象 【Object】',
								link: '/html-web/javascript/object',
							},
							{
								text: 'JS 数组 【Array】',
								link: '/html-web/javascript/array',
							},
							{
								text: 'JS 日期 【Date】',
								link: '/html-web/javascript/date',
							},
							{
								text: 'JS 正则 【RegExp】',
								link: '/html-web/javascript/regexp',
							},
							{
								text: 'JS 存储 【storage, cookie】',
								link: '/html-web/javascript/storage',
							},
							{
								text: 'JS 【DOM】',
								link: '/html-web/javascript/dom',
							},
							{
								text: 'JS 【this】',
								link: '/html-web/javascript/this',
							},
							{
								text: 'JS 全局对象 【window, location, console】',
								link: '/html-web/javascript/window',
							},
							{
								text: 'JS 继承 【call, apply】',
								link: '/html-web/javascript/call',
							},
							{
								text: 'JS 原型 【prototype】',
								link: '/html-web/javascript/prototype',
							},
							{
								text: 'JS ES6 【块级作用域, 扩展运算符, 箭头函数】',
								link: '/html-web/javascript/es6',
							},
							{
								text: '理论篇.性能 【重绘, 回流】',
								link: '/html-web/javascript/repaint',
							},
							{
								text: '理论篇.安全 【XSS, CSRF】',
								link: '/html-web/javascript/xss',
							},
						],
					},
					{
						text: 'CSS',
						items: [
							{
								text: 'CSS 基础 【未分类混合】',
								link: '/html-web/css/',
							},
							{
								text: 'CSS 网格布局 【grid】',
								link: '/html-web/css/grid',
							},
							{
								text: 'CSS 弹性布局 【flex】',
								link: '/html-web/css/flex',
							},
							{
								text: 'CSS 预处理器语言 【less, sass】',
								link: '/html-web/css/less',
							},
							{
								text: 'CSS 伪元素 【after, before】',
								link: '/html-web/css/after',
							},
							{
								text: 'CSS 浮动 【float】',
								link: '/html-web/css/float',
							},
							{
								text: 'CSS3 【未分类混合】',
								link: '/html-web/css/css3',
							},
							{
								text: 'CSS 【选择器】',
								link: '/html-web/css/query',
							},
							{
								text: 'CSS 【Level3 选择器】',
								link: '/html-web/css/nth',
							},
							{
								text: 'CSS 【IE等兼容】',
								link: '/html-web/css/polyfill',
							},
							{
								text: 'CSS 【默认样式】',
								link: '/html-web/css/reset',
							},
							{
								text: '理论 【盒模型】',
								link: '/html-web/css/box',
							},
						],
					},
					{
						text: 'HTML',
						items: [
							{
								text: 'HTML 基础 【未分类混合】',
								link: '/html-web/html/',
							},
							{
								text: 'HTML 表单 【form】',
								link: '/html-web/html/form',
							},
							{
								text: 'HTML 表格 【table】',
								link: '/html-web/html/table',
							},
						],
					},
					{
						text: 'jQuery',
						items: [
							{
								text: 'jQuery 【简介】',
								link: '/html-web/jquery/',
							},
							{
								text: 'jQuery 【DOM操作】',
								link: '/html-web/jquery/dom',
							},
							{
								text: 'jQuery 请求 【ajax】',
								link: '/html-web/jquery/ajax',
							},
							{
								text: 'jQuery 动画 【animate】',
								link: '/html-web/jquery/animate',
							},
							{
								text: 'jQuery 【移动端操作】',
								link: '/html-web/jquery/tap',
							},
						],
					},
					{
						text: 'Canvas',
						items: [
							{
								text: 'ECharts 【可视化图表库】',
								link: '/html-web/canvas/echarts',
							},
							{
								text: 'html2canvas 【自定义截屏】',
								link: '/html-web/canvas/html2canvas',
							},
							{
								text: 'live2d 【二次元看板娘】',
								link: '/html-web/canvas/live2d',
							},
							{
								text: 'svg 【圆形进度】',
								link: '/html-web/canvas/svg-round',
							},
						],
					},
					{
						text: 'BootStrap',
						items: [
							{
								text: 'BootStrap 基础',
								link: '/html-web/bootstrap/',
							},
						],
					},
					{
						text: 'uniapp',
						items: [
							{
								text: 'uniapp 【简介】',
								link: '/html-web/uniapp/',
							},
							{
								text: 'uniapp 【生命周期】',
								link: '/html-web/uniapp/life-cycle',
							},
						],
					},
					{
						text: 'Vue',
						items: [
							{
								text: 'vue 【简介】',
								link: '/html-web/vue/',
							},
							{
								text: 'Vue2',
								items: [
									{
										text: 'vue2 【开发方式】',
										link: '/html-web/vue/vue2/',
									},
								],
							},
							{
								text: 'Vue3',
								items: [
									{
										text: 'vue3 【开发方式】',
										link: '/html-web/vue/vue3/',
									},
								],
							},
						],
					},
					{
						text: 'Vite',
						items: [
							{
								text: 'vite 【配置】',
								link: '/html-web/vite/config',
							},
							{
								text: 'vite 和 webpack',
								link: '/html-web/vite/webpack',
							},
						],
					},
					{
						text: 'TypeScript',
						items: [
							{
								text: 'TypeScript 【介绍】',
								link: '/html-web/typescript/',
							},
						],
					},
					{
						text: '特效和功能',
						items: [
							{
								text: 'swiper 【vue】',
								link: '/html-web/effects/vue-swiper',
							},
							{
								text: 'swiper 【jQuery】',
								link: '/html-web/effects/jquery-swiper',
							},
							{
								text: '刮刮卡 【jQuery】',
								link: '/html-web/effects/jquery-eraser',
							},
							{
								text: '浏览器标题滚动 【JS】',
								link: '/html-web/effects/title-scroll',
							},
							{
								text: '文字无缝滚动 【vue】',
								link: '/html-web/effects/seamless-scroll',
							},
							{
								text: '倒计时 【JS】',
								link: '/html-web/effects/timer',
							},
							{
								text: '上传图片自定义锚点 【JS】',
								link: '/html-web/effects/img-anchor',
							},
							{
								text: 'base64 和 arrayBuffer 【JS】',
								link: '/html-web/effects/base64-arraybuffer',
							},
						],
					},
				],
			},
			{
				text: 'Tools',
				collapsible: true,
				collapsed: true,
				items: [
					{
						text: 'Android Studio',
						link: '/tool/android-studio',
					},
					{
						text: 'HBuilder X',
						link: '/tool/hbuilderx',
					},
					{
						text: 'Webstorm',
						link: '/tool/webstorm',
					},
					{
						text: 'VSCode',
						link: '/tool/vscode',
					},
					{
						text: 'Markdown',
						link: '/tool/markdown',
					},
					{
						text: 'charles',
						link: '/tool/charles',
					},
					{
						text: 'Sublime',
						link: '/tool/sublime',
					},
					{
						text: 'Window系统相关',
						link: '/tool/win',
					},
				],
			},
			{
				text: 'Node',
				collapsible: true,
				collapsed: true,
				items: [
					{
						text: 'bash',
						link: '/node/bash',
					},
					{
						text: 'npm',
						link: '/node/npm',
					},
					{
						text: 'pnpm',
						link: '/node/pnpm',
					},
					{
						text: 'tyarn',
						link: '/node/tyarn',
					},
					{
						text: 'nvm 【切换node版本】',
						link: '/node/nvm',
					},
					{
						text: 'gulp',
						link: '/node/gulp',
					},
					{
						text: '插件',
						items: [
							{
								text: 'node插件 【未分类混合】',
								link: '/node/plugin/',
							},
							{
								text: 'image-webpack-loader 【图片压缩】',
								link: '/node/plugin/image-webpack-loader',
							},
							{
								text: 'svgo 【svg压缩】',
								link: '/node/plugin/svgo',
							},
							{
								text: 'filemanager-webpack-plugin 【zip压缩】',
								link: '/node/plugin/filemanager-webpack-plugin',
							},
							{
								text: 'http-server 【本地服务器】',
								link: '/node/plugin/http-server',
							},
							{
								text: 'shelljs 【在 js 中实现 shell】',
								link: '/node/plugin/shelljs',
							},
							{
								text: 'inquirer 【在 js 中实现 shell confirm】',
								link: '/node/plugin/inquirer',
							},
						],
					},
				],
			},
			{
				text: 'Git',
				collapsible: true,
				collapsed: true,
				items: [
					{
						text: 'Git 【分布式版本控制系统】',
						link: '/git/',
					},
					{
						text: 'GitHub',
						link: '/git/github',
					},
					{
						text: 'FileZilla',
						link: '/git/filezilla',
					},
					{
						text: 'SourceTree',
						link: '/git/sourcetree',
					},
					{
						text: 'TortoiseGit',
						link: '/git/tortoisegit',
					},
					{
						text: 'husky 【Git hooks】',
						link: '/git/husky',
					},
					{
						text: 'WebHook 【钉钉, Gitee】',
						link: '/git/ding-webhook',
					},
				],
			},
			{
				text: '项目方案',
				collapsible: true,
				collapsed: true,
				items: [
					{
						text: 'APP开发',
						link: '/project/app/',
					},
					{
						text: '小程序开发',
						items: [
							{
								text: '微信小程序',
								link: '/project/applet/wx-chat/',
							},
						],
					},
					{
						text: '后台管理系统',
						items: [
							{
								text: 'Element 基本排版',
								link: '/project/middle/element/',
							},
							{
								text: 'BuildAdmin',
								link: '/project/middle/buildadmin/',
							},
						],
					},
					{
						text: '小游戏开发',
						items: [
							{
								text: '白鹭引擎',
								link: '/project/game/egret/',
							},
						],
					},
				],
			},
			{
				text: '开发规范',
				collapsible: true,
				collapsed: true,
				items: [
					{
						text: '规范 开发流程',
						link: '/standard/',
					},
					{
						text: '规范 自我修养',
						link: '/standard/culture',
					},
					{
						text: '规范 web前端',
						link: '/standard/web',
					},
					{
						text: '规约 设计稿',
						link: '/standard/ui',
					},
					{
						text: '规范 注释【jsDoc】',
						link: '/standard/jsdoc',
					},
					{
						text: 'IDE编辑配置 【.editorconfig】',
						link: '/standard/editorconfig',
					},
					{
						text: 'ESLint格式化 【.eslintrc】',
						link: '/standard/eslintrc',
					},
					{
						text: 'Git上传忽略 【.gitignore】',
						link: '/standard/gitignore',
					},
					{
						text: '相关术语',
						link: '/standard/term',
					},
					{
						text: '开发建议',
						link: '/standard/advise',
					},
				],
			},
			{
				text: 'Links',
				collapsible: true,
				collapsed: true,
				items: [
					{
						text: 'Web前端',
						link: '/links/html-web',
					},
					{
						text: 'node',
						link: '/links/node',
					},
					{
						text: 'vite',
						link: '/links/vite',
					},
					{
						text: 'vue',
						link: '/links/vue',
					},
					{
						text: 'uniapp',
						link: '/links/uniapp',
					},
					{
						text: '翻译等联网工具',
						link: '/links/tool',
					},
					{
						text: '未分类',
						link: '/links/unsort',
					},
				],
			},
		],
		// 顶部导航栏
		// nav: [
		// 	{
		// 		text: 'xx',
		// 		link: '/xx/',
		// 	},
		// 	{
		// 		text: 'xx',
		// 		items: [
		// 			{
		// 				text: 'xx',
		// 				link: '/xx/',
		// 			},
		// 		],
		// 	},
		// ],
		/**
		 * 顶部导航栏 右边图标链接
		 * icon: 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'youtube' | { svg: string }
		 */
		// socialLinks: [
		// 	{
		// 		icon: 'github',
		// 		link: 'https://github.com/ijiy/press',
		// 	},
		// ],
		// md底部左侧 编辑链接
		// editLink: {
		// 	pattern: 'https://github.com/ijiy/press/edit/master/docs/:path',
		// 	text: '编辑此页'
		// },
		// md底部右侧 最近更新时间
		lastUpdatedText: '最近更新',
		// md底部 上下翻页
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},

		/**
		 * 搜索
		 * 需要申请appid等
		 */
		/*algolia: {
			appId: 'appId',
		    apiKey: 'apiKey',
		    indexName: 'qppress',
		},*/
	},
}
