# tyarn

## 安装
`npm i yarn tyarn -g`

## 环境变量
`tyarn global dir`
```
复制返回的路径(...\Yarn\Data\global), 改成(...\Yarn\bin)并复制

控制面板\系统和安全\系统 -> 高级系统设置 -> 环境变量
用户变量 -> Path -> 编辑 -> 新建, 粘贴
```

## 常用命令
```bash
:: 初始化
tyarn install

:: 初始化 package.json
tyarn init
:: 可直接回车, 取()里的默认值或为空

:: 添加
tyarn add xxx

:: 添加至全局
tyarn global add xxx

:: 添加至开发依赖 (devDependencies)
tyarn add xxx -D

:: 移除
tyarn remove xxx

:: 从全局中移除
tyarn global remove xxx

:: 更新项目依赖
tyarn upgrade

:: 更新指定依赖
tyarn upgrade xxx

:: 清除缓存
tyarn cache clean
```
