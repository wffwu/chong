<template>
  <div>
 <van-nav-bar
      title="圈子详情"
      left-text="返回"
      @click-left="onClickLeft"
    />
    <div class="card">
        <img src="" alt="">
        <div class="cardnew">
            <h6>求助问答</h6>
            <p>问问题找专家,科学养宠更轻松</p>
            <span>成员：522982</span>
            <label>帖子：151596</label>
        </div>
    </div>
    <div class="con"></div>
    
    <div class="card1">
        <img src="" alt="">
        <h6>圈子描述</h6>
        <p> Nisi, labore nemo alias ea ut vel fugiat autem ipsam magni, sit perspiciatis odio.</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Qzdetail",
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.card {
    margin-top: 10px;
    width: 100%;
    height:80px;
    position: relative;
}
.card img{
    display: block;
    height: 70px;
    width:20%;
    background: #cccccc;
    position: absolute;
    left:10px;
    top:0;
}
.cardnew{
    position: absolute;
    right:10px;
    top:0;
    width: 70%;
    height: 55px;
}
.cardnew h6{
    font-size:12px;
    font-weight: 100;
    position: absolute;
    left:0;
}
.cardnew p{
    font-size:1px;
    color:#cccccc;
    position: absolute;
    top:20px;
    left:0;
}
.cardnew span{
    display: block;
    font-size:1px;
    color:#cccccc;
    position: absolute;
    top:40px;
}
.cardnew label{
    display: block;
    font-size:1px;
    color:#cccccc;
    position: absolute;
    top:60px;
}
.con{
    width: 100%;
    height: 10px;
    background: rgb(245, 245,245);
}

.card1 {
    margin-top: 10px;
    width: 100%;
    height:80px;
    position: relative;
}
.card1 img{
    display: block;
    height: 20px;
    width:20px;
    background: #cccccc;
    position: absolute;
    left:10px;
    top:0;
}
.card1 h6{
    font-size:12px;
    font-weight: 100;
    position: absolute;
    left:35px;
}
.card1 p{
    font-size:1px;
    color:#cccccc;
    position: absolute;
    top:20px;
    left:10px;
}
</style>