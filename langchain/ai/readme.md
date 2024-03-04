js 早期的js 没有模块化的概念 文件的加载顺序手动
<script src="./a.js" defer></script>
<script src="./b.js"></script>
<script src="./c.js"></script>

node commonjs
    js ? 语言 -》 编译成二进制 v8 引擎 chrominum 内核   不包含浏览器UI

    node c++ 封装了chrominum js运行时 commonJS require module.exports
    后端天生复杂
    前端应用随着VUE/React 也变得复杂起来了 ESModule 出来了
    难道 node 用commonjs 前端用ESModule吗？
    node 也支持 ESModule
    mjs？node安装的新版本，可能直接支持ESModule,如果老一点的版本用.mjs后缀来声明