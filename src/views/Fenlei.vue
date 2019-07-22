<template>
    <div>
       <van-nav-bar id="zuche" title="萌宠"  left-text="返回" left-arrow   @click-left="onClickLeft" :fixed="true"/>
      
        <ul id="nav01">
            <li to="/fenlei" @click="fenlei()">分类</li>
            <li to="/select" @click="select()">筛选</li>
        </ul>

        <!-- <div id="center"> -->
          <ul id="nav03">
          <li>不限</li>
          <li @click="tap()">猫猫</li>
          <li @click="tap1()">狗狗</li>
          <li>小宠</li>
          </ul>
        <!-- </div> -->
        <div id="inner" >
             <!-- <div v-for="(item,i) in list" :key="i" id="inner1">
             <img :src='item.petImage' alt="" id="pic"  to="/detail" @click="detail(item.id)"> 
             <h5 class="name">{{item.petName}}</h5> -->
             <router-view></router-view>           
        </div>
       
    </div>
       
</template>

<script>
import axios from 'axios'
export default {
  name:'Friends',
    data(){
   return {
     activeKey: 0,
     list:[]
     }
  },

  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
     onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
     fenlei(){
    //   this.$store.commit('login',this.username),
      this.$router.push('/fenlei')
    },
    select(){
    //   this.$store.commit('login',this.username),
      this.$router.push('/select')
    },
    detail(id){
      this.$router.push('/detail/'+id)
    },
    tap(){
      this.$router.push('/cat')
    console.log("aa")
    },
    tap1(){
      this.$router.push('/dog')
    console.log("aa")
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0
}

#pic{
  width: 67px;
  height: 67px;
  display: block;
  /* margin: 10px 0 0 10px */
  border-radius: 50%
}
#nav01 li{
    float: left;
    width: 50%;
    height: 30px;
    font-size: 13px;

}
#nav01{
  width: 100%;
  height: 50px;
  margin-top: 40px;
  border-bottom:1px solid #cecece;
  line-height: 50px
}
#nav02{
  font-size: 12px;
  margin-top:60px;
  border: none;
  border-right: 1px solid #cecece;
  float: left;
}
#inner1{
  width: 25%;
  height: 80px;
  float: left;
  padding: 10px;
  
}
#zuche{
  /* border-bottom: 1px solid #cecece; */
  font-size: 16px
}

.van-nav-bar__title{
  max-width: 100%
}
#nav03{
  text-align: left;
  height: 100%;
  width: 60px;
  float: left;
  /* position:fixed; */
}

#nav03 li{
  text-align: center;
  height: 60px;
  line-height: 60px;

  color:black;
  font-family: bold;
  font-size: 13px
}
#inner{
  height: 100%;
  /* background: red; */
  width: 80%;
  float: right;
  border-left:1px solid #cecece;

}

</style>
