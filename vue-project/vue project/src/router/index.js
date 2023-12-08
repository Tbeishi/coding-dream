import { createWebHistory,createRouter } from 'vue-router'

const routes = [
    {
        path:'/sy',
        component: ()=> import('../views/shouye.vue')
    },
    {
        path:'/manage',
        component: ()=> import('../views/manage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router