# GitHub

## github-pages
* 前往项目[github](https://github.com/ijiy/press) -> 切换`master`分支 -> `Settings` -> `Pages`
	+ `Build and deployment` -> `Source` -> 选择`GitHub Actions`
	
* 项目根目录下新增`.github\workflows\deploy.yml`

```
name: Deploy
on:
  workflow_dispatch: {}
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm
      - run: npm install --frozen-lockfile
      - name: Build
        run: npm run build
      - uses: actions/configure-pages@v2
      - uses: actions/upload-pages-artifact@v1
        with:
          path: docs/.vitepress/dist
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v1
```

* 之后每次`merge`到`master`分支都会触发Pages的构建

## 访问加速
1. 查询`www.github.com`的[IP地址](https://tool.lu/ip)
	+ 20.205.243.166
	
2. C:\Windows\System32\drivers\etc -> hosts -> 添加

```
20.205.243.166 www.github.com
```
