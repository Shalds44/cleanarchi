import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../views/Home.vue'),
        Header: () => import('../components/Header.vue'),
        HeaderFilter: () => import('../components/HeaderFilter.vue'),
        LeftSideBar: () => import('../components/SideBarLeft.vue')
      }
    },
    {
      path: '/profil',
      name: 'profil',
      components: {
        default: () => import('../views/Profil.vue'),
        Header: () => import('../components/Header.vue'),
        LeftSideBar: () => import('../components/SideBarLeft.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import('../views/About.vue'),
        Header: () => import('../components/Header.vue'),
        LeftSideBar: () => import('../components/SideBarLeft.vue')
      }
    },
    {
      path: '/decorator',
      name: 'decorator',
      components: {
        default: () => import('../views/Decorator.vue'),
        Header: () => import('../components/Header.vue'),
      }
    },
  ]
})

export default router
