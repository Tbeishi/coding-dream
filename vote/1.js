// 把金数据的2200 数据 拿到的写法
const FID = TM8uOr

const getData = async () => {
    const res = []
    const count = 50
    let next = 0
    while( count === 50 ){
        let url = `https://jinshuju.net/api/v1/forms/${FID}/entries`
        if(netx){
            url = `${url}?next=${next}`
        }
        const res = await fetch(url,{
            
        })
        const data = res.json() 
        count = data.count
        res = res.concat(data.data)
}
}