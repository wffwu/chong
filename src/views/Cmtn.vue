<template>
  <div id="cmtn">
    <div class="show" v-for='(item,i) in list' :key="i">
      <div class="tou">
        <img :src="item.pictureUrl" alt="">
        <p>{{item.name}}</p>
        <span>1分钟前</span>
      </div>
      <ol>
        <li><img :src="item.commentImg" alt=""></li>
        <li><img :src="item.commentImg" alt=""></li>
        <li><img :src="item.commentImg" alt=""></li>
        <li><img :src="item.commentImg" alt=""></li>
      </ol>
       
       <ul>
          <li>
            <van-icon name="coupon-o"/>
            <span>回复</span>
          </li>
          <li>
            <van-icon name="like-o"/>
            <span>喜欢</span>
          </li>
       </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'; 
export default {
  name: "Cmtn",
  data() {
    return {
      loading: true,
      top:2,
      list:[]
    }
  },
  components: {
  },
   mounted () {
    this.$emit('toparent',this.top);
    axios({
      url:'http://renaaa.natapp1.cc/pet/comment/showComment'
    }).then((data)=>{
      console.log(data.data)
      this.list=data.data
    })
  },
}
</script>

<style scoped>
.show span{
  display: block;
  margin-top: 15px;
  margin-left:20px;
  font-size:10px;
}
#cmtn{
  margin-bottom: 50px;
}
ol{
  margin:0 auto; 
  width: 90%;
}
ol li{
  float:left;
  width:48%;
  margin-bottom: 5px;
  margin-left:5px;
  height: 80px;
}
ol li img{
  width:100%;
  height:100%;
}
.van-skeleton {
    display: flex;
    padding: 10px 0;
    margin-left: 20px;
}
ul{
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
  border-top: 1px solid #ccc; 
  border-bottom: 1px solid #ccc; 
}
ul li{
  height: 25px;
  width: 49%;
  text-align: center;
  float:left;
  position: relative;
}
ul li:nth-child(2){
  border-left:1px solid #ccc; 
} 
li .van-icon{
  position: absolute;
  left: 65px;
  top:5px;
}
li span{
   position: absolute;
  left: 70px;
  top:-11px;
}
.tou{
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 8px;
}
.tou img{
  position: absolute;
  top: 10px;
  left: 20px;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(245, 245, 245)
}
.tou p{
  font-size:14px;
  position: absolute;
  top:10px;
  left:65px;
}
.tou span{
  font-size:12px;
  color: #ccc;
  position: absolute;
  top:10px;
  left:45px;
}
</style>