<template>
    <div> 
      <van-nav-bar id="zuche" title="贴心小礼品"  left-text="返回" left-arrow   @click-left="onClickLeft" :fixed="true"/>
      <ul id="nav01">
        <li id="jian">猫猫贴心小礼品免费送</li>
        <!-- <li id="ruzhu">入驻商家均由宠平台严格考察审核实时监控</li> -->
      </ul>
       <ul id="nav02">
        <li id="jian">礼品有限，先拍先得</li>
        <!-- <li id="ruzhu">入驻商家均由宠平台严格考察审核实时监控</li> -->
      </ul>
       <ul id="nav02">
        <li id="jian">下单后工作人员会尽快安排您的订单并发货！！</li>
        <!-- <li id="ruzhu">入驻商家均由宠平台严格考察审核实时监控</li> -->
      </ul>
       <ul id="nav02">
        <li id="jian">礼品会不定期的有变化</li>
        <!-- <li id="ruzhu">入驻商家均由宠平台严格考察审核实时监控</li> -->
      </ul>
       
    </div> 
</template>

<script>
import axios from 'axios'
export default {
  name:'Friends',
    data(){
   return {
       active: 0,
       list:"",
       footer:2,      
     }
  },
  mounted(){
     
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
}
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

#nav01{
    width: 100%;
    height: 60px;
    margin-top: 60px;
    text-align: left;
   
}
#nav02{
  width: 100%;
    height: 60px;
    text-align: left;
  
}
#nav02 li{
  margin-left: 10px
  
}
#nav01 li{
  margin-left: 10px
}
#jian{
  font-size: 15px;
  font-weight: bold
}
#ruzhu{
  font-size: 13px;
  margin-top: 10px;
  color: #cecece;
  margin-bottom: 10px;
}
van-tabbar-item{
    color: black;
}


.van-nav-bar__title{
  max-width: 100%
}
</style>
