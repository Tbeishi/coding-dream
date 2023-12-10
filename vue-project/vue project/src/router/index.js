import { createWebHistory,createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/food/sy'
        },
        {
            path:'/food/sy',
            component: ()=> import('../views/shouye.vue'),
            children:[
                {
                    path:'/food/menu',
                    component: ()=> import('../views/menu.vue'),
                },
                {
                    path:'/food/orders',
                    component: ()=> import('../views/orders.vue'),
                },
                {
                    path:'/my/profile',
                    component: ()=> import('../views/myProfile.vue'),
                },
                {
                    path:'/my/avatar',
                    component: ()=> import('../views/myAvatar.vue'),
                },
                {
                    path:'/my/password',
                    component: ()=> import('../views/myPassword.vue'),
                },
            ]
        },
    ]
})

export default router