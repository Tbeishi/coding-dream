import { createWebHistory,createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/login'
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
                    path:'/food/sy/:user',
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
                    path:'/my/cart/:cartData',
                    name:'mycart',
                    component: ()=> import('@/views/cartPage/cartPage.vue'),
                },
            ]
        },
    ]
})

export default router