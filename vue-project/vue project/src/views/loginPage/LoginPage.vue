<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user';

const UserStore = useUserStore()
//准备表单对象
const refForm = ref({
    name:'',
    password:'',
})

const formdata = ref(null)
const router = useRouter()
//准备规则对象
const refRuler = ref({
    name:[{ required: true, message: '账号不能为空', trigger: 'blur' }],
    password:[
        { required: true, message: '密码不能为空', trigger: 'blur' },
        { min: 5, max: 8, message: '密码字符至少为5-8位', trigger: 'blur' }]
})

const doregust = ()=>{
    formdata.value.validate((valid)=>{
        if(valid){
           ElMessage({ type:'success', message:'注册成功！'})
        }
    })
}

const dologin = ()=>{
    const {name} = refForm.value
    formdata.value.validate((valid)=>{
        if(valid){
           ElMessage({ type:'success', message:'登录成功！'})
           UserStore.user = name
           router.push({
            name:'home',
        })
    }
})
}
</script>

<template>
    <div class="loginpage">
        <div class="login">登录</div>
         <el-form ref="formdata" :model="refForm" :rules="refRuler" status-icon>
            <el-form-item label="账号" prop="name" class="zh">
            <el-input v-model="refForm.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password" class="zh">
           <el-input type="password"  autocomplete="off"  v-model="refForm.password"/>
           </el-form-item>
        </el-form>
        <div class="bq1"><el-button class="bt" type="primary" @click="dologin">登录</el-button></div>
        <div class="bq2"><el-button class="bt" type="primary" @click="doregust">注册</el-button></div>
    </div>
    
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.loginpage{
    width: 450px;
    height: 450px;
    background-color: #b4afaf;
    border-radius: 40px;
    text-align: center;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.login{
    padding-top: 10px;
    font-size: 50px;
    font-family: 楷体;
    font-weight: 700;
}

.zh{
    margin: 30px 40px;
}

.bt{
    width: 100px;
    height: 50px;
}

.bq1{
    position: absolute;
    left: 100px;
    bottom: 100px;
}

.bq2{
    position: absolute;
    right: 100px;
    bottom: 100px;
}

.el-input{
  width:300px;
}
</style>