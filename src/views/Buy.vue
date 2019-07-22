<template>
<<<<<<< HEAD
	<div>
		<h2>Buy</h2>
	</div>
</template>

<script>
	export default{
		name:'Buy'
	}
</script>

<style>
</style>
=======
    <div> 
       <van-nav-bar id="zuche" title="萌宠      宠舍"  left-text="返回" left-arrow   @click-left="onClickLeft" :fixed="true"/>

       <!-- <van-nav-bar id="chongshe" title="宠舍" :fixed="true"/> -->
       <!-- <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" to="/fenlei"/>
       </van-dropdown-menu> -->

        <ul id="nav01">
            <li to="/fenlei" @click="fenlei()">分类<van-icon name="arrow-down" id="jiantou"/></li>
            <li to="/select" @click="select()">筛选<van-icon name="arrow-down" id="jiantou"/></li>      
        </ul>

        <div id="inner" v-for="(item,i) in list" :key="i">
             <p><img :src='item.petImage' alt="" to="/detail" @click="detail(item.id)"></p>
             <p class="name">{{item.petName}}</p>
             <p class="desc">{{item.petDetail}}</p>
             <h4 class="price">{{item.petPrice}}元</h4>
        </div>

         <!-- <ul>
            <li v-for="(item,i) in list" :key="i">
                <img :src="item.pimg" alt="">
                 <p>{{item.pname}}</p>
                 <p>{{item.pdesc}}</p>
            </li>
        </ul>  -->
        
       <van-tabbar v-model="footer">
        <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/cmt">社区</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/Buy">宠购</van-tabbar-item>
        <van-tabbar-item icon="comment-o" to="/new">消息</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to='/my'>我的</van-tabbar-item>
      </van-tabbar>


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
     }
  },
  mounted(){
      axios({
          url:"http://renaaa.natapp1.cc/pet/animal/showAllPet"
      }).then((data)=>{
          console.log(data.data)
          this.list=data.data
      }) 
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
     onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    fenlei(){
    //   this.$store.commit('login',this.username),
      this.$router.push('/fenlei')
    },
    select(){
    //   this.$store.commit('login',this.username),
      this.$router.push('/select')
    },
    detail(id){
    //   this.$store.commit('login',this.username),
      this.$router.push('/detail/'+id);
    },
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#jiantou{
  margin-left: 4px;
  margin-top: 1px;
  /* font-size: 14px; */
}
#zuche{
  border-bottom: 1px solid #cecece;
  font-size: 16px
}

#nav01 li{
    float: left;
    width: 50%;
    height: 30px;
    margin-top: 60px;
    font-size: 13px;
    /* border-bottom:1px solid #cecece; */
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
    width: 40%;
    /* margin: 3px; */
    border:4px solid #F3F1F1;
    float: left;
    height: 260px;
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
.desc{
  width: 150px;
  height: 40px;
  overflow: hidden;
  color: #cecece
}
.van-nav-bar__title{
  max-width: 100%
}
</style>
>>>>>>> bfb5a5a808fdfab217de2f3562018cdea1dd6199
