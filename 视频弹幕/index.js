//模拟历史弹幕数据
const data = [
    { value: '今天你掘金了吗？', color: 'red', fontSize: 22, time: 5 },
    { value: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 10 },
    { value: '小米露我男神', color: '#00a1f5', fontSize: 26, time: 13 },
    { value: '掘金掘金，每日掘金', color: '#00a1f5', fontSize: 26, time: 13 },
    { value: '掘金文章每日来一篇', color: '#00a1f5', fontSize: 26, time: 13 },
  ]

barrageManage.prototype.barrageRender = function(){
  //拿到视频当前播放的时间
  const time = this.video.currentTime
  //实现每一条弹幕左移
  this.allBarrage.forEach(function(barrage) {
    if(time >= barrage.time){
      barrage.x -= barrage.speed
      barrage.renderEach()
    }
  });
}

barrageManage.prototype.render = function(){
  //清除画布
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  //将弹幕绘制在画布上
  this.barrageRender()
  if(!this.isPaused){ //视频是播放状态
    requestAnimationFrame(this.render.bind(this))
  }
}
barrageManage.prototype.add = function(obj){
  this.allBarrage.push(new Barrage(obj,this))
}
//整理弹幕
function barrageManage(canvas,video,sendData={}) {
    if(!canvas || !video) return
    this.canvas = canvas
    this.video = video

    //将画布的宽高设置成和视频宽高一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    //获取一个2d画布
    this.ctx = canvas.getContext('2d')

    //初始化弹幕属性
    const initData = {
      color: '#e91e63', 
      fontSize: 20,
      speed: 1.5,
      opacity: 0.5,
      data: []
    }

    //将初始弹幕属性和用户设置的弹幕属性的并集属性挂载到this上
    Object.assign(this,initData,sendData)

    //视频播放，弹幕才出现
    this.isPaused = true //播放开关

    //获取到所有最终被修饰好的弹幕
    this.allBarrage = this.data.map((item)=>{new Barrage(item,this)})

    //实现弹幕移动效果
    this.render() 
}

//创建一个整理弹幕的实例对象
const barragemanage = new barrageManage(canvas,video,{data})
video.addEventListener('play',()=>{
  barragemanage.isPaused = false //将播放状态开关设置为播放

})

//弹幕初始化
Barrage.prototype.init = function(){
  this.color = 
}
//修饰每一条弹幕
function Barrage(obj,context){ //context == this
  this.color = obj.color || 
}




function send() { 
  //获取到用户填的弹幕信息
  const time = video.currentTime
  const text = $text.value
  const color = $color.value
  const fontSize = $range.value
  const obj = {time, text, color, fontSize}

  //添加弹幕
  barragemanage.add(obj)
}

const canvas = document.getElementById('canvas')
const video = document.getElementById('video')
const $text = document.getElementById('text')
const btn = document.getElementById('btn')
const $color = document.getElementById('color')
const $range = document.getElementById('range')

btn.addEventListener('click',send)
$text.addEventListener('keyup', function(e) {
  // console.log(e);
  if(e.key ==='Enter'){
    send()
  }
})