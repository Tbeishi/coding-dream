<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <!-- v-model双向绑定 性能不好 表单的目的收集数据-->
        <el-form
            :model = "param"
            :rules = "rules"
            ref="login"
            label-width ="0px"
            class="ms-content"
        >
        <el-form-item prop="username">
            <el-input autofocus v-model="param.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" 
            autofocus
            v-model="param.password" 
            placeholder="请输入密码"
            @keyup.enter="submitForm(login)"
            >
            </el-input>
        </el-form-item>
        <div class="login-btn">
            <el-button type="primary" @click="submitForm(login)">登录</el-button>
        </div>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { usePermissStore } from '../store/permiss'
import { useRouter } from 'vue-router';
const router = useRouter();
const permiss = usePermissStore()
interface LoginInfo{
    username: string;
    password: string;
}
//和ref区别 复杂reactive
//proxy
//标注一个dom 元素
const param = ref<LoginInfo>({
    username:'',
    password:''
})

const rules = {
    username:[
        {
            required: true,
            message:'请输入用户名',
            trigger:'blur'
        }
    ],
    password:[
        {
            required: true,
            message:'请输入密码',
            trigger:'blur'
        }
    ]
}

const login = ref()
console.log(login.value);

onMounted(()=>{
    console.log(login.value);
})
const submitForm = (e:FormInstance | undefined)=>{
    if(!e){
        return;
    }
    e.validate((valid)=>{
        if(valid){
            ElMessage({type: 'success',message: '登录成功'})
            localStorage.setItem('ms_username',param.value.username)
            const keys = permiss.roleList[param.value.username == 'admin' ? 'admin' : 'user'];
            localStorage.setItem('ms_keys',JSON.stringify(keys));
            router.push('/')
        }
        else{
            ElMessage({type: 'error',message: '请校验表单'})
        }
    })
}
</script>

<style scoped>

</style>
