import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Buy from '@/views/Buy'
import Fenlei from '@/views/Fenlei'
import Select from '@/views/Select'
import Detail from '@/views/Detail'
import Details from '@/views/Details'
import Danbao from '@/views/Danbao'
import Libao from '@/views/Libao'
import Cat from '@/views/Cat'
import Dog from '@/views/Dog'





Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
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
   
  ]
})
