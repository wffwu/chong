<template>
  <div id="">
    <van-nav-bar
      title="系统通知"
      left-text="返回"
      @click-left="onClickLeft"
    />
    <div class="newcont">
        <van-icon name="comment-o" size="150px"/>
        <p>空空如也</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Newnotice",
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
.van-nav-bar{
    margin-bottom: 45px;
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
.newcont{
  color: #ccc;
    position: absolute;
    top: 20%;
    left: 26%;
}
.newcont p{
    color:#ccc;
}
</style>