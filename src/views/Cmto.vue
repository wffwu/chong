<template>
  <div id='cmto'>
    <div class="show"  v-for='(item,i) in list' :key="i">
      <div class="tou">
        <img :src="item.pictureUrl" alt="">
        <p>{{item.name}}</p>
        <span>半小时前</span>
      </div>
      <p>{{item.comment}}</p>
     
      <span><van-icon name="circle"/><h6>{{item.address}}</h6></span>
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
  name: "Cmto",
  data() {
    return {
      loading: true,
      top:1,
      list:[]
    }
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
  components: {
  }
}
</script>

<style scoped>
.show span{
  display: block;
  margin-top: 15px;
  margin-left:20px;
  font-size:10px;
}
.show p{
  display: block;
  margin-top: 8px;
  margin-left: 22px;
  font-size: 10px;
}
.show h6{
  font-weight: 300;
  margin-left: 15px;
  margin-top: -18px;
}
.van-skeleton {
    display: flex;
    padding: 10px 0;
    margin-left: 20px;
}
ul{
  width: 100%;
  margin-top: 10px;
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
}
.tou img{
  position: absolute;
  top: 10px;
  left: 20px;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.tou p{
  font-size:14px;
  position: absolute;
  left:45px;
}
.tou span{
  font-size:12px;
  color: #ccc;
  position: absolute;
  top:10px;
  left:45px;
}
#cmto{
  margin-bottom: 50px;
}
</style>