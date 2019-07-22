<template>
<<<<<<< HEAD
	<div>
		<h2>New</h2>
	</div>
</template>

<script>
	export default{
		name:'New'
	}
</script>

<style>
=======
  <div>
    <van-nav-bar
      title="消息"
      left-text="返回"
      @click-left="onClickLeft"
    />
    <ul class="newn">
        <li>用户私信</li>
        <li @click="tap()">关注好友</li>
    </ul>
    <div class="con"></div>
    <div class="card">
         <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563632896284&di=02e6d357294c0f66354807b651a3787e&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F83025aafa40f4bfb2d7fbfc30b4f78f0f63618fd.jpg" alt="">
         <div class="cardnew">
            <h6 @click="tap1()">回复我的</h6>
        </div>
    </div>
    <div class="card">
         <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3487561539,1104310160&fm=26&gp=0.jpg" alt="">
         <div class="cardnew">
            <h6 @click="tap2()">喜欢我的</h6>
        </div>
    </div>
    <div class="card">
         <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1262533760,3242230717&fm=26&gp=0.jpg" alt="">
         <div class="cardnew">
            <h6 @click="tap3()">系统通知</h6>
        </div>
    </div>

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
export default {
  name: "New",
  data() {
    return {
        footer:3,
        active: 0
    }
  },
  components: {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tap(){
      this.$router.push('/newview')
    },
    tap1(){
      this.$router.push('/newres')
    },
    tap2(){
      this.$router.push('/newlike')
    },
    tap3(){
      this.$router.push('/newnotice')
    }
  }
}
</script>

<style scoped>
.newn{
    width: 100%;
    height: 36px;
}
.newn li{
    margin-top:10px;
    margin-left: 75px;
    text-align: center;
    height: 70%;
    float:left;
    font-size: 14px;
}
.newn li:nth-child(1){
  border-bottom:1px solid #ccc;
}
.con{
    width:100%;
    height: 10px;
    background:rgb(245, 245,245);
}
.card {
    margin-top: 10px;
    width: 100%;
    height:50px;
    position: relative;
}
.card img{
    display: block;
    height: 55px;
    width:55px;
    border-radius: 50%;
    position: absolute;
    left:15px;
    top:0;
    background: rgb(245, 245,245);
}
.cardnew{
    position: absolute;
    right:10px;
    top:0;
    width: 70%;
    height: 50px;
    border-bottom:2px solid #cccccc;
}
.cardnew h6{
    font-size:12px;
    position: absolute;
    left:0;
    top:15px;
}
.van-nav-bar__text {
  font-size: 10px;
  margin-left: 5px;
    display: inline-block;
    color:black;
    height: 20px;
    line-height: 20px;
    background: rgb(245, 245,245);
    vertical-align: middle;
}
>>>>>>> bfb5a5a808fdfab217de2f3562018cdea1dd6199
</style>