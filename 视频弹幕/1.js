const data = [
    { value: '今天你掘金了吗？', color: 'red', fontSize: 22, time: 5 },
    { value: '不听不听，就要恋爱', color: 'green', fontSize: 30, time: 10 },
    { value: '小米露我男神', color: '#00a1f5', fontSize: 26, time: 13 },
    { value: '掘金掘金，每日掘金', color: '#00a1f5', fontSize: 26, time: 13 },
    { value: '掘金文章每日来一篇', color: '#00a1f5', fontSize: 26, time: 13 },
  ]


function a(sendData) {
const initData = {
    color: '#e91e63', 
    fontSize: 20,
    speed: 1.5,
    opacity: 0.5,
    // data: []
  }
    Object.assign(this,initData,sendData)
    // this.everyDate = this.data.forEach((item)=>{
    //     console.log(item);
    //   })
    // console.log(this);
}

const b = new a({data})
console.log(b);