import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
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
      path:'/',
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
