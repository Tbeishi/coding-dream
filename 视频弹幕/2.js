//模拟历史弹幕数据
const data = [
  { text: '今天你掘金了吗？', color: 'red', fontSize: 22, time: 5 },
  { text: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 10 },
  { text: '小米露小米露', color: 'red', fontSize: 35, time: 13 },
  { text: '掘金掘金，每日掘金', color: 'pink', fontSize: 50, time: 13 },
  { text: '掘金文章今天你写了吗？', color: '#00a1f5', fontSize: 40, time: 13 },
]

//管理弹幕
//sendData：用户输入的弹幕属性，默认值为{}
function barrageManage(canvas,video,sendData={}) { 
  if(!canvas || !video) return  //没有画布或视频直接return
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

  //1、视频播放，弹幕才出现
  this.isPaused = true //播放开关

  //2、获取到所有最终被修饰好的弹幕
  this.allBarrage = this.data.map((item) => new Barrage(item,this) ) //new Barrage()用来修饰一条弹幕

  //3、实现弹幕移动效果，并将移动后的弹幕绘制在画布上
  this.render() 
}

barrageManage.prototype.render = function(){
  //每次移动前清除画布当前内容
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  //调用方法，实现弹幕移动，并将移动后的弹幕绘制在画布上
  this.barrageRender()  
  if(!this.isPaused){ //视频是播放状态
   //执行一个移动动画，在下次重绘之前调用指定的回调函数更新动画
    requestAnimationFrame(this.render.bind(this)) //每隔17ms执行调用render()方法
  }
}

//实现弹幕移动，并将移动后的弹幕绘制在画布上的方法
barrageManage.prototype.barrageRender = function(){
//拿到视频当前播放的时间
const time = this.video.currentTime
//实现每一条弹幕左移
this.allBarrage.forEach(function(barrage) {
//若视频当前时间大于等于弹幕出现时间且弹幕没有从左边出去，弹幕左移
  if(time >= barrage.time && !barrage.flag){
    if(!barrage.isInit){
      barrage.init()   //用于弹幕初始化的方法
      barrage.isInit = true
    }
    barrage.x -= barrage.speed
    barrage.renderEach() //弹幕绘制方法，用于将每一条弹幕绘制在画布上呈现出来

    //弹幕从左边出去了
    if(barrage.x <= -barrage.width){
      barrage.flag = true
    }
  }
});
}

//用户发送的弹幕，通过Barrage()修饰后将其添加到allBarrage所有弹幕里面
//因为requestAnimationFrame每17ms会调用render()方法，每次都会重新遍历allBarrage并将其绘制在画布上，所以这实现了新添加的弹幕可以马上被绘制出来。
barrageManage.prototype.add = function(obj){  //添加弹幕
this.allBarrage.push(new Barrage(obj,this))
}

//修饰每一条弹幕
//将barrageManage函数的this传过来，可以拿到它所有的属性
function Barrage(obj,context){ //context == this，barrageManage函数的this
  this.text = obj.text //弹幕文本
  this.time = obj.time // 弹幕出现时间
  this.obj = obj //所有弹幕属性
  this.context = context //挂载barrageManage函数里面的this
}

//弹幕初始化
Barrage.prototype.init = function(){
  this.color = this.obj.color || this.context.color  //优先使用用户设置的颜色，没有则使用默认颜色
  this.fontSize = this.obj.fontSize || this.context.fontSize //优先使用用户设置的字体大小，没有则使用默认大小
  this.speed = this.context.speed //默认速度
  this.opacity = this.context.opacity  //默认透明度

  //获取弹幕的宽度
  const p = document.createElement('p')
  p.style.fontSize = this.fontSize + 'px'
  p.innerHTML = this.text
  document.body.appendChild(p)
  this.width = p.offsetWidth  //弹幕宽度
  document.body.removeChild(p)

  //设置弹幕的初始位置 画布最右边任意位置
  this.x = this.context.canvas.width 
  this.y = this.context.canvas.height*Math.random()
  
  //弹幕超出画布上边界
  if(this.y < this.fontSize){
    this.y = this.fontSize  //画布最上端
  }
  //弹幕超出画布下边界
  if(this.y > this.context.canvas.height - this.fontSize){
    this.y = this.context.canvas.height - this.fontSize  //画布最下端
  }
}

//弹幕绘制方法，将每一条弹幕绘制在画布上呈现出来
Barrage.prototype.renderEach = function(){
  this.context.ctx.font = `${this.fontSize}px Arial`  //字体
  this.context.ctx.fillStyle = this.color //颜色
  this.context.ctx.fillText(this.text, this.x,this.y) //字体填充
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
    barragemanage.render()  //调用render()方法，实现弹幕移动效果，并将移动后的弹幕绘制在画布上
  })

 function send() { 
    //获取到用户填的弹幕信息
    const time = video.currentTime //用户发送弹幕的时间
    const text = $text.value //弹幕文本
    const color = $color.value //弹幕颜色
    const fontSize = $range.value //弹幕字体大小
    const obj = {time, text, color, fontSize} //将用户填的所有弹幕信息放在一个对象里
  
    //添加弹幕
    barragemanage.add(obj) 
  }

btn.addEventListener('click',send) //点击发送弹幕
$text.addEventListener('keyup', function(e) {
  if(e.key ==='Enter'){  //键盘敲击enter键也可以发送弹幕
    send()
  }
})
