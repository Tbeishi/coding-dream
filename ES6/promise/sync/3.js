function a() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve() //手动声明代码执行成功，否则不认执行成功
            console.log('a');
        },1000)
    })
}

function b() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
            console.log('b');
        },1500)    
    })
}

function c(){
    console.log('c');
} 

// Promise.all([a(),b()]).then(c)
Promise.race([a(),b()]).then(c)

//all 必须要接收到的所有的promise状态都为resolve,then才会调用