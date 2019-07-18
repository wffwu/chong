<template>
  <div>
    <van-nav-bar
      :title="title"
      :fixed="true"
    />
    <h2>欢迎：{{this.$store.state.name}}</h2>
    <div id="inner">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <router-view @toparent="getval"></router-view>
      </van-pull-refresh>

    </div>


    <van-tabbar v-model="active" class="foot">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friend">朋友</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type="text/javascript">
import { Toast } from 'vant';
export default {
  name: 'Index',
  data(){
    return {
      active:'',
      title:"首页",
      isLoading: false
    }
  },
  methods: {
    getval(msg){
      this.title=msg
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    }
  }

}
</script>

<style scoped>
#inner{
  margin-bottom: 50px;
}
</style>
