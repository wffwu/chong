<template>
  <div>
    <ul class="qzz">
        <li>我的圈子</li>
        <li @click="tap()">更多圈子</li>
    </ul>
    <div class="con"></div>
    <div class="card">
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2462033594,114869459&fm=26&gp=0.jpg" alt="">
         <div class="cardnew">
            <h6>求助问答</h6>
            <p>有问题找专家，解决问题</p>
            <span>今日：44</span>
        </div>
    </div>
    <div class="card" @click="tap()">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563630519749&di=c08c32d897654d314d8fe3b230dbaee5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201404%2F23%2F20140423171029_QF8SV.thumb.700_0.jpeg" alt="">
         <div class="cardnew">
            <h6>狗狗</h6>
            <p>我家有个汪星人</p>
            <span>今日：44</span>
        </div>
    </div>
    <div class="card" @click="tapo()">
        <img src="http://img0.imgtn.bdimg.com/it/u=4043973735,3927050108&fm=214&gp=0.jpg" alt="">
         <div class="cardnew">
            <h6>猫猫</h6>
            <p>看他们嬉闹玩耍</p>
            <span>今日：44</span>
        </div>
    </div>
    <div class="card" @click="tapo()">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=155372899,2467094603&fm=26&gp=0.jpg" alt="">
         <div class="cardnew">
            <h6>爪友生活</h6>
            <p>吃喝玩乐吃抓抓</p>
            <span>今日：44</span>
        </div>
    </div>
     <div class="card" @click="tap()">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563632896284&di=02e6d357294c0f66354807b651a3787e&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F83025aafa40f4bfb2d7fbfc30b4f78f0f63618fd.jpg" alt="">
         <div class="cardnew">
            <h6>其他宠物</h6>
            <p>猫狗外的动物星人</p>
            <span>今日：44</span>
        </div>
    </div>
  </div>

</template>

<script type="text/javascript">
export default {
  name: "Cmtq",
  methods: {
      tap(){
          this.$router.push('/Cmtn')
      },
      tapo(){
          this.$router.push('/Cmto')
      }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding:0;
}
.qzz{
    width: 100%;
    height: 36px;
}
.qzz li{
    margin-left: 70px;
    width: 25%;
    float:left;
    font-size: 10px;
    line-height:36px;
}
.zsnew li{
    position: relative;
    height: 100px;
}
.con{
    width:100%;
    height: 10px;
    background:rgb(245, 245,245);
}
.card {
    margin-top: 10px;
    width: 100%;
    height:60px;
    position: relative;
}
.card img{
    display: block;
    height: 55px;
    width:22%;
    background: #ccc;
    position: absolute;
    left:7px;
    top:0;
}
.cardnew{
    position: absolute;
    right:10px;
    top:0;
    width: 70%;
    height: 55px;
    border-bottom:1px solid #cccccc;
}
.cardnew h6{
    font-size:12px;
    font-weight: 100;
    position: absolute;
    left:0;
}
.cardnew p{
    font-size:6px;
    color:#cccccc;
    position: absolute;
    top:20px;
    left:0;
}
.cardnew span{
    display: block;
    font-size:12px;
    position: absolute;
    right:0;
}
</style>