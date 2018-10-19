import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/Message'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{auth:true}
    },
    {
      path: '/msg',
      name: 'Message',
      component: Message,
      meta:{auth:true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{auth:false}
    }
  ]
})
