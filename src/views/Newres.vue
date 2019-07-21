<template>
  <div id="">
    <van-nav-bar
      title="回复我的"
      left-text="返回"
      @click-left="onClickLeft"
    />
    <div class="newcont">
        <van-icon name="smile-comment-o" size="100px"/>
        <p>没有回复我的</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Newres",
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
    top: 30%;
    left: 30%;
}
.newcont p{
    color:#ccc;
}
</style>