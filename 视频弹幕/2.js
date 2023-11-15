//管理弹幕
function barrageManage(canvas,video,sendData={}) {
    if(!canvas || !video) return
    this.canvas = canvas
    this.video = video

    //将画布的宽高设置成和视频宽高一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    //获取一个2D上下文对象
    this.ctx = canvas.getContext('2d')

    //默认的弹幕属性
    const initData = {
      color: '#e91e63', 
      fontSize: 20,
      speed: 1.5,
      opacity: 0.5,
      data: []
    }

    //将用户自己设置的弹幕属性替换默认属性并挂载到this上
    Object.assign(this,initData,sendData)

    //视频播放，弹幕才出现
    this.isPaused = true //播放开关

    //获取到所有最终被修饰好的弹幕
    this.allBarrage = this.data.map((item)=> new Barrage(item,this) )

    //实现弹幕移动效果
    this.render() 
}