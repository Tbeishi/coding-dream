- 何为Typescript
   JavaScript 的超集

- 如何使用ts?
   - 像js一样来写
   - 加点啥？
      - 类型检测
         你在乎的地方 -> 数据

## 项目亮点
- 使用了ElementPlus
   - 登录注册页面 表单
      - 表单的目的是收集数据，:model="" 双向绑定
         每一个el-input v-model=".username"
      - 表单的校验配置一下就好
      - 用户体验做好
         - 自动聚焦
         - @keyup.enter
      - ref 属性 DOM 标记
       - const login = ref(); 
       - Onmounted <form ref="login">
      - 表单提交
         - validate
         