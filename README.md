## js-library

开箱即用，用于JavaScript插件开发

### 开始
```
git clone https://github.com/h5-group/js-library.git
cd js-library
npm install
```

### 命令行
```
npm run demo // 运行vue应用（demo文件夹）
```
```
npm run dist // 构建vue应用
```
```
npm run build // 构建library
```

### 目录
```
|-- dist                        // 产出
|-- docs                        // 文档
  |-- .vuepress                 // vuepress生成
    |-- config.js               // vuepress文档配置
  |-- README.md                 // 文档首页
  |-- ...                       // 其他文档页面
|-- src                         // 开发
  |-- index.js                  // 入口文件
|-- demo                        // demo文件
  |-- component
    |-- ...
  |-- index.vue
|-- config
  |-- webpack.demo.js           // 运行demo vue应用
  |-- webpack.build.js          // 构建library
|-- package.json
```

### 能力
- [x] 压缩代码
- [x] babel转义
- [x] 运行demo目录（vue单页面）
- [x] 构建代码至dist，支持全局引入，cmd，amd，按需引入
- [x] 发布至npm
- [x] 支持doc文档编辑

## 文档相关

一份文档对于一个开源库来说极为重要。

文档使用的是[vuepress](https://vuepress.vuejs.org/zh/guide/ "vuepress")能力。

### 命令行
```
npm run docs:dev // 运行doc
```
```
npm run docs:build // 构建doc
```

### 目录及配置
打开`/docs/.vuepress/config.js`文件就明白了。


### 部署
请参考[vuepress-部署](https://vuepress.vuejs.org/zh/guide/deploy.html#%E4%BA%91%E5%BC%80%E5%8F%91-cloudbase)。

这个仓库文档部署在GitHub Pages，可参考[GitHub Pages](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)自行修改。


### 发布npm
```
npm login // 登录npm
npm version prerelease // package.json 中的版本号1.0.0变为 1.0.1-0
npm publish
```

关于 `npm version` 的使用
```
npm version prerelease // package.json 中的版本号1.0.0变为 1.0.1-0 或者 1.0.1-0变为1.0.1-1 一般是指修复版本
npm version prepatch // package.json 中的版本号1.0.1-1变为 1.0.2-0 一般是指需求版本
npm version preminor // package.json 中的版本号1.0.2-0变为 1.1.0-0 一般是指功能版本
npm version premajor // package.json 中的版本号1.1.0-0变为 2.0.0-0 一般是指改版
```