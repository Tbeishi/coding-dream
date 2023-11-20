const express = require('express');
const router = express.Router();

//登录接口
router.get('/login', (req, res) => {
    console.log(req.query);
    const username = req.query.username
    if(/@+/.test(username)){
    res.send({
        status:200,
        message:'登录成功！'
    })}
    else {res.send({
        status:0,
        message:'邮箱格式不正确！'
    })
}
})

module.exports = router