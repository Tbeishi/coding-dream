// 导入express
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())


//导入路由
const userRouter = require('./router/user')
app.use('/api',userRouter)

app.listen(520,()=>{
    console.log('服务器在http://127.0.0.1:520启动成功！');
})


