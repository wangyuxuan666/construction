import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

let routes = [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },{
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
