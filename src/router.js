import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import DefaultLayout from './layouts/Default.vue'
import MainLayout from './layouts/MainLayout.vue'

// Views
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import ListAlerts from './views/listAlert.vue'
import Confirmations from './views/Confirmations.vue'
import Finish from './views/finish.vue'
import Follow from './views/Followship.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    },
    {
      path: '/vegetation',
      component: MainLayout,
      children: [
        {
          path: '/Vegetation',
          name: 'vegetation',
          component: ListAlerts
        }
      ]

    },
    {
      path: '/confirmations',
      name: 'Confirmations',
      component: Confirmations
    },
    {
      path: '/finish',
      name: 'finish',
      component: Finish
    },
    {
      path: '/follow',
      name: 'follow',
      component: MainLayout,
      children: [
        {
          path: '/follow',
          name: 'going along',
          component: Follow
        }
      ]
    },
  ]
})
