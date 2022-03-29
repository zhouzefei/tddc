### 🎸🎸🎸🎸 中台业务组件库
> 通过lerna管理，以storybook作为文档输出。当前组件库是以antd为基础，封装更便捷的业务组件库。


<br/>

### 🚀 快速上手
- `npm run install` 通过`bootstrap`来进行包依赖
- `npm run prepare` 关联`git`勾子
- `npm run storybook` 开启文档预览模式

### 🔥 发布包
- `npm run build` 通过babel进行编译
- `npm run publish-packages` 发布 package 中 package.json 上的 version 在 registry(高于 latest version)不存在的包
  我们默认根据package.json的版本  
  - from-git 即根据 git commit 上的 tag 进行发包
  - --canary 发测试版本的包


### 🤖️ 部署文档
`npm run export-static-storybook` 输出静态资源部署到对应的服务器即可。nginx配置参考如下
```javascirpt
    server {
        listen       6262;
        server_name  localhost;
        location / {
            root   /lerna-resource;
            index  index.html index.htm;
        }
    }
```