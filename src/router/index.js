import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
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

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
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

  ]
})
