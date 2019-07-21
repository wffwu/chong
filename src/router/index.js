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


import Buy from '@/views/Buy'
import Fenlei from '@/views/Fenlei'
import Select from '@/views/Select'
import Detail from '@/views/Detail'
import Details from '@/views/Details'
import Danbao from '@/views/Danbao'
import Libao from '@/views/Libao'
import Cat from '@/views/Cat'
import Dog from '@/views/Dog'



//社区
import Cmt from '@/views/Cmt'
import Cmtq from '@/views/Cmtq'
import Cmto from '@/views/Cmto'
import Cmtn from '@/views/Cmtn'
//消息
import New from '@/views/New'
import Newview from '@/views/Newview'
import Newres from '@/views/Newres'
import Newlike from '@/views/Newlike'
import Newnotice from '@/views/Newnotice'
//首页-圈子详情
import Qzdetail from '@/views/Qzdetail'





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
    },
    {
      path:'/',

      redirect:'/Buy'
    },
    {
      path:'/buy',
      component:Buy
    },
    {
      path:'/fenlei',
      component:Fenlei,
      children:[
        {
          path:'/cat',
          component:Cat,
        },
        {
          path:'/dog',
          component:Dog,
        }
      ]   
    },
    {
      path:'/select',
      component:Select
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/details/:storeId',
      component:Details
    },
    {
      path:'/danbao',
      component:Danbao
    },
    {
      path:'/libao',
      component:Libao
    },
   
    {
      redirect:"/Cmt"
    },
    {
      path:'/Cmt',
      redirect:"/cmtq",
      component:Cmt,
      children:[
        {
          path:'/cmtq',
        component:Cmtq
        },
        {
          path:'/cmto',
        component:Cmto
        },
        {
          path:'/cmtn',
        component:Cmtn
        }
      ]
    },
    {
      path:'/new',
      component:New
    },
    {
      path:'/newres',
      component:Newres
    },
    {
      path:'/newlike',
      component:Newlike
    },
    {
      path:'/newnotice',
      component:Newnotice
    },
    {
      path:'/newview',
      component:Newview
    },
    {
      path:'/qzdetail',
      component:Qzdetail
    }


  ]
})
