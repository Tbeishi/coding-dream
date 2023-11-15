# 小程序业务架构

-App 和 Page的概念
App 全局，pages共享的
app.js 共享 globalData
app.wxss 样式
app.json 应用的配置
globalData 如何来到Page中的
 -const app = getApp() //拿到的是全局的对象
 应用对象
 -data 初始化占位
 {
   data:{
     user:{} //空的
   }
 }

 -生命周期
 onLoad wxml + wxss 显示了  //这是请求数据的最佳时机
 -this.setData({
   user:真正的值
 })
-页面会热更新 重新绘制{{}}这部分

-循环输出的概念
  -模板在{{直出}}外，数组列表输出的常态
  -block 只承载指令 wx:for  每一项默认item
    不会出现在文档流中

-css 架构思路
Dry 原则 Don't repeat yourself!
css 业务拆分 一个元素多个类名
section hero white
  -app.wxss 全局样式
    -公用样式
    -模块化
  -page.wxss 页面业务样式