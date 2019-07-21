<template>
    <div>
       <van-nav-bar id="zuche" title="萌宠"  left-text="返回" left-arrow   @click-left="onClickLeft" :fixed="true"/>
       <!-- <van-nav-bar id="chongshe" title="宠舍" :fixed="true"/> -->
       <!-- <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" to="/fenlei"/>
       </van-dropdown-menu> -->
       <!-- <ul id="nav01">
            <li to="/fenlei" @click="fenlei()">分类</li>
            <li to="/select" @click="select()">筛选</li>
       </ul> -->   
       <p id="sort">排序</p>
       <ul id="nav02">
         <li>价格升序</li>
         <li>价格降序</li>
         <li>最新</li>
         <li>推荐</li>
       </ul>

       <p >价格</p>
       <ul id="nav02">
         <li>2000元以下</li>
         <li>2000元以下</li>
         <li>2000元以下</li>
       
       </ul>

       <p >性别</p>
       <ul id="nav02">
         <li>DD</li>
         <li>MM</li>
       </ul>

    </div>
       
</template>

<script>
import axios from 'axios'
export default {
  name:'Friends',
    data(){
   return {


     }
  },
  mounted(){
     
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
  }
}
</script>

<style scoped>
#nav01 li{
    float: left;
    width: 50%;
    height: 30px;
    font-size: 13px;
    border-bottom:1px solid #cecece
}
#zuche{
  border-bottom:1px solid #cecece
}

#nav02 li{
  float: left;
  height: 20px;
  width:110px;
  font-size: 12px;
  border: 1px solid #cecece;
  margin-left: 10px;
  margin-bottom: 7px;
  color: #cecece;
  text-align: center;
  line-height: 20px;

}

p{
  width: 100%;
  /* height:60px; */
  float: left;
  font-size: 13px;
  text-align: left;
  margin-left: 10px;

}
#sort{
  margin-top:80px
}

</style>
