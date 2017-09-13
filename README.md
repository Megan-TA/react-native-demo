# React-Native-Demo

----
> 默认访问地址 http://localhost:8081/index.android.bundle?platform=android 

## 环境搭建遇到的坑

1. 运行react-native start 卡在Loading dependency graph, done.不动

默认8081端口被占用  修改端口号

2. 运行react-native start 提示 Cannot find entry file index.android.js in any of the roots 错误

我遇到的原因 是因为安装包依赖的时候用的cnpm安装  貌似有问题 查资料别人建议使用npm start  这个速度大家都懂得 建议安装facebook的yarn安装 速度和cnpm差不多  重要的是能运行成功

官方安装的时候也是用的yarn安装 yarn命令行相当于npm install  添加第三方库 yarn add 第三库名称

3. 运行react-native run-andriod 下载gradle下载缓慢甚至无法下载的问题

先外部下载好gradle压缩包 然后放入本地指定位置 比如 E:/gradle/gradle-2.14.1-all.zip 

然后替换构建项目中 android/gradle/wrapper/gradle-wrapper.properties 的 

distributionUrl指向的路径  默认https\://services.gradle.org/distributions/gradle-2.14.1-all.zip为file:\:///E:/gradle/gradle-2.14.1-all.zip

再次运行react-native run-andriod
