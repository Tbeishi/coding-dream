//模拟历史弹幕数据
const data = [
    { value: '今天你努力了吗？', color: 'red', fontSize: 22, time: 5 },
    { value: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 10 },
    { value: 'XXX我男神', color: '#00a1f5', fontSize: 26, time: 13 }
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
    Object.assign(this,initData,sendData)
}