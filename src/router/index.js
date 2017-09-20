import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Admin from '../components/admin/Admin'
import Headers from '../components/Header/Headers'
import Navber from '../components/navber/Navber'
import main from '../components/main/main';
import man from '../components/man/man';
import editor from '../components/editor/editor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path:'/Admin',
      name:'Admin',
      component:Admin,
      children:[

        {
          path:'/Navber/main',
          name:'main',
          component:main
        },{
          path:'/Navber/man',
          name:'man',
          component:man
        },{
          path:'/Navber/editor:id',
          name:'editor',
          component:editor
        },
      ]
    },{
      path:'/Headers',
      name:'Headers',
      component:Headers
    }
    ,{
      path:'/Navber',
      name:'Navber',
      component:Navber,
      children:[ ]
    }
  ]
})
