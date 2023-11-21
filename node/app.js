// 导入express
const express = require('express');
const app = express();
const router = express.Router();

//解决跨域问题
const cors = require('cors');
app.use(cors())

//登录接口
const userRouter = router.get('/login', (req, res) => {
    const { username, password } = req.query
    //定义邮箱校验规则
    const rules = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (rules.test(username)) {
      res.send ({
        status: 200,
        message: '登录成功'
      })
    } else {
      res.send({ 
        status: 0,
        message: '邮箱或密码错误'
      })
    }
})

app.use(userRouter)

//在端口号520运行接口
app.listen(520,()=>{
    console.log('服务器在http://127.0.0.1:520启动成功！');
})
