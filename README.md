### 环境搭建遇到的坑
1. 运行react-native start 卡在Loading dependency graph, done.不动

默认8081端口被占用  修改端口号

2. 运行react-native run-andriod 下载gradle下载缓慢甚至无法下载的问题

先外部下载好gradle压缩包 然后放入本地指定位置 比如 E:/gradle/gradle-2.14.1-all.zip 

然后替换构建项目中 android/gradle/wrapper/gradle-wrapper.properties 的 

distributionUrl指向的路径  默认https\://services.gradle.org/distributions/gradle-2.14.1-all.zip为file:\:///E:/gradle/gradle-2.14.1-all.zip

再次运行react-native run-andriod
