<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            :default-active="$route.path"
            :collapse="SidebarStore.collapse"
            router
            >
            <!-- slot 自定义组件的内部 -->
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" 
                    v-permiss="item.permiss"
                    :key="item.index">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item 
                            v-permiss="item.permiss"
                            :index="subItem.index">
                            {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item 
                    :index="item.index" 
                    :key="item.index"
                    v-permiss="item.permiss"
                    >

                        <el-icon>
                            <!-- 我先占位，我是个组件 组件的名字 -->
                            <component :is="item.icon" />
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '../store/sidebar';
const SidebarStore = useSidebarStore()

const items = [
    {
        icon:'Odometer',
        index:'/dashboard',
        title:'系统首页',
        permiss:'1'
    },
    {
        icon:'Calendar',
        index:'1',
        title:'表格相关',
        permiss:'2',
        subs:[
            {
                index:'/table',
                title:'常用表格',
                permiss:'2'
            },
            {
                index:'/import',
                title:'导入Excel',
                permiss:'2'
            },
            {
                index:'/',
                title:'导出Excel',
                permiss:'2'
            }
        ]
    },
    {
        icon:'Edit',
        index:'3',
        title:'表单相关',
        permiss:'4',
        subs:[
            {
                index:'/form',
                title:'基本表单',
                permiss:'5'
            },
            {
                index:'/upload',
                title:'文件上传',
                permiss:'6'
            }
        ]
    }
]
</script>