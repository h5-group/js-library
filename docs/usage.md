### 下载仓库
```
git clone https://github.com/h5-group/js-library.git
cd library-framework
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