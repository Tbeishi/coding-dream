function A(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('异步A完成');
            resolve()
        },1000)
    })
}

function B(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('异步B完成');
        resolve()
    },500)
    })
}

function C(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('异步C完成');
        resolve()
    },500)
    })
}

// A()
// B()

async function foo() {
    await A() //await会阻塞后续代码，将后续代码推入微任务队列
    console.log(1)
    await B()
    await C()
}

foo()
// 异步A完成
// 1
// 异步B完成
// 异步C完成