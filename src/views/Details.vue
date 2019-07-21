<template>
    <div> 
       <van-nav-bar id="zuche" title="商家详情"  left-text="返回" left-arrow   @click-left="onClickLeft" :fixed="true"/>
        <div id="nav00" >
                <img :src="arr[s].storeLogo" alt="" id="pic">
                <h4 id="dianming">{{arr[s].storeName}}</h4>
                <h6>{{arr[s].storeAddress}}</h6>
                <h5>联系TA</h5>
                <button>关注</button>
        </div>
        <ul id="nav01">
            <li to="/fenlei" @click="fenlei()">宠物</li>
            <li to="/select" @click="select()">评价</li>  
            <li to="/select" @click="select()">简介</li>      

        </ul>
        <div id="inner" v-for="(item,i) in list" :key="i">
             <p><img :src='item.petImage' alt="" to="/detail" @click="detail(item.id)"></p>
             <p class="name">{{item.petName}}</p>
             <p class="desc">{{item.petDetail}}</p>
             <h4 class="price">{{item.petPrice}}</h4>
        </div>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
  name:'Friends',
    data(){
   return {
       active: 0,
       list:"",
       footer:2,
       arr:'',
       s:0
     }
  },
  mounted(){
      var _this=this;
      axios({
          url:"http://renaaa.natapp1.cc/pet/animal/showAllPet"
      }).then((data)=>{
         // console.log(data.data)
          this.list=data.data;
      }),
       axios({
          url:"http://renaaa.natapp1.cc/pet/store/showStore",
        params:{storeId:_this.$route.params.storeId}
      }).then((data)=>{
         // this.list=data.data
         this.arr=data.data;
         console.log(this.arr);
         var st=_this.$route.params.storeId;
         this.s=st;

      })
  },
  methods:{
      onClickLeft(){
      this.$router.go(-1)
    },
    fenlei(){
      this.$router.push('/fenlei')
    },
    select(){
      this.$router.push('/select')
    },
    detail(id){
      this.$router.push('/detail/'+id)
    },
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

#dianming{
    width: 90px;
    height: 25px;
    float: left;
    background: #E5E5E5;
    margin:10px 0  0 20px
}
#nav00{
    margin-top: 70px;
    /* background: red; */
    height: 100px;
    position: relative;
}
#nav00 button{
    width: 40px;
    height: 20px;
    position: absolute;
    text-align: center;
    line-height: 20px;
    font-size: 13px;
    background: #E5E5E5;
    color: #91918F;
    border: none;
    top: 30px
}
#nav00 h6{
    width: 60px;
    height: 15px;
    color:#cecece;
    font-size: 10px;
    top: 35px;
    left: 100px;
    position: absolute;
    float: left;
    text-align: left;

}
#nav00 h5{
    text-align: left;
    width: 60px;
    height: 15px;
    background: #E5E5E5;
    font-size: 10px;
    color: #8D9EA7;
     top: 57px;
     left: 100px;
     position: absolute;
    float: left;
}
#pic{
    display: block;
    float: left;
    width:70px;
    height:70px;
    background:#cecece;
    margin-left: 10px;
    border-radius: 50%;
    /* margin-top: 70px */
}
#zuche{
  border-bottom: 1px solid #cecece;
  font-size: 16px
}

#nav01 li{
    float: left;
    width: 33.3%;
    height: 30px;
    margin-top: 10px;
    font-size: 13px;
    border-bottom:1px solid #cecece;

}

#nav01{
    width: 100%;
    height: 30px;
}

van-tabbar-item{
    color: black;
}

#inner{
    /* background:red; */
    width: 150px;
    /* margin: 3px; */
    border:4px solid #F3F1F1;
    float: left;
    height: 250px;
    text-align: left
}

.van-nav-bar__title van-ellipsis{
    margin-left: 40px
}

img{
    
    display: block;
    margin-top:5px;
    width: 140px;
    height: 160px;
    margin-left: 6px
}
.name,.price,.desc{
    color:black;
    font-size: 14px;
    margin-bottom: 6px;
    margin-top:6px

}
.van-nav-bar__title{
  max-width: 100%
}
</style>
