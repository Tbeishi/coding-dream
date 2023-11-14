# 小程序外包

-当下最流行的线上线下结合程序
    外卖app 移动时代的红利，因为手机的普及，手机的定位GPS Location Base Service LBS
    陌陌 LBS
-小程序 中小商家，扫码拿小程序  让线下的实体店，立马线上化，软件化 o2o
offline To online 轻量化，不用安装

# 汽车4s店小程序开发
-商业级别的中小型外包程序，需要什么样的开发能力
-开发约定，架构思路，简单
    -pages 概念
        -由页面构成
            -wxml html html也是xml的一种 写结构wexinxml 没有div,只有view
            对象字面量JSON 数据交换标准
            xml是早于JSON的数据交换标准
            <reviewer>
                <name>小米</name>
                <age>18</age>
            </reviewer>
            {
                name:'小米',
                age:18
            }
            -wxss 相当于css
            -js 负责交互，数据管理    Ajax负责网络请求，向后端发送
            -json 配置文件
        -app.json
            app开头的都是全局的，是所有的页面共享的

        -切图

-数据驱动界面思想 MVVM
    -可以在JS里配置一个data区域，
    {{ 数据绑定 占位符 info.name}}
    wxml 静态页面 模板
    data 模板数据
    页面 = 模板 + 数据
    数据改变，模板会重新编译，显示新的页面
-优质项目开发思路
    -wxml有着html不具备的组件，image,swiper可以快速实现幻灯片
    看文档
    -css开发，将样式按照原子功能，封装，有利于未来项目的复用
        -当你发现在重复写样式的时候
            white hero section
            一行或几行css，形成了一个功能模块
            .sub-header{ 副标题
                font-size:;
                line-height:;
                font-family:;
            }
        -慢慢积累经验