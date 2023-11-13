function xq() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('阿纬约会');
            resolve('约完会开房')
        },2000)
    }) 
}

function marry() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('开房嘿嘿嘿');   
            resolve('小纬出生')
        },1000)
    })
}

function baby(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log('继续嘿嘿嘿');
            resolve('二纬出生')
        },500)
    })
}

function baby2(){
    setTimeout(()=>{
        console.log('肾虚了');
    },500)
}q

xq().then((res)=>{
    console.log(res);
    return marry()
}).then((res)=>{
    console.log(res);
    return baby()
}).then((res)=>{
    console.log(res);
    baby2()
})

