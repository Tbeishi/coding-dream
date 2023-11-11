//模拟历史弹幕数据
const data = [
    { value: '今天你掘金了吗？', color: 'red', fontSize: 22, time: 5 },
    { value: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 10 },
    { value: '小米露我男神', color: '#00a1f5', fontSize: 26, time: 13 },
    { value: '掘金掘金，每日掘金', color: '#00a1f5', fontSize: 26, time: 13 },
    { value: '掘金文章每日来一篇', color: '#00a1f5', fontSize: 26, time: 13 },
  ]

//整理弹幕
function dataMessage(canvas,video,sendData) {
    if(!canvas || !video) return
    this.canvas = canvas
    this.video = video

    //将画布的宽高设置成和视频宽高一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    //获取画布
    this.ctx = canvas.getContext('2d')

    //初始化弹幕
    const initData = {
      color: '#e91e63',
      fontSize: 20,
      speed: 1.5,
      opacity: 0.5,
      data: []
    }
    //将initData和sendData的并集属性挂到this上
    Object.assign(this,initData,sendData)

    //视频播放，弹幕才出现
    this.isPaused = true //播放开关

    //获取到所有弹幕
    this.everyDate = this.data.map()

    //移动弹幕
}