### 可视化制作门户控制台

- 结构图

├── build                    --- 打包目录
├── index.html
├── login.html
├── package.json
├── postcss.config.js  
├── public
│   ├── index.html
│   └── login.html
├── read.md
├── src
│   ├── api                
│   │   ├── index.js
│   │   └── login.js
│   ├── common                          --- 公用文件
│   │   ├── js
│   │   │   ├── eventBus.js
│   │   │   ├── instruction.js
│   │   │   ├── pxToRem.js
│   │   │   ├── reAlert.js
│   │   │   ├── stateCode.js
│   │   │   └── storage.js
│   │   └── less
│   │       ├── index.less
│   │       ├── login.less
│   │       ├── reset.less
│   │       └── splitScreen.less
│   ├── components                           --- 组件
│   │   ├── bgCanvas
│   │   │   └── bgCanvas.vue
│   │   ├── footer
│   │   │   └── footer.vue
│   │   ├── indexContent
│   │   │   └── indexContent.vue
│   │   ├── indexNav
│   │   │   ├── indexNav.vue
│   │   │   ├── point_left.png
│   │   │   └── point_right.png
│   │   ├── loginForm
│   │   │   ├── adminLogo.png
│   │   │   ├── lock.png
│   │   │   └── loginForm.vue
│   │   ├── saveWindow
│   │   │   └── saveWindow.vue
│   │   ├── screen
│   │   │   ├── screen.vue
│   │   │   ├── 切换系统.png
│   │   │   ├── 清屏.png
│   │   │   └── 无信号图标.png
│   │   ├── slideShow
│   │   │   ├── point_left.png
│   │   │   ├── point_right.png
│   │   │   ├── slideShow.vue
│   │   │   └── 返回.png
│   │   ├── splitScreen
│   │   │   ├── splitScreen.vue
│   │   │   ├── 保存.png
│   │   │   ├── 返回.png
│   │   │   ├── 无信号图标.png
│   │   │   └── 选中底图.png
│   │   └── userInfo
│   │       ├── quit.png
│   │       ├── userInfo.vue
│   │       ├── 分屏浮标按钮.png
│   │       └── 主页图标.png
│   ├── pages                                  --- 页面入口
│   │   ├── index
│   │   │   ├── index.js
│   │   │   ├── index.vue
│   │   │   └── 主页底图.jpg
│   │   └── login
│   │       ├── bgImage.jpg
│   │       ├── login.js
│   │       └── login.vue
│   ├── router.js
│   └── store        
│       ├── actions.js
│       ├── index.js
│       ├── mutations.js
│       ├── mutation-types.js
│       └── state.js
├── webpack.config.js
├── webpack.proxy.js                     --- 代理
└── webpack.server.js                    --- 服务器