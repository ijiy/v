# APP蓝牙支持

包括低功耗蓝牙 (iBeacon)

## 安卓离线配置
* app\src\main\AndroidManifest.xml -> `<manifest>`
```xml
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.BLUETOOTH_SCAN"/>
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT"/>
```

* app\src\main\assets\data\dcloud_properties.xml -> `<features>`
```xml
<feature name="Bluetooth" value="io.dcloud.feature.bluetooth.BluetoothFeature"/>
<feature name="iBeacon" value="io.dcloud.feature.iBeacon.WxBluetoothFeatureImpl"/>
```

* app\libs
	+ Bluetooth-release.aar
	+ iBeacon-release.aar


## 云打包配置
* manifest.json -> "app-plus" -> "modules"
```json
"Bluetooth" : {},
"iBeacon" : {},
```

* "app-plus" -> "distribute" -> "android" -> "permissions"
```json
"<uses-permission android:name=\"android.permission.BLUETOOTH\"/>",
"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\"/>",
"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\"/>",
"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\"/>"
"<uses-permission android:name=\"android.permission.BLUETOOTH_SCAN\"/>"
"<uses-permission android:name=\"android.permission.BLUETOOTH_CONNECT\"/>"
```
