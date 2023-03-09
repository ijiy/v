# bash

## 指定盘符
`e:`

## 创建文件夹
`md xxx`

## 创建文件
`touch README.md`

## 删除文件
`rd /s/q xxx` 静默删除 (只能删除目录, 无法恢复)

`rd /s xxx` 确认删除

`del /s/q xxx` 静默删除 (只能删除文件, 可恢复)

`del xxx` 删除指定目录下的所有文件, 不删除空目录

## 切换目录
路径要用 `\`, 不要用 `/` (像 ren 是无法识别的)

`cd Project` 切换到当前目录下的一个文件夹 (`cd Tab`, 可选择文件夹)

`cd d:/Project/vw` 切换指定目录 (限当前盘符下的目录)

`cd /d d:/Project/vw` 切换指定目录 (跨盘符)

`cd ..` 返回上一级

`cd \` 返回盘符根目录

## 写入
`echo .cache >> .gitignore`

## 移动
`move a/b ../c` 将b移动到c目录, ../不是相对b的位置, 而是相对cd的位置

## 重命名
`ren a b` 将a重命名为b

## 停止操作
`Ctrl + C`

## 查看版本
`node -v`

## 清屏
`cls`

## 标题
`title xxx`

## 注释
`rem xxx`

`::`
不回显注释 (回显, 执行后可以看到结果)

## 输出回车换行
`echo.`

## 执行程序 (同步)
`call xxx.exe`

## 执行程序 (异步)
`start xxx.exe`

## 编码 (确保utf-8, 还需设置 属性 -> 字体 -> 字体 选择 Lucida Console)
`chcp 65001`

## 后续所有命令在执行前，不打印出命令的内容
`@echo off`

## 打开文件夹
`explorer d:\Project`

## 当前目录下的所有文件
`dir` 包括创建日期等信息

`dir /b` 只显示文件名

## 压缩
* 基于7-zip

* 系统变量的path添加 `D:\7-Zip`

```bash
:: 将 yyy 压缩成 xxx.wgt
7z.exe a xxx.wgt yyy

:: 压缩 yyy 里的所有文件
7z.exe a xxx.wgt .\yyy\*
```


## 示例
```bash
start "标题" cmd /k "cd/d E:\p0 & dir p1\p2 /b"

# /d 打开新窗口
# /c 表示执行完命令后关闭cmd窗口;
# /k 表示执行完命令后保留cmd窗口
```

## 示例
```bash
@echo off
chcp 65001>$null
color 6
title vue-build

cd .. & cd src/pages
::cd /d E:\fullStack\vue_proj\src\pages

dir /b & echo.

set /p x=build:
# set /p 获取输入的内容, 并赋值给变量x
# 这里 build: 相当于表单中的 label 显示效果

for /f "tokens=1*" %%y in ("%%x%%") do cmd /k npm run build %%y %%z
# /f 读取内容
# tokens=1* 第一行之后的所有内容
# %%y 读取内容的变量
```
