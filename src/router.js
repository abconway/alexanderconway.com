import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Bio from '@/components/Bio'
import Resume from '@/components/Resume'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/',
      name: 'base',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/bio',
      name: 'bio',
      component: Bio,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
  ],
})

export default router;