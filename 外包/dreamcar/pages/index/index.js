// App -> Page的桥梁
//微信提供
const app = getApp()
Page({
  // 页面的数据
  data:{
    // user:{}
    slides:null,
    entities:null
  },
  //生命周期
  onLoad(){
    console.log(app,'页面显示了');
    //响应式页面
    setTimeout(()=>{
      this.setData({
        slides: app.globalData.slides,
        entities: app.globalData.vehicles
      })
    },2000)
  },
  onReady(){
    console.log('ready GO');
  }
})