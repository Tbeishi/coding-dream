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
            component: ()=> import('@/views/homePage/layoutPage.vue'),
            children:[
                {
                    path:'/food/sy',
                    component: ()=> import('@/views/homePage/homePage.vue'),
                },
                {
                    path:'/food/menu',
                    component: ()=> import('@/views/menuPage/menuPage.vue'),
                },
                {
                    path:'/food/orders',
                    component: ()=> import('@/views/orderPage/ordersPage.vue'),
                },
                {
                    path:'/my/profile',
                    component: ()=> import('@/views/myPage/myProfilePage.vue'),
                },
                {
                    path:'/my/avatar',
                    component: ()=> import('@/views/myPage/myAvatarPage.vue'),
                },
                {
                    path:'/my/password',
                    component: ()=> import('@/views/myPage/myPasswordPage.vue'),
                },
                {
                    path:'/my/cart',
                    component: ()=> import('@/views/cartPage/cartPage.vue'),
                },
            ]
        },
    ]
})

export default router