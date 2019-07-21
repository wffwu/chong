import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import MyLogin from '@/views/myLogin'
import MyRegister from '@/views/MyRegister'
import MyCpassword from '@/views/MyCpassword'
import My from '@/views/my'
import MyAbout from '@/views/MyAbout'
import MyRelief from '@/views/MyRelief'
import MyConf from '@/views/MyConf'
import MyCost from '@/views/MyCost'
import MyAdress from '@/views/MyAdress'
import MyAdresx from '@/views/MyAdresx'
import MyNew from '@/views/MyNew'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path:'/login',
      component:MyLogin
    },
    {
      path:'/register',
      component:MyRegister
    },
    {
      path:'/cpassword',
      component:MyCpassword
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/about',
      component:MyAbout
    },
    {
      path:'/relief',
      component:MyRelief
    },
    {
      path:'/conf',
      component:MyConf
    },
    {
      path:'/cost',
      component:MyCost
    },
    {
      path:'/adress',
      component:MyAdress
    },
    {
      path:'/adresx',
      component:MyAdresx
    },
    {
      path:'/mynew',
      component:MyNew
    }
  ]
})
