# APP视频支持

## 安卓离线配置
* \app\src\main\assets\data\dcloud_properties.xml -> `<features>`
```xml
<feature name="VideoPlayer" value="io.dcloud.media.MediaFeatureImpl"/>
```

* \app\libs
	+ media-release.aar
	+ weex_videoplayer-release.aar

## 云打包配置
* manifest.json -> "app-plus" -> "modules"
```json
"VideoPlayer": {}
```
