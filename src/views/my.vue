<template>
    <div id="my">
         <van-nav-bar
        title="我的"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
         <div id="bt"></div>
        <div id="tx">
            <div class='tp'></div>
            <div class='ming'><span>{{item}}</span></div>
            <div class='jian'><van-icon name="arrow" @click="vi"/></div> 
        </div>
        
        <div id="nr">
            <ul>
                <li @click="sz">设置</li>
                <li @click='dz'>我的地址</li>
                <li @click="gy">关于</li>
            </ul>
        </div>
        <div id="footer">
            <van-tabbar v-model="footer">
            <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/cmt">社区</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/Buy">宠购</van-tabbar-item>
            <van-tabbar-item icon="comment-o" to="/new">消息</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:'My',
    data(){
        return{
            footer:4,
            item:'未登录'
        }
    },
    methods: {
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        },
        vi(){
            this.$router.push("/mynew")
        },
        sz(){
           this.$router.push("/register") 
        },
        dz(){
            this.$router.push("/adress") 
        },
        gy(){
            this.$router.push("/about") 
        }
    }
}
</script>

<style scoped="">
    #my{
        position: relative;
        height:100%;
    }
    #bt{
        width:100%;
        height:95vh;
        background:url(../assets/maogou.png) no-repeat;
        background-size: 100% 100%;
        opacity:0.3;
    }
    #tx{
        width:100%;
        height:95px;
        position: relative;
        position: absolute;
        top:30px;
    }
    #tx .tp{
        width:40px;
        height:40px;
        background: #e5e5e5;
        margin:27px 0 28px 17px;
    }
    #tx .ming{
        width:100px;
        height:16px;
        position: absolute;
        left:46px;
        top:36px;
    }
    #tx .jian{
        width:20px;
        height:16px;
        position: absolute;
        right:15px;
        top:40px;
    }
    #nr{
      width:100%;
      position: absolute;
    top:110px;  
    }
    #nr li{
        width:100%;
        height:38px;
        margin-left: 10px;
        text-align: left;
        line-height: 38px;
        border-bottom:1px solid #e5e5e5;
    }
</style>
