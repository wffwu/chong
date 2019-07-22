<template>
  <div>
    <div id="topnav">
      <van-tabbar v-model="top"  class="top" router="true"> 
        <van-tabbar-item to="/cmtq">圈子</van-tabbar-item>
        <van-tabbar-item to="/cmto">关注</van-tabbar-item>
        <van-tabbar-item to="/cmtn">最新</van-tabbar-item>
        <van-tabbar-item >热门</van-tabbar-item>
        <van-tabbar-item>推荐</van-tabbar-item>
        <van-icon name="stop" size="25px" color="#cccccc"/>
      </van-tabbar>
    </div>
     
        <router-view @toparent="getval"></router-view>
      
      <van-tabbar v-model="footer">
        <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/cmt">社区</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/Buy">宠购</van-tabbar-item>
        <van-tabbar-item icon="comment-o" to="/new">消息</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'; 
export default {
  name: "Cmt",
  data(){
    return {
      top: 0,
      footer:1,
    }
  },
  methods: {
    getval(msg){
      this.top=msg;
    }
  },
}
</script>

<style scoped>
#topnav{
  margin-bottom: 50px;
}
.top{
  position: fixed;
  top: 0;
  left: 0;
}
.van-icon-stop:before {
    content: "\F0C0";
    margin-top: 15px;
}
</style>