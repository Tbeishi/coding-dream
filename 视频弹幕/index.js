//模拟历史弹幕数据
const data = [
    { text: '今天你掘金了吗？', color: 'red', fontSize: 22, time: 5 },
    { text: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 7 },
    { text: '小米露小米露', color: 'red', fontSize: 35, time: 9 },
    { text: '掘金掘金，每日掘金', color: 'pink', fontSize: 50, time: 9 },
    { text: '掘金文章今天你写了吗', color: '#00a1f5', fontSize: 40, time: 9 },
  ]

  barrageManage.prototype.render = function(){
    //清除画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //将弹幕绘制在画布上
    this.barrageRender()  //把所有弹幕绘制在画布上
    if(!this.isPaused){ //视频是播放状态
      requestAnimationFrame(this.render.bind(this))
    }
  }


barrageManage.prototype.barrageRender = function(){
  //拿到视频当前播放的时间
  const time = this.video.currentTime
  //实现每一条弹幕左移
  this.allBarrage.forEach(function(barrage) {
    if(time >= barrage.time && !barrage.flag){
      if(!barrage.isInit){
        barrage.init()
        barrage.isInit = true
      }
      barrage.x -= barrage.speed
      barrage.renderEach()

      //弹幕从左边出去了
      if(barrage.x <= -barrage.width){
        barrage.flag = true
      }
    }
  });
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
    this.allBarrage = this.data.map((item)=> new Barrage(item,this) )

    //实现弹幕移动效果
    this.render() 
}

//弹幕初始化
Barrage.prototype.init = function(){
  this.color = this.obj.color || this.context.color //用户未设置颜色，使用默认颜色
  this.fontSize = this.obj.fontSize || this.context.fontSize//用户未设置字体大小，使用默认大小
  this.speed = this.context.speed //默认速度
  this.opacity = this.context.opacity  //默认透明度

  //获取弹幕的宽度
  const p = document.createElement('p')
  p.style.fontSize = this.fontSize + 'px'
  p.innerHTML = this.text
  document.body.appendChild(p)
  this.width = p.offsetWidth
  document.body.removeChild(p)

  //设置弹幕的初始位置
  this.x = this.context.canvas.width
  this.y = this.context.canvas.height*Math.random()
  //弹幕超出画布上边界
  if(this.y < this.fontSize){
    this.y = this.fontSize
  }
  //弹幕超出画布下边界
  if(this.y > this.context.canvas.height - this.fontSize){
    this.y = this.context.canvas.height - this.fontSize
  }
}

Barrage.prototype.renderEach = function(){
  this.context.ctx.font = `${this.fontSize}px Arial`
  this.context.ctx.fillStyle = this.color
  this.context.ctx.fillText(this.text, this.x,this.y)
}

//修饰每一条弹幕
function Barrage(obj,context){ //context == this
  this.text = obj.text
  this.time = obj.time
  this.obj = obj
  this.context = context //挂载barrageManage函数里面的this
}

const canvas = document.getElementById('canvas')
const video = document.getElementById('video')
const $text = document.getElementById('text')
const btn = document.getElementById('btn')
const $color = document.getElementById('color')
const $range = document.getElementById('range')

  //创建一个整理弹幕的实例对象
  const barragemanage = new barrageManage(canvas,video,{data})
  video.addEventListener('play',()=>{
    barragemanage.isPaused = false //将播放状态开关设置为播放
    barragemanage.render()  //处理每一条弹幕
  })

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

btn.addEventListener('click',send)
$text.addEventListener('keyup', function(e) {
  // console.log(e);
  if(e.key ==='Enter'){
    send()
  }
})