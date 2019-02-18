import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoOrder from '@/components/Todos/TodoOrder'
import TodoTaskDetails from '@/components/Todos/TodoTaskDetails'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'todoOrder',
      component: TodoOrder
    },
    {
      path: '/detail/:id',
      name: 'todoTaskDetails',
      component: TodoTaskDetails
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/singin',
      name: 'registration',
      component: Registration
    }
  ],
  mode: 'history'
})
