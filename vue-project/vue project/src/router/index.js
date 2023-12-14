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
            component: ()=> import('../views/sy/shouye.vue'),
            children:[
                {
                    path:'/food/sy',
                    component: ()=> import('../views/sy/sy.vue'),
                },
                {
                    path:'/food/menu',
                    component: ()=> import('../views/menu/menu.vue'),
                },
                {
                    path:'/food/orders',
                    component: ()=> import('../views/order/orders.vue'),
                },
                {
                    path:'/my/profile',
                    component: ()=> import('../views/my/myProfile.vue'),
                },
                {
                    path:'/my/avatar',
                    component: ()=> import('../views/my/myAvatar.vue'),
                },
                {
                    path:'/my/password',
                    component: ()=> import('../views/my/myPassword.vue'),
                },
            ]
        },
    ]
})

export default router