<template>
    <div id="imp">
       <van-nav-bar title="详情" :fixed="true"/>
       <van-nav-bar title="宠物详情" left-text="返回" left-arrow   @click-left="onClickLeft" :fixed="true"/>    
        <div id="inner">
          <p class="pic"><img :src="detail.petImage" alt=""></p>
          <p class="name">{{detail.petName}}</p>
          <p class="price">{{detail.petPrice}}元</p>
        </div>
        <div id="center">
          <p class="city">城市：广州市</p>
          <p class="peisong"><b>配送</b><span>自提0元</span><span>同城0元</span><span>外地500元</span></p>
        </div>
        <div id="danbao"  @click="jiaoyi()" to="/danbao" >
          <p class="jiaoyi" >担保交易</p>
          <h5>此交易平台为您的交易全程提供保障</h5>
          <h4>此交易平台为您的交易全程提供保障</h4>
        </div>
        <div id="danbao1" @click="libao()" to="/libao">
          <p class="jiaoyi">安装大礼包</p>
          <h5>此交易平台为您的交易全程提供保障</h5>          
        </div>
        <div id="danbao2" >
          <p class="jiaoyi">担保交易</p>
          <h5>此交易平台为您的交易全程提供保障</h5>
       <van-divider :style="{ color: 'black', borderColor: '#cecece', padding: '10px 3px'}">
          萌宠介绍
       </van-divider>
        <div>
          <h4 style="color:black;">{{detail.petDetail}}</h4>
        </div>
        </div>
        <van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="店铺"
    @click="market(detail.storeId)"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="联系"
   
  />
  <van-goods-action-icon
    icon="cart-o"
    text="收藏"
  />

  <van-button type="primary" @click="showPopup">
  立即购买
</van-button>

<van-popup v-model="show"
  position="bottom"
  :style="{ height: '60%' }">
  

  <p class="zhifu">确认支付</p>
  <h3 class="money">5500.00元</h3>
  
  <ul>
    <li>
      <b>订单信息</b>
      <p class="xinxi">带我护家-支付</p>
    </li>
    <li>
      <b>付款方式</b>
      <p class="xinxi">中国工商银行(4481)</p>
    </li>
  </ul>
  <div class="foot">
      <button class="quxiao" to="/detail" @click="quxiao()">取消</button>
      <button class="quxiao" id="que" @click="tap()">确定</button>
  </div>
  
  </van-popup>
</van-goods-action>
<van-popup v-model="shows"
  position="bottom"
  :style="{ height: '60%' }">

  <div id="out">
    <h3 @click="gos()" id="gos">返回</h3>
    <p id="success">支付</p>
  </div> 
    <van-icon name="passed" id="icon" />
    <h2 id="suc">支付成功！</h2>

</van-popup>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Friends',
    data(){
   return{
     detail:'',
      show: false,
      shows:false
   }
  },
  mounted(){
      // this.$emit('toparent',this.title)
    //  console.log(this.$route.params.id)
    var _this=this;
    axios({
      url:'http://renaaa.natapp1.cc/pet/animal/showOnePet',
      params:{id:_this.$route.params.id}
    }).then((data)=>{
       console.log(_this.$route.params.id)
     // console.log(data.data.data)
      this.detail=data.data
    })
  },
  methods:{
    gos(){
      this.$router.go(-2)
    },
    quxiao(){
      this.$router.go(-1)
    },
    onClickLeft(){
      this.$router.go(-1)
    },
     market(id) {
      // Toast('点击图标');
      this.$router.push('/details/'+id);
    }, 
     showPopup() {
      this.show = true;
    },
    jiaoyi(){
      console.log("aa")
      this.$router.push('/danbao')
    },
    libao(){
      console.log("aa")
      this.$router.push('/libao')
    },
    tap(){
      // this.$router.push('/buy')
     this.shows=true;
    }
  
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0
}
#icon{
  font-size:60px;margin-top:50px
}
#out{
  width: 100%;
  height: 45px;
  /* background: red; */
  border-bottom: 1px solid #cecece;

}
#gos{
  font-weight: normal;
  font-size: 15px;
  text-align: left;
  margin-left: 10px;
  float: left;
  width: 20%;
  height: 45px;
  line-height: 50px;
}
#success{
  float: left;
  width: 53%;
  height: 45px;
  padding-right: 70px;
  line-height: 50px;

}
#suc{
  margin-top: 10px;
  margin-left:17px
}
.jiaoyi{
  font-size: 14px;
  margin-bottom: 10px
}
h4{
  margin-top:5px;
  font-size: 13px;
  color:#cecece;
  width: 100%;
  height: 20px;
}
#danbao{
  margin-top:120px;
  text-align: left;
  margin-left: 10px;
  border-top: 10px solid #F3F1F1

}
#danbao1{
  margin-top:10px;
  text-align: left;
  margin-left: 10px;
  border-top: 10px solid #F3F1F1
}
#danbao2{
  margin-top:10px;
  text-align: left;
  margin-left: 10px;
  margin-bottom:50px;
  border-top: 10px solid #F3F1F1
}
.van-goods-action-icon{
  margin-right: 21px
}
.van-goods-action-icon__icon{
  padding-left: 13px
}
.peisong span{
  text-align: left;
  display: block;
  width: 25%;
  float: left;
}
.city{
  text-align: left;
  margin-left: 10px;
  color: #cecece;
  padding-top: 100px;
  padding-bottom: 5px;
  font-size: 14px
}
.peisong{
  font-size: 14px;
  padding-bottom: 10px
}
#inner{
  margin-top: 50px;
  width: 100%;
  height: 80px;
  /* background: red; */
}
#center{
  border-top: 1px solid #cecece;
  /* background: red; */
  margin-top: 180px;
  width: 100%;
  height: 50px;
}
.pic img{
  display: block;
  width: 100%;
  height: 45%;
}
.name{
  float: left;
  margin-left: 10px;
  width: 50%;
  margin-top:10px;
  text-align: left;
  height: 30px;
  color: black
}
.money{
  width: 100%;
  height: 110px;
  line-height: 110px;
  text-align: center
}

.van-nav-bar__title{
  max-width: 100%
}
.price{
  margin-top: 10px;
  color: red;
  text-align: right;
  margin-right:10px;

}
.zhifu{
  padding-top: 10px;
  padding-bottom: 8px;
  height: 30px;
  line-height: 30px;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid #cecece
} 

li{
  width: 100%;
  height: 40px;
  font-size: 12px;

}
b{
  display: block;
  width: 13%;
  height: 40px;
  float: left;
  font-weight: normal;
  color: #cecece;
  text-align: left;
  padding-left: 10px 
}
/* b span{
  color: black
} */
.xinxi{
  float: right;
  /* font-weight: bold */
}
.footer{
  width:100%;
  height: 30px;
  /* background: red */
}
.quxiao{
  margin-left: 10px;
  float: left;
  border:none;
  width: 74px;
  font-size: 13px;
  height: 18px;
  margin-top: 75px;
  background: #B9B7B7;
  color: #ffffff;
  text-align: center;
  line-height: 18px;
  border-radius: 3px;
}
#que{
  margin-left:48%
}
.van-button__text{
  display: block;
  width: 100px;
  height: 50px;
  /* margin-left:50px; */
}
.van-icon van-icon-cart-o van-goods-action-icon__icon{
  margin-left: 10px
}
.van-goods-action-icon{
  margin-right:22px
}
</style>
