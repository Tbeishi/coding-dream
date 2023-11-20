1、npm init -y 初始化包配置文件
2、npm i express@4.17.1 安装特定版本的express
3、创建一个app.js的文件,router文件夹
4、npm i cors@2.8.5  安装特定版本的cors，解决跨域问题
5、app.use(express.urlencoded({extended: false})); //解析application/x-www-form-urlencoded格式的表单数据
req.query 获取get请求中的参数