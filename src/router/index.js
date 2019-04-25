import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

function route (group, path, name, view, props = false) {
  return {
    path: path,
    name: name,
    props: props,
    component: () => import(
      `../pages/${group}/${view}.vue`
    )
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    route('editForm', '/editForm', 'editForm', 'Index'),
    route('dashboard', '/dashboard', 'dashboard_index', 'Index'),
    route('info', '/info', 'info_index', 'Index'),
    route('info', '/info/:id', 'info_show', 'Show', true)
  ]
})
