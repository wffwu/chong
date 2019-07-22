import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
<<<<<<< HEAD
import Index from '@/views/Index'
import Cmt from '@/views/Cmt'
import Buy from '@/views/Buy'
import New from '@/views/New'
import Mys from '@/views/Mys'
import Search from '@/views/Search'
import SyNear from '@/views/Synear'
import RecStore from '@/views/Recstore'
import Recsyd from '@/views/Recstoreyhjdetail'
import RecstoreCat from '@/views/RecstoreCat'
import RecstoreDog from '@/views/RecstoreDog'
import RecSPint from '@/views/RecstorePinT'
import RecBaby from '@/views/Recbaby'
import RecBaby1 from '@/views/Recbaby1'
import Recbabygr from '@/views/Recbabygeren'
import RecHelp from '@/views/RecHelp'
=======

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




>>>>>>> bfb5a5a808fdfab217de2f3562018cdea1dd6199

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
<<<<<<< HEAD
	  {
	  	path:'/',
	   	redirect:'/index'
	  },
	  {
	  	path:'/index',
	   	component:Index
	  },
	  {
	  	path:'/search',
	   	component:Search
	  },
	  {
	  	path:'/cmt',
	   	component:Cmt
	  },
	  {
	  	path:'/buy',
	   	component:Buy
	  },
	  {
	  	path:'/new',
	   	component:New
	  },
	  {
	  	path:'/my',
	   	component:Mys
	  },
	  {
	  	path:'/near',
	   	component:SyNear
	  },
	  {
	  	path:'/store',
	   	component:RecStore
	  },
	  {
	  	path:'/yhj',
	  	component:Recsyd
	  },
	  {
	  	path:'/cat',
	  	component:RecstoreCat
	  },
	  {
	  	path:'/dog',
	  	component:RecstoreDog
	  },
	  {
	  	path:'/team',
	  	component:RecSPint
	  },
	  {
	  	path:'/baby',
	  	component:RecBaby
	  },
	  {
	  	path:'/baby1',
	  	component:RecBaby1
	  },
	  {
	  	path:'/babygr',
	  	component:Recbabygr
	  },
	  {
	  	path:'/help',
	  	component:RecHelp
	  }
=======
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

>>>>>>> bfb5a5a808fdfab217de2f3562018cdea1dd6199

  ]
})
