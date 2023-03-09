# 关联微信开放平台

> 可用于 `APP跳转小程序`, `微信登录`, `微信支付`, `发送给朋友`

## 前往并登录[微信开放平台](https://open.weixin.qq.com)

> 需要 开发者资质认证, 其中"主体名称"要和以下的`应用官网`以及`所绑定的微信小程序`的主体名称一致

## 管理中心 -> 移动应用
* 创建移动应用
	+ 移动应用名称: 应用名A (应用的中文名)
	+ 移动应用简介: 无
	+ 应用官网: 需要包含 "应用的中文名"和应用描述的关键字, 且符合"应用类目"
	+ 移动应用图片: 分别需要 `28*28`, `108*108` 的图标
	+ 应用已上架: 否
	+ 应用类目: 资讯-信息资讯
	+ APP运行流程图: 需要在手机上截屏, 要包含顶部电量, 2~3张
	+ 申请/修改应用说明: 测试

* "保存, 下一步"
	+ Android平台
	+ 包名：aname.app
	+ 应用签名：`6dbba301xxxxxxxxxxxxxxxxxxxxxxxx`, 获取方式 (需要安卓手机):
		+ 安装我们的应用
			+ 如果是云打包的应用, 之后使用离线打包的应用, 在跳转小程序时会有签名之类的问题
			+ 所以, 此时用云打包的应用, 后续跳转小程序相关的调试和最终打包都应该使用云打包
		+ 前往微信开放平台的[资源下载](https://developers.weixin.qq.com/doc/oplatform/Downloads/Android_Resource.html)
			+ 点击`签名生成工具`下载并解压zip文件, 获得`.apk`文件, 在安卓手机上安装并打开
			+ 输入"包名"**aname.app**
	+ iOS参考[生成iOS通用链接](../ios/scheme.md)

## 获取 【微信开放平台的AppID】 (wx0024xxxxxxxxxxxx)
* 审核通过后, 复制 管理中心 -> 查看 应用详情 -> 复制 `AppID` (位于图标旁边)

## 云打包配置
* manifest.json -> app-plus -> distribute -> sdkConfigs -> share -> weixin -> appid, 粘贴复制的`AppID`

## 跳转支付宝小程序
* 需要"支付宝小程序"邀请成为体验者, 并扫码进入"体验版小程序"
	+ 小程序右上角`...` -> 联调设置 -> 勾选"联调扫码版本"

## 跳转微信小程序
```ts
plus.share.getServices(res => {
	payOption = res.filter(item => item.id === type)[0];

	if (payOption) {
		payOption.launchMiniProgram({
			// 小程序的原始id, 注意测试版和正式版的原始id是不一样的
			id: 'gh_c2ece0685a62',
			// 跳转页面路径
			path,
		});

		success();
	} else {
		fail('打开微信失败');
	}
}, () => {
	fail('访问应用失败');
});
```

## 安卓离线打包
* \app\src\main\AndroidManifest.xml -> manifest
```xml
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
```

* \app\src\main\AndroidManifest.xml -> manifest -> application
```xml
<meta-data android:name="WX_APPID" android:value="微信开放平台的AppID"/>
```

* \app\src\main\assets\data\dcloud_properties.xml -> properties -> features
```xml
<feature name="Share" value="io.dcloud.share.ShareFeatureImpl"><module name="Weixin" value="io.dcloud.share.mm.WeiXinApiManager"/></feature>
```
