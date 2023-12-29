import { createWebHistory,createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/sy',
            component:()=>import ('@/views/layout/layoutPage.vue'),
            children:[
                {
                    path:'/sy',
                    name:'sy',
                    component:()=>import ('@/views/homePage/homePage.vue'),
                },
                {
                    path:'/food',
                    name:'food',
                    component:()=>import ('@/views/foodPage/foodPage.vue')
                },
                {
                    path:'/member',
                    name:'member',
                    component:()=>import ('@/views/memberPage/memberPage.vue')
                },
            ]
        },
       
    ]
})

export default router