# 机器学习任务
transformers huggingface的核心库
- pipeline 分发任务
   pipeline(task,model)
- 数组和 hashTable|Dict
    -相同点
        数据容器 线性 
    -区别
        数组,Dict 和栈 队列 链表 连续和不连续
        连续 内存空间
        非线性 树 图
        查找线性容器
-transformers 支持哪些nlp任务
    SUPPORTED_TASKS 常量
    items 值是一个Dict （JS中的JSON）
    for k,v in     for 计数循环
    图解HTTP 协议
    计算机组成原理
-读/写 操作系统 I/O 操作 Input 内存
output 显示器 硬盘
    同步代码 I/O 远程-》 内存|硬盘 网络传输的耗时
    for()  ms结束 多进程切换 轮循
    同步代码会阻塞后面代码运行

-requests 网络请求
requests.get(url,stream=True).raw
http 请求的方法 get 明文请求 post 提交表单
-PIL库 图片的读写等...
    Image  r
    ImageDraw  w
-object-detection
