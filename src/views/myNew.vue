<template>
    <div id="mn">
        <van-nav-bar
        title="个人主页"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <div id="gr"></div>
        <div id="grs">
            <img src="../assets/ai.jpeg" >
        </div>
        <div>
            <van-tabs v-model="active">
            <van-tab title="我的帖子"><div id="nr1">没有内容
快点翻子蛋面发表第一个站子吧</div></van-tab>
            <van-tab title="我的收藏"><div id="nr2">这个人很懒，没有收藏</div></van-tab>
            </van-tabs>
            
        </div>
        <van-button type="info" size="large">退出登录</van-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:'MyNew',
    data(){
        return{
           active:2 
        }
    },
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        }
    }
}
</script>

<style>
    #mn{
        position: relative;
    }
    #gr{
       width:375px; 
       height:200px;
       background: url(../assets/yuzhou.jpg) no-repeat;
       background-size: 375px 200px;
       opacity:0.5;
       border-radius: 0 0 33% 33%;
    }
    #grs{
        width:96px; 
        height:96px;
        border-radius:50%;
        overflow:hidden;
        position: absolute;
        left:142px;
        top:52px;
    }
    #grs img{
        width:96px; 
        height:96px;
    }
    #nr1{
        width:375px; 
        height:134px;
        background:#e5e5e5;
        padding-top:180px;
    }
    #nr2{
        width:375px; 
        height:134px;
        background:#e5e5e5;
        padding-top:180px; 
    }
</style>
