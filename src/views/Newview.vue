<template>
  <div>
    <van-nav-bar
      title="消息"
    />
    <ul class="newn">
        <li @click="tap()">用户私信</li>
        <li>关注好友</li>
    </ul>

    <div class="newcont">
        <van-icon name="description" size="100px"/>
        <p>暂无动态，关注更多</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "NewView",
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
      tap(){
          this.$router.push("/new")
      }
  }
}
</script>

<style scoped>
.newn{
    width: 100%;
    height: 36px;
    border-bottom:1px solid rgb(245, 245,245); 
}
.newn li{
    margin-top:10px;
    margin-left: 75px;
    text-align: center;
    height: 70%;
    float:left;
    font-size: 14px;
}
.newn li:nth-child(2){
  border-bottom:1px solid #ccc;
}
.newcont{
    color: #ccc;
    position: absolute;
    top: 30%;
    left: 33%;
}
.newcont p{
    color:#ccc;
}
</style>