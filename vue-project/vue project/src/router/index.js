import { createWebHistory,createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/food/sy'
        },
        {
            path:'/login',
            name:'login',
            component: ()=> import('@/views/loginPage/loginPage.vue'),
        },
        {
            path:'/food/sy',
            component: ()=> import('@/views/homePage/layoutPage.vue'),
            children:[
                {
                    path:'/food/sy',
                    name: 'home',
                    component: ()=> import('@/views/homePage/homePage.vue'),
                },
                {
                    path:'/food/menu',
                    name:'menu',
                    component: ()=> import('@/views/menuPage/menuPage.vue'),
                },
                {
                    path:'/food/orders',
                    name:'orders',
                    component: ()=> import('@/views/orderPage/ordersPage.vue'),
                },
                {
                    path:'/my/profile',
                    name:'myprofile',
                    component: ()=> import('@/views/myPage/myProfilePage.vue'),
                },
                {
                    path:'/my/notLogin',
                    name:'notLogin',
                    component: ()=> import('@/views/myPage/notLoginPage.vue'),
                },
                {
                    path:'/my/avatar',
                    name:'myavatar',
                    component: ()=> import('@/views/myPage/myAvatarPage.vue'),
                },
                {
                    path:'/my/password',
                    name:'mypassword',
                    component: ()=> import('@/views/myPage/myPasswordPage.vue'),
                },
                {
                    path:'/my/cart',
                    name:'mycart',
                    component: ()=> import('@/views/cartPage/cartPage.vue'),
                },
                {
                    path:'/my/pay',
                    name:'pay',
                    component: ()=> import('@/views/payPage/payPage.vue'),
                },
            ]
        },
    ]
})

export default router