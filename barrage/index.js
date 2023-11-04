let data = [
    { value:'今天你听妈妈的话了吗？',color:'red',fontSize:22,time:5},
    { value:'不听不同，就要恋爱',color:'green',fontSize:30,time:10},
    { value:'爱你爱你',color:'yellow',fontSize:30,time:13},
]
CanvasBarrage.prototype.render = function(){
    //清除画布
    this.clear()
    this.renderBarrage()//弹幕绘制在画布上
    if(!this.isPaused()) {
        requestAnimationFrame(this.render.bind(this))
    }
}
// 整理弹幕数据
function CanvasBarrage(canvas,video,opts={}){
    if(!canvas || !video) return
    this.canvas = canvas
    this.video = video
    //设置canvas宽高和video保持一致
    this.canvas.width = video.width
    this.canvas.height = video.height
    //获取画布
    this.ctx = canvas.getContext('2d')
    //初始化弹幕
    let defopts = {
        color:'#e91e63',
        fontSize:20,
        speed:1.5,
        opacity:0.5,
        data:[]
    }
    Object.assign(this,defopts,opts)

    //视频播放，弹幕才出现
    this.isPaused = true
    //获取到所有弹幕
    this.barrages = data
    //移动弹幕
    this.render()
}

const canvas = document.getElementById('canvas');
new CanvasBarrage(canvas,video,opts)